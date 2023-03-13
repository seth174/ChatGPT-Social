package com.seth174.chatGPTSocial.shared;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EnvConfig {
    @Getter
    @Value("${external.openaiservice.apikey}")
    private String openAIKey;
}
