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
        Schema::create('inspection_bathrooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('inspection_id')->constrained()->onDelete('cascade');
            $table->string('name')->nullable(); // Baño Principal, Baño 2, etc.

            $table->string('state_overall')->nullable();
            $table->string('toilet_type')->nullable();
            $table->string('toilet_state')->nullable();

            $table->string('sink_type')->nullable();
            $table->string('faucet_state')->nullable();
            $table->boolean('sink_leaks')->default(false);

            $table->string('shower_type')->nullable();
            $table->string('shower_state')->nullable();

            $table->string('ventilation')->nullable();
            $table->text('observations')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_bathrooms');
    }
};
