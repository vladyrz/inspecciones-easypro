<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InspectionBathroom extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_id',
        'name',
        'state_overall',
        'toilet_type',
        'toilet_state',
        'sink_type',
        'faucet_state',
        'sink_leaks',
        'shower_type',
        'shower_state',
        'ventilation',
        'observations',
    ];

    public function inspection()
    {
        return $this->belongsTo(Inspection::class);
    }
}
