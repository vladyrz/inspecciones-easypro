<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Property extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'type',
        'province',
        'canton',
        'district',
        'address',
        'area_land',
        'area_construction',
        'levels',
        'year_built',
        'rooms',
        'bathrooms',
        'parking',
        'has_kitchen',
        'has_laundry',
        'topography',
        'access_type',
        'status',
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function inspections()
    {
        return $this->hasMany(Inspection::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }
}
