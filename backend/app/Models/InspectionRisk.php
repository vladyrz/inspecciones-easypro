<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InspectionRisk extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_id',
        'type',
        'description',
        'severity',
        'photo_path',
    ];

    public function inspection()
    {
        return $this->belongsTo(Inspection::class);
    }
}
