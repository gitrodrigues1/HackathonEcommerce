package com.techmaki.sushi_hub.users.application.controllers;

import java.time.LocalDateTime;
import java.util.List;

import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.infrastructure.repository.UserRepository;
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
public class UserController {
    @Autowired
    private UserRepository repository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = repository.findAllByActiveTrue();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = repository.findById(id).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            return ResponseEntity.ok(user);
        }
    }

    @Transactional
    @PostMapping("/subscribe")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setActive(true);
        repository.save(user);
        return ResponseEntity.ok(user);
    }

    @Transactional
    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        User userToUpdate = repository.findById(user.getId()).orElse(null);
        if (userToUpdate == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            userToUpdate.setName(user.getName());
            userToUpdate.setEmail(user.getEmail());
            userToUpdate.setPassword(user.getPassword());
            userToUpdate.setRole(user.getRole());
            userToUpdate.setUpdatedAt(LocalDateTime.now());
            repository.save(userToUpdate);
            return ResponseEntity.ok(userToUpdate);
        }
    }

    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id) {
        User user = repository.findById(id).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            repository.delete(user);
            return ResponseEntity.ok(user);
        }
    }
}
