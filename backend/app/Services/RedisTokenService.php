<?php

namespace App\Services;

use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;

class RedisTokenService
{
    protected $prefix = 'auth_token:';
    protected $ttl = 3600; // 1 hour

    public function createToken($userId, $tokenName = 'auth_token')
    {
        $token = Str::random(80);
        $hashedToken = hash('sha256', $token);

        $key = $this->prefix . $hashedToken;

        Redis::setex($key, $this->ttl, json_encode([
            'user_id' => $userId,
            'name' => $tokenName,
            'created_at' => now()->toDateTimeString(),
        ]));

        return $token;
    }

    public function validateToken($token)
    {
        $hashedToken = hash('sha256', $token);
        $key = $this->prefix . $hashedToken;

        $data = Redis::get($key);

        return $data ? json_decode($data, true) : null;
    }

    public function deleteToken($token)
    {
        $hashedToken = hash('sha256', $token);
        $key = $this->prefix . $hashedToken;

        return Redis::del($key);
    }
}
