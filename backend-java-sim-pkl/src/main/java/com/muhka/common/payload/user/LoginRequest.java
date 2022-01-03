package com.muhka.common.payload.user;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
