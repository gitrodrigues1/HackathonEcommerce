package com.techmaki.sushi_hub;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
class SushiHubApplicationTests {

	@Test
	void contextLoads() {
	}

}
