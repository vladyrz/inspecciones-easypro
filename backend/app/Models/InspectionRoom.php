<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InspectionRoom extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_id',
        'name',
        'floor_type',
        'ceiling_type',
        'wall_type',
        'door_material',
        'door_state',
        'window_frame',
        'window_glass',
        'lighting_type',
        'electrical_state',
        'has_outlets',
        'observations',
    ];

    public function inspection()
    {
        return $this->belongsTo(Inspection::class);
    }
}
