package com.muhka.service.impl;

import at.favre.lib.crypto.bcrypt.BCrypt;
import com.muhka.common.payload.BaseResponse;
import com.muhka.common.payload.CommonCode;
import com.muhka.common.payload.CommonMessage;
import com.muhka.common.payload.user.AuthResponse;
import com.muhka.common.payload.user.LoginRequest;
import com.muhka.common.payload.user.UserRequestDTO;
import com.muhka.model.Users;
import com.muhka.repository.IUsersRepository;
import com.muhka.service.IUserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class UserImpl implements IUserService {

    @Autowired
    IUsersRepository usersRepository;

    @Override
    public BaseResponse addUser(UserRequestDTO userRequestDTO) {

        try {
            String emailRgx = "^([a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*)@([a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*[.][a-zA-Z]{2,})";
            String passwordRgx = "^[a-zA-Z0-9@\\\\#$%&*()_+\\]\\[';:?.,!^-]{8,}$";

            Date date = new Date();

            boolean emailTrue = Pattern.matches(emailRgx, userRequestDTO.getEmail());
            boolean passwordTrue = Pattern.matches(passwordRgx, userRequestDTO.getPassword());
            String bcryptHashString = BCrypt.withDefaults().hashToString(12, userRequestDTO.getPassword().toCharArray());

            if (emailTrue && passwordTrue) {
                Users users = new Users();
                users.setName(userRequestDTO.getFullname());
                users.setEmail(userRequestDTO.getEmail());
                users.setPassword(bcryptHashString);
                users.setRoleId(userRequestDTO.getRoleId());
                users.setDate_created(date);

                usersRepository.save(users);
                return new BaseResponse(CommonMessage.REGISTER_SUCCESS, CommonCode.SUCCESS, users);
            } else {
                return new BaseResponse<>(CommonMessage.REGISTER_ERROR, CommonCode.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new BaseResponse(CommonMessage.REGISTER_ERROR, CommonCode.BAD_REQUEST);
        }
    }

    @Override
    public BaseResponse loginUser(LoginRequest loginRequest) {
        Users users = usersRepository.findByEmail(loginRequest.getEmail());
        String password = loginRequest.getPassword();
        String passwordUserDB = users.getPassword();
        BCrypt.Result result = BCrypt.verifyer().verify(password.toCharArray(), passwordUserDB);

        if (users != null) {
            if (result.verified) {
                String token = getJWTToken(users.getEmail());
                AuthResponse authResponse = new AuthResponse();
                authResponse.setEmail(users.getEmail());
                authResponse.setName(users.getName());
                authResponse.setToken(token);

                return new BaseResponse(CommonMessage.LOGIN_SUCCESS, CommonCode.SUCCESS, authResponse);
            } else {
                return new BaseResponse(CommonMessage.LOGIN_PASSWORD);
            }
        } else {
            return new BaseResponse(CommonMessage.LOGIN_ERROR);
        }
    }


    private String getJWTToken(String username) {
        String secretKey = "mySecretKey";
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_USER");

        String token = Jwts
                .builder()
                .setId("softtekJWT")
                .setSubject(username)
                .claim("authorities",
                        grantedAuthorities.stream()
                                .map(GrantedAuthority::getAuthority)
                                .collect(Collectors.toList()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return "Bearer " + token;
    }

    private static void delay() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException _ignored) {
            Thread.currentThread().interrupt();
        }
    }
}
