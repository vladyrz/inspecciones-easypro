<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\InspectionController;
use App\Http\Controllers\ValuationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public Routes
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/me', [AuthController::class, 'me']);

    // Properties
    Route::get('/properties', [PropertyController::class, 'index']);
    Route::post('/properties', [PropertyController::class, 'store']);
    Route::get('/properties/{property}', [PropertyController::class, 'show']);
    Route::put('/properties/{property}', [PropertyController::class, 'update']);
    Route::delete('/properties/{property}', [PropertyController::class, 'destroy']);
    Route::post('/properties/{property}/documents', [PropertyController::class, 'uploadDocument']);

    // Inspections
    Route::get('/inspections', [InspectionController::class, 'index']); // Filter by role in controller
    Route::post('/inspections', [InspectionController::class, 'store']); // Request inspection
    Route::get('/inspections/{inspection}', [InspectionController::class, 'show']);

    // Inspector only routes
    Route::middleware('role:inspector,administrador')->group(function () {
        Route::put('/inspections/{inspection}', [InspectionController::class, 'update']); // Submit data
        Route::post('/inspections/{inspection}/photos', [InspectionController::class, 'uploadPhoto']);
    });

    // Admin only routes
    Route::middleware('role:administrador')->group(function () {
        Route::put('/inspections/{inspection}/assign', [InspectionController::class, 'assignInspector']);
        Route::put('/documents/{document}/validate', [PropertyController::class, 'validateDocument']);
    });

    // Valuations
    Route::post('/inspections/{inspection}/valuation', [ValuationController::class, 'generate']);
    Route::get('/inspections/{inspection}/valuation', [ValuationController::class, 'show']);
});
