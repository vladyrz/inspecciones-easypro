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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->comment('Owner');
            // General Info
            $table->string('type'); // Casa, Apartamento, Local, Lote, Otro
            $table->string('province');
            $table->string('canton');
            $table->string('district');
            $table->text('address');

            // Dimensions & Characteristics
            $table->decimal('area_land', 10, 2)->nullable();
            $table->decimal('area_construction', 10, 2)->nullable();
            $table->integer('levels')->default(1);
            $table->integer('year_built')->nullable();

            // Rooms/Spaces counts (triggers for inspection)
            $table->integer('rooms')->default(0);
            $table->integer('bathrooms')->default(0);
            $table->integer('parking')->default(0);
            $table->boolean('has_kitchen')->default(true);
            $table->boolean('has_laundry')->default(true);

            // Terrain/Access (Static info)
            $table->string('topography')->nullable(); // Plana, Inclinada, etc.
            $table->string('access_type')->nullable(); // Asfaltada, Lastre, etc.

            $table->string('status')->default('active'); // active, sold, etc.
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
