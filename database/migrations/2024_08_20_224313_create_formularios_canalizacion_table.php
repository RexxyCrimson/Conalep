<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('formularios_canalizacion', function (Blueprint $table) {
            $table->id('folio');
            $table->date('fecha')->nullable(false);
            $table->string('tutor')->nullable(false);
            $table->string('alumno')->nullable(false);
            $table->string('matricula')->nullable(false);
            $table->string('turno')->nullable(false);
            $table->string('carrera')->nullable(false);
            $table->string('grupo')->nullable(false);
            $table->string('modulo')->nullable(false);
            $table->string('descripcion_problema')->nullable(false);
            $table->string('clasificacion_problematica')->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formularios_canalizacion');
    }
};
