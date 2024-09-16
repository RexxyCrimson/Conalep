<?php

namespace App\Http\Controllers;

use App\Models\Alumno;

class AlumnoController extends Controller
{
    //

    public function getAlumnos($nombre = '')
    {
        // Ocupar si tiene los apellidos en otra columna
        // $alumnos = Alumno::where('nombre', 'LIKE', '%' . $nombre . '%')
        //          ->orWhere('apellido', 'LIKE', '%' . $apellido . '%')
        //          ->get();

        $alumnos = Alumno::take(4)->whereRaw("nombre like ?", ["%" . $nombre . '%'])->orderBy("nombre")->get();

        return response()->json($alumnos);
    }

}
