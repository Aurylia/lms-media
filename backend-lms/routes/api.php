<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\AuthController; // ✅ tambahkan controller-nya

// ✅ Route untuk login dan autentikasi
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

// ✅ Route default bawaan Laravel (boleh tetap ada)
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// ✅ Route tambahan untuk cek semua user (bebas akses)
Route::get('/users', function () {
    return response()->json(User::all());
});
