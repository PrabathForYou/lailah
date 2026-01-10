<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('health', function () {
    return response()->json(['status' => 'OK'], 200);
});

Route::post('user', [UserController::class, 'store']);

Route::post('auth/login', [AuthController::class, 'login']);

Route::middleware('redis.auth')->group(function () {
    Route::get('test', function (Request $request) {
        $user = $request->user();
        return response()->json(['message' => 'Authenticated', 'user' => $user], 200);
    });
});
