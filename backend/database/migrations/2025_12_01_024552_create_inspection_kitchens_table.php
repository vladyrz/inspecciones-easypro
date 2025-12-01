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
        Schema::create('inspection_kitchens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('inspection_id')->constrained()->onDelete('cascade');

            $table->string('state_overall')->nullable();
            $table->string('furniture_type')->nullable();
            $table->string('furniture_state')->nullable();

            $table->string('countertop_material')->nullable();
            $table->string('countertop_state')->nullable();

            $table->string('sink_type')->nullable();
            $table->string('faucet_type')->nullable();
            $table->boolean('has_leaks')->default(false);

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
        Schema::dropIfExists('inspection_kitchens');
    }
};
