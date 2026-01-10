<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\AddUserRequest;

class UserController extends Controller
{
    public function store(AddUserRequest $request)
    {
        $user = new User();
        $user->user_type = $request->userType;
        $user->first_name = $request->firstName;
        $user->last_name = $request->lastName;
        $user->full_name = $request->fullName;
        $user->code = $request->code ?? null;
        $user->address = $request->address ?? null;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }
}
