package com.muhka.service;

import com.muhka.common.payload.BaseResponse;
import com.muhka.common.payload.user.LoginRequest;
import com.muhka.common.payload.user.UserRequestDTO;


public interface IUserService {

    BaseResponse addUser(UserRequestDTO userRequestDTO);
    BaseResponse loginUser(LoginRequest loginRequest);
}
