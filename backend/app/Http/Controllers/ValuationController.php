<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use App\Models\Valuation;
use App\Services\ValuationService;
use Illuminate\Http\Request;

class ValuationController extends Controller
{
    protected $valuationService;

    public function __construct(ValuationService $valuationService)
    {
        $this->valuationService = $valuationService;
    }

    public function generate(Request $request, Inspection $inspection)
    {
        $this->authorize('view', $inspection);

        if ($inspection->status !== 'completed' && !$request->has('force')) {
            return response()->json(['message' => 'Inspection not completed'], 422);
        }

        $valuation = $this->valuationService->generateValuation($inspection);

        return response()->json($valuation);
    }

    public function show(Inspection $inspection)
    {
        $this->authorize('view', $inspection);

        $valuation = $inspection->valuation;

        if (!$valuation) {
            return response()->json(['message' => 'Valuation not found'], 404);
        }

        return response()->json([
            'valuation' => $valuation,
            'report_structure' => [
                'title' => 'Estudio Estratégico de Valor Easypro',
                'summary' => 'Resumen general del inmueble...',
                'market_analysis' => 'Comparativo de mercado...',
                'final_recommendation' => 'Valor sugerido: ' . number_format($valuation->final_value),
            ]
        ]);
    }
}
