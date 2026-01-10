<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\RedisTokenService;

class AuthController extends Controller
{
    protected $tokenService;

    public function __construct(RedisTokenService $tokenService)
    {
        $this->tokenService = $tokenService;
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!auth()->attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = auth()->user();
        $token = $this->tokenService->createToken($user->id);

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();
        $this->tokenService->deleteToken($token);

        return response()->json(['message' => 'Logged out successfully']);
    }
}
