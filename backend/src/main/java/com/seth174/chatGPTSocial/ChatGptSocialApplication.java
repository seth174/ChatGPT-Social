package com.seth174.chatGPTSocial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
@EnableAutoConfiguration(exclude = {SecurityAutoConfiguration.class})
public class ChatGptSocialApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChatGptSocialApplication.class, args);
	}

}
