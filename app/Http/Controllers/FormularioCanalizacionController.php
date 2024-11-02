<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\FormularioCanalizacion;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormularioCanalizacionController extends Controller
{

    private array $rules = [
        'fecha' => 'required|date',
        'tutor' => 'required|String',
        'alumno'=> 'required|string',
        'descripcion_problema' => 'required|string|max:225',
    ];
    private array $errorMessages = [
        'fecha.required' => 'El campo fecha es obligatorio',
        'tutor.required' => 'El tutor es obligatorio',
        'alumno.required' => 'El campo alumno es obligatorio',
        'descripcion_problema' => 'Es necesario llenar este campo por favor',
    ];


    public function create()
    {
        return  Inertia::render('Canalizar');
    }
    
    public function store(Request $request): RedirectResponse
    {
        $request->validate( $this -> rules, $this -> errorMessages);

        FormularioCanalizacion::create([
            'fecha' => $request->fecha,
            'tutor' => $request->tutor,
            'alumno' => $request->alumno,
            'matricula' => $request->matricula,
            'turno' => $request->turno,
            'carrera' => $request->carrera,
            'grupo' => $request->grupo,
            'modulo' => $request->modulo,
            'descripcion_problema' => $request->descripcion_problema,
            'clasificacion_problematica' => $request->clasificacion_problematica
        ]);

        
        return redirect(route('canalizar.canalizar'));
    }
}
