package com.muhka.common.payload.user;

import lombok.Data;

@Data
public class UserRequestDTO {
    private String email;
    private String password;
    private String fullname;
    private Integer roleId;
}
