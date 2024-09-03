package br.com.techmaki.ms_users.controllers;

import br.com.techmaki.ms_users.domain.User;
import br.com.techmaki.ms_users.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository repository;

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
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
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
