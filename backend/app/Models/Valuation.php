<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Valuation extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_id',
        'property_id',
        'value_physical',
        'value_market',
        'value_institutional',
        'value_contextual',
        'final_value',
        'quick_sale_value',
        'calculation_details',
    ];

    protected $casts = [
        'calculation_details' => 'array',
    ];

    public function inspection()
    {
        return $this->belongsTo(Inspection::class);
    }

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
