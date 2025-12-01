<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InspectionFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        'inspection_id',
        'category',
        'data',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function inspection()
    {
        return $this->belongsTo(Inspection::class);
    }
}
