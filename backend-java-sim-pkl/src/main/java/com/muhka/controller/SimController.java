package com.muhka.controller;

import com.muhka.model.Users;
import com.muhka.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/")
public class SimController {
    @Autowired
    private UsersRepository usersRepository;

    //Get All User
    @RequestMapping("/users")
    public List<Users> getAllUser(){
        return usersRepository.findAll();
    }
}
