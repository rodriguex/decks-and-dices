<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TuaTiaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/shop', function () {
    return Inertia::render('Shop');
});

require __DIR__.'/auth.php';
