package com.techmaki.sushi_hub.users.application.controllers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.Arrays;
import java.util.Optional;
import com.techmaki.sushi_hub.users.domain.entity.UserRole;
import com.techmaki.sushi_hub.users.services.UserService;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.techmaki.sushi_hub.users.domain.entity.User;
import com.techmaki.sushi_hub.users.infrastructure.repository.UserRepository;

@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private EntityManager entityManager;

    @MockBean
    private UserService userService;

    @MockBean
    private BCryptPasswordEncoder encoder;

    @Autowired
    private ObjectMapper objectMapper;

    @WithMockUser(username = "user1", roles = {"USER"})
    @Test
    public void testGetUsers() throws Exception {
        User user1 = createTestUser("Test1","test1@test.com",  "pass1",  UserRole.USER);
        User user2 = createTestUser("Test2","test2@test.com",  "pass2",  UserRole.USER);
        when(userRepository.findAllByActiveTrue()).thenReturn(Arrays.asList(user1, user2));

        mockMvc.perform(get("/users").header("Authorization", "Bearer"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Test1"))
                .andExpect(jsonPath("$[1].name").value("Test2"));
    }

    @Test
    public void testGetUser() throws Exception {
        User user3 = createTestUser("Test3","test3@test.com",  "pass3",  UserRole.USER);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user3));

        mockMvc.perform(get("/users/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Test3"));
    }

    @Test
    public void testCreateUser() throws Exception {
        User user4 = createTestUser("Test4","test4@test.com",  "pass4",  UserRole.USER);
        User user = createTestUser("Test4","test4@test.com",  "pass4",  UserRole.USER);
        when(userRepository.save(any(User.class))).thenReturn(user);

        mockMvc.perform(post("/users/subscribe")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(2L))
                .andExpect(jsonPath("$.name").value("Test4"));
    }

    @Test
    public void testUpdateUser() throws Exception {
        User user5 = createTestUser("Test5","test5@test.com",  "pass5",  UserRole.USER);
        User user = createTestUser("Test5","test5@test.com",  "pass5",  UserRole.USER);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenReturn(user5);

        mockMvc.perform(put("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user5)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Test5"));
    }

    @Test
    public void testDeleteUser() throws Exception {
        User user5 = createTestUser("Test5","test5@test.com",  "pass5",  UserRole.USER);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user5));

        mockMvc.perform(delete("/users/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Test5"));
    }

    private User createTestUser(String name, String email, String password, UserRole role) {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
        entityManager.persist(user);
        return user;
    }
}
