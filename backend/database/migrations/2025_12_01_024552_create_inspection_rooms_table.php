<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inspection_rooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('inspection_id')->constrained()->onDelete('cascade');
            $table->string('name')->nullable(); // Dormitorio 1, Sala, etc.

            // Finishes
            $table->string('floor_type')->nullable();
            $table->string('ceiling_type')->nullable();
            $table->string('wall_type')->nullable();

            // Elements
            $table->string('door_material')->nullable();
            $table->string('door_state')->nullable();
            $table->string('window_frame')->nullable();
            $table->string('window_glass')->nullable();

            // Systems
            $table->string('lighting_type')->nullable();
            $table->string('electrical_state')->nullable();
            $table->boolean('has_outlets')->default(true);

            $table->text('observations')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_rooms');
    }
};
