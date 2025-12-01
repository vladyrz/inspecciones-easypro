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
        Schema::create('inspections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->foreignId('inspector_id')->nullable()->constrained('users')->onDelete('set null');

            $table->string('status')->default('pending'); // pending, in_progress, review, completed
            $table->dateTime('scheduled_at')->nullable();
            $table->dateTime('completed_at')->nullable();

            $table->text('general_observations')->nullable();

            // Flags for sections activated during inspection if dynamic
            $table->boolean('is_luxury')->default(false);
            $table->boolean('is_condo')->default(false);

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspections');
    }
};
