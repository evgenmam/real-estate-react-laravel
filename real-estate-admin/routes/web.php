<?php

use App\Http\Controllers\PropertyController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('home.index');
})->name('home')->middleware(['auth']);



require __DIR__.'/auth.php';

Route::resource('properties', PropertyController::class)->middleware(['auth']);
