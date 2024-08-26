<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormularioCanalizacion extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = "Formularios_canalizacion";
    protected $fillable = [
        'fecha',
        'tutor',
        'alumno',
        'matricula',
        'turno',
        'carrera',
        'grupo',
        'modulo',
        'descripcion_problema',
        'clasificacion_problematica'
    ];

}
