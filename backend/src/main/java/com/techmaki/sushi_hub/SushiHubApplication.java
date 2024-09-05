package com.techmaki.sushi_hub;

import com.techmaki.sushi_hub.users.infrastructure.securityconfig.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class SushiHubApplication {

	public static void main(String[] args) {
		SpringApplication.run(SushiHubApplication.class, args);
	}

}
