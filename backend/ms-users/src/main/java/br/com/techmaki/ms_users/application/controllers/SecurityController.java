package br.com.techmaki.ms_users.application.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.techmaki.ms_users.application.services.AuthenticationService;

@RestController
@RequestMapping("/auth")
public class SecurityController {
    
    private final AuthenticationService authenticationService;
    
    public SecurityController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/token")
    public String authenticate(Authentication authentication) {
        return authenticationService.authenticate(authentication);
    }
}
