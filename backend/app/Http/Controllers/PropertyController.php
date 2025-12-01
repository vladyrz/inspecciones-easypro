<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('administrador') || $user->hasRole('inspector')) {
            return response()->json(Property::with('owner')->paginate(10));
        }

        return response()->json($user->properties()->paginate(10));
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string',
            'province' => 'required|string',
            'canton' => 'required|string',
            'district' => 'required|string',
            'address' => 'required|string',
            'area_land' => 'required|numeric',
            'area_construction' => 'required|numeric',
            'levels' => 'required|integer',
            'rooms' => 'required|integer',
            'bathrooms' => 'required|integer',
        ]);

        $property = $request->user()->properties()->create($request->all());

        return response()->json($property, 201);
    }

    public function show(Property $property)
    {
        $this->authorize('view', $property);
        return response()->json($property->load('documents', 'inspections'));
    }

    public function update(Request $request, Property $property)
    {
        $this->authorize('update', $property);
        $property->update($request->all());
        return response()->json($property);
    }

    public function destroy(Property $property)
    {
        $this->authorize('delete', $property);
        $property->delete();
        return response()->json(['message' => 'Property deleted']);
    }

    public function uploadDocument(Request $request, Property $property)
    {
        $this->authorize('update', $property);

        $request->validate([
            'file' => 'required|file|mimes:pdf,jpg,png,doc,docx|max:10240',
            'type' => 'required|string', // datum, registry_report, etc.
        ]);

        $path = $request->file('file')->store('documents');

        $document = $property->documents()->create([
            'type' => $request->type,
            'path' => $path,
            'status' => 'pending',
        ]);

        return response()->json($document, 201);
    }

    public function validateDocument(Request $request, Document $document)
    {
        // Admin only (middleware handled in route)
        $request->validate(['status' => 'required|in:approved,rejected']);
        $document->update(['status' => $request->status]);
        return response()->json($document);
    }
}
