<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\RedisTokenService;
use App\Models\User;

class RedisTokenAuth
{
    protected $tokenService;

    public function __construct(RedisTokenService $tokenService)
    {
        $this->tokenService = $tokenService;
    }

    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }

        $tokenData = $this->tokenService->validateToken($token);

        if (!$tokenData) {
            return response()->json(['message' => 'Invalid or expired token.'], 401);
        }

        $user = User::find($tokenData['user_id']);

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 401);
        }

        auth()->setUser($user);

        return $next($request);
    }
}
