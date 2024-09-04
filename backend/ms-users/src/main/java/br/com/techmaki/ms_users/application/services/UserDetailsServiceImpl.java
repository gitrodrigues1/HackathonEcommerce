package br.com.techmaki.ms_users.application.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.techmaki.ms_users.application.config.CustomUserDetails;
import br.com.techmaki.ms_users.infrastructure.database.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
            .map((user) -> new CustomUserDetails(user))
            .orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }
    
}
