<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inspection extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'property_id',
        'inspector_id',
        'status',
        'scheduled_at',
        'completed_at',
        'general_observations',
        'is_luxury',
        'is_condo',
    ];

    protected $casts = [
        'scheduled_at' => 'datetime',
        'completed_at' => 'datetime',
        'is_luxury' => 'boolean',
        'is_condo' => 'boolean',
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function inspector()
    {
        return $this->belongsTo(User::class, 'inspector_id');
    }

    public function rooms()
    {
        return $this->hasMany(InspectionRoom::class);
    }

    public function bathrooms()
    {
        return $this->hasMany(InspectionBathroom::class);
    }

    public function kitchens()
    {
        return $this->hasMany(InspectionKitchen::class);
    }

    public function features()
    {
        return $this->hasMany(InspectionFeature::class);
    }

    public function risks()
    {
        return $this->hasMany(InspectionRisk::class);
    }

    public function valuation()
    {
        return $this->hasOne(Valuation::class);
    }
}
