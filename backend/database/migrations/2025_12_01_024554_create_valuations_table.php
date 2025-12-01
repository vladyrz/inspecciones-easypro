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
        Schema::create('valuations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('inspection_id')->constrained()->onDelete('cascade');
            $table->foreignId('property_id')->constrained()->onDelete('cascade');

            // Component Values
            $table->decimal('value_physical', 15, 2)->nullable();
            $table->decimal('value_market', 15, 2)->nullable();
            $table->decimal('value_institutional', 15, 2)->nullable();
            $table->decimal('value_contextual', 15, 2)->nullable();

            // Final Results
            $table->decimal('final_value', 15, 2)->nullable();
            $table->decimal('quick_sale_value', 15, 2)->nullable();

            $table->json('calculation_details')->nullable(); // Store the breakdown/logic used
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('valuations');
    }
};
