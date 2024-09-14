package com.techmaki.sushi_hub.users.infrastructure.repository;

import com.techmaki.sushi_hub.users.domain.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import java.util.List;
import java.util.Optional;
import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void findAllByActiveTrue() {
        List<User> activeUsers = userRepository.findAllByActiveTrue();
        assertThat(activeUsers).isNotEmpty();
    }

    @Test
    void findByEmail() {
        Optional<User> user = userRepository.findByEmail("john.doe@example.com");
        assertThat(user).isPresent();
        user.ifPresent(u -> assertThat(u.getEmail()).isEqualTo("john.doe@example.com"));
    }
}