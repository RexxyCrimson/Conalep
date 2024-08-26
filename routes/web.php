<?php

use App\Http\Controllers\FormularioCanalizacionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    // Auth/Login
    // Welcome
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::name('canalizar.')->group(function () {
    Route::get(
        '/canalizar',
        [FormularioCanalizacionController::class, 'create']
        // Route asignada "canalizar.canalizar"
    )->name('canalizar');

    Route::post('/post', 
    [FormularioCanalizacionController::class, 'store'])
     // Route assigned name "canalizar.mandarDatos"
    ->name('post');
});






