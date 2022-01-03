package com.muhka.common.payload.user;

import lombok.Data;

@Data
public class AuthResponse {
    String name;
    String email;
    String token;
}
