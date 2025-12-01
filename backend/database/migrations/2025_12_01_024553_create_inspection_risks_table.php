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
        Schema::create('inspection_risks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('inspection_id')->constrained()->onDelete('cascade');
            $table->string('type'); // natural, structural, environmental
            $table->text('description');
            $table->string('severity')->default('medium'); // low, medium, high
            $table->string('photo_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_risks');
    }
};
