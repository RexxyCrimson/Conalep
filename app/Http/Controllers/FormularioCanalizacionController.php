<?php

namespace App\Http\Controllers;

use App\Models\FormularioCanalizacion;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Inertia\Inertia;

class FormularioCanalizacionController extends Controller
{
    public function create()
    {
        return  Inertia::render('Canalizar');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'fecha' => 'required|date',
        ]);

        FormularioCanalizacion::create([
            'fecha' => $request->fecha,
            'tutor' => $request->tutor,
            'alumno' => $request->alumno,
            'matricula' => '0112',
            'turno' => 'vespertino',
            'carrera' => 'programación',
            'grupo' => 'A1',
            'modulo' => $request->modulo,
            'descripcion_problema' => $request->descripcion_problema,
            'clasificacion_problematica' => $request->clasificacion_problematica
        ]);

        
        return redirect(route('canalizar.canalizar'));;
    }
}
