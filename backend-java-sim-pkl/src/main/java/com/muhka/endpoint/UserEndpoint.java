package com.muhka.endpoint;

import com.muhka.common.payload.BaseResponse;
import com.muhka.common.payload.user.LoginRequest;
import com.muhka.common.payload.user.UserRequestDTO;
import com.muhka.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/users")
public class UserEndpoint {

    @Autowired
    private IUserService userService;

    @PostMapping("/registration-user")
    public BaseResponse addUser(@RequestBody UserRequestDTO userRequestDTO) {
        return userService.addUser(userRequestDTO);
    }

    @PostMapping("/user-login")
    public BaseResponse loginUser(@RequestBody LoginRequest loginRequest){
        return userService.loginUser(loginRequest);
    }
}
