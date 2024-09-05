package com.techmaki.sushi_hub.users.application.controllers;

import com.techmaki.sushi_hub.users.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
public class SecurityController {

    @Autowired
    private final AuthenticationService authenticationService;
    
    public SecurityController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/token")
    public String authenticate(Authentication authentication) {
        return authenticationService.authenticate(authentication);
    }
}
