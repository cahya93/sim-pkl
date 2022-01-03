package com.muhka;

import com.muhka.config.JWTAutorization;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@SpringBootApplication
public class MuhkaApplication {

    public static void main(String[] args) {
        SpringApplication.run(MuhkaApplication.class, args);
    }

    @EnableWebSecurity
    @Configuration
    class WebSecurityConfig extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().disable()
                    .addFilterAfter(new JWTAutorization(), UsernamePasswordAuthenticationFilter.class)
                    .authorizeRequests()
                    .antMatchers(HttpMethod.POST, "/api/v1/users/user-login").permitAll()
                    .antMatchers(HttpMethod.POST, "/api/v1/users/registration-user").permitAll()
                    .antMatchers(HttpMethod.GET, "/api/v1/kompetensi-keahlian").permitAll()
                    .anyRequest().authenticated();
        }
    }

}
