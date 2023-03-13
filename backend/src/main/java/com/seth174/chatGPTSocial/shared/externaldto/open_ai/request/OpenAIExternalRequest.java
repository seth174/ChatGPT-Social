package com.seth174.chatGPTSocial.shared.externaldto.open_ai.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class OpenAIExternalRequest {
    private String model;
    private String prompt;
    @JsonProperty("max_tokens")
    private int maxTokens;
    private double temperature;

    public OpenAIExternalRequest(String prompt){
        this.model = OpenAIRequestConstants.MODEL;
        this.prompt = prompt;
        this.maxTokens = OpenAIRequestConstants.MAX_TOKENS;
        this.temperature = OpenAIRequestConstants.TEMPERATURE;
    }
}
