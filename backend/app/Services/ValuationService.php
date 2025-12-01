<?php

namespace App\Services;

use App\Models\Inspection;
use App\Models\Property;
use App\Models\Valuation;

class ValuationService
{
    public function generateValuation(Inspection $inspection)
    {
        $property = $inspection->property;

        // 1. Physical Value (Ross-Heidecke) - 25%
        $physicalValue = $this->calculatePhysicalValue($property, $inspection);

        // 2. Market Value (Comparative) - 35%
        $marketValue = $this->calculateMarketValue($property);

        // 3. Institutional Value - 20%
        $institutionalValue = $this->calculateInstitutionalValue($property);

        // 4. Contextual Value - 20%
        $contextualValue = $this->calculateContextualValue($property, $inspection);

        // Weighted Final Value
        $finalValue = ($physicalValue * 0.25) +
            ($marketValue * 0.35) +
            ($institutionalValue * 0.20) +
            ($contextualValue * 0.20);

        // Quick Sale Value (e.g., 85-90% of market value)
        $quickSaleValue = $finalValue * 0.90;

        return Valuation::updateOrCreate(
            ['inspection_id' => $inspection->id],
            [
                'property_id' => $property->id,
                'value_physical' => $physicalValue,
                'value_market' => $marketValue,
                'value_institutional' => $institutionalValue,
                'value_contextual' => $contextualValue,
                'final_value' => $finalValue,
                'quick_sale_value' => $quickSaleValue,
                'calculation_details' => [
                    'physical_breakdown' => 'Calculated using Ross-Heidecke method based on age and state.',
                    'market_comparables' => 'Based on average price/m2 in ' . $property->district,
                    'institutional_ref' => 'Base fiscal value adjustment.',
                    'contextual_factors' => 'Adjusted for risks and amenities.',
                ]
            ]
        );
    }

    protected function calculatePhysicalValue(Property $property, Inspection $inspection)
    {
        // Simplified Ross-Heidecke Logic
        // Base Construction Value (e.g., 450,000 CRC/m2 for new luxury, 350,000 standard)
        $baseValuePerM2 = 350000;

        // Depreciate based on age (1% per year linear for simplicity in this MVP)
        $age = 2024 - ($property->year_built ?? 2024);
        $depreciationFactor = max(0.5, 1 - ($age * 0.01)); // Min 50% value

        // State factor from inspection
        // We could iterate over rooms to get an average state, but let's use a general factor
        $stateFactor = 1.0; // Default Good
        // If we had a 'state' field in inspection or calculated from rooms:
        // Excellent = 1.0, Good = 0.9, Regular = 0.7, Bad = 0.5

        $constructionValue = $property->area_construction * $baseValuePerM2 * $depreciationFactor * $stateFactor;

        // Land Value (e.g., 80,000 CRC/m2)
        $landValue = $property->area_land * 80000;

        return $constructionValue + $landValue;
    }

    protected function calculateMarketValue(Property $property)
    {
        // Placeholder: In a real system, this would query a database of comparables or scrape sites
        // For now, let's assume a market value slightly higher than physical for "Good" areas
        $avgM2Price = 400000; // Combined Land+Construction roughly
        return ($property->area_construction + ($property->area_land * 0.3)) * $avgM2Price;
    }

    protected function calculateInstitutionalValue(Property $property)
    {
        // Fiscal value usually lower
        return $this->calculateMarketValue($property) * 0.6;
    }

    protected function calculateContextualValue(Property $property, Inspection $inspection)
    {
        // Start with market value
        $value = $this->calculateMarketValue($property);

        // Adjust for Risks
        $riskCount = $inspection->risks()->where('severity', 'high')->count();
        if ($riskCount > 0) {
            $value *= 0.8; // -20% for high risks
        }

        // Adjust for Amenities (Luxury/Condo)
        if ($inspection->is_luxury) {
            $value *= 1.15; // +15%
        }
        if ($inspection->is_condo) {
            $value *= 1.10; // +10% security/amenities
        }

        return $value;
    }
}
