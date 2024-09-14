package com.techmaki.sushi_hub.users.application.controllers;

import java.time.LocalDateTime;
import java.util.List;

import com.techmaki.sushi_hub.users.application.dtos.UserResponse;
import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.infrastructure.repository.UserRepository;

import com.techmaki.sushi_hub.users.services.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/users")
@Tag(name = "Users Controller", description = "API Restful para cadastro de usuários.")
public class UserController {
    @Autowired
    private UserRepository repository;

    @Autowired
    UserService userService;



    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getUser(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            return ResponseEntity.ok(user);
        }
    }

    @Transactional
    @PostMapping("/subscribe")
    public ResponseEntity<UserResponse> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user).toResponse());
    }

    @Transactional
    @PutMapping
    public ResponseEntity<UserResponse> updateUser(@RequestBody User user) {
        User userToUpdate = userService.updateUser(user);
        if (userToUpdate == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            return ResponseEntity.ok(userToUpdate.toResponse());
        }
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id) {
        User user = userService.deleteUser(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            return ResponseEntity.ok(user);
        }
    }
}
