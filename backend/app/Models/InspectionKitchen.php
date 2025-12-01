<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InspectionKitchen extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_id',
        'state_overall',
        'furniture_type',
        'furniture_state',
        'countertop_material',
        'countertop_state',
        'sink_type',
        'faucet_type',
        'has_leaks',
        'ventilation',
        'observations',
    ];

    public function inspection()
    {
        return $this->belongsTo(Inspection::class);
    }
}
