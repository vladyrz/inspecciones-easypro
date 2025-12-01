<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use App\Models\Property;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InspectionController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('administrador')) {
            return response()->json(Inspection::with(['property', 'inspector'])->paginate(10));
        }

        if ($user->hasRole('inspector')) {
            return response()->json(Inspection::with(['property'])->where('inspector_id', $user->id)->paginate(10));
        }

        // Seller sees inspections for their properties
        return response()->json(Inspection::whereHas('property', function ($q) use ($user) {
            $q->where('user_id', $user->id);
        })->with('inspector')->paginate(10));
    }

    public function store(Request $request)
    {
        $request->validate([
            'property_id' => 'required|exists:properties,id',
            'scheduled_at' => 'nullable|date',
        ]);

        $property = Property::findOrFail($request->property_id);

        // Ensure user owns property
        if ($request->user()->id !== $property->user_id && !$request->user()->hasRole('administrador')) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $inspection = Inspection::create([
            'property_id' => $property->id,
            'status' => 'pending',
            'scheduled_at' => $request->scheduled_at,
        ]);

        return response()->json($inspection, 201);
    }

    public function show(Inspection $inspection)
    {
        // Authorization check needed here (Owner, Assigned Inspector, Admin)
        return response()->json($inspection->load([
            'property',
            'rooms',
            'bathrooms',
            'kitchens',
            'features',
            'risks',
            'valuation'
        ]));
    }

    public function update(Request $request, Inspection $inspection)
    {
        // Inspector submitting data
        // This is a complex method that receives a large JSON payload with all inspection details

        $data = $request->all();

        DB::transaction(function () use ($inspection, $data) {
            // Update main inspection details
            $inspection->update([
                'general_observations' => $data['general_observations'] ?? $inspection->general_observations,
                'is_luxury' => $data['is_luxury'] ?? $inspection->is_luxury,
                'is_condo' => $data['is_condo'] ?? $inspection->is_condo,
                'status' => 'in_progress', // Or completed if flagged
            ]);

            // Handle Rooms
            if (isset($data['rooms'])) {
                $inspection->rooms()->delete(); // Simple replacement strategy for now
                $inspection->rooms()->createMany($data['rooms']);
            }

            // Handle Bathrooms
            if (isset($data['bathrooms'])) {
                $inspection->bathrooms()->delete();
                $inspection->bathrooms()->createMany($data['bathrooms']);
            }

            // Handle Kitchens
            if (isset($data['kitchens'])) {
                $inspection->kitchens()->delete();
                $inspection->kitchens()->createMany($data['kitchens']);
            }

            // Handle Features (Luxury/Condo/Commercial)
            if (isset($data['features'])) {
                $inspection->features()->delete();
                foreach ($data['features'] as $feature) {
                    $inspection->features()->create($feature);
                }
            }

            // Handle Risks
            if (isset($data['risks'])) {
                $inspection->risks()->delete();
                $inspection->risks()->createMany($data['risks']);
            }
        });

        return response()->json($inspection->load(['rooms', 'bathrooms', 'features']));
    }

    public function assignInspector(Request $request, Inspection $inspection)
    {
        $request->validate(['inspector_id' => 'required|exists:users,id']);

        $inspector = User::findOrFail($request->inspector_id);
        if (!$inspector->hasRole('inspector')) {
            return response()->json(['message' => 'User is not an inspector'], 422);
        }

        $inspection->update(['inspector_id' => $inspector->id]);

        return response()->json($inspection);
    }

    public function uploadPhoto(Request $request, Inspection $inspection)
    {
        $request->validate([
            'file' => 'required|image|max:10240',
            'category' => 'required|string', // facade, room, risk, etc.
        ]);

        $path = $request->file('file')->store('inspection_photos');

        return response()->json(['path' => $path]);
    }
}
