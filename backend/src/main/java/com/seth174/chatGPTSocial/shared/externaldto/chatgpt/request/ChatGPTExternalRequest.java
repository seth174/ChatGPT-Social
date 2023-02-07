package com.seth174.chatGPTSocial.shared.externaldto.chatgpt.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ChatGPTExternalRequest {
    private String model;
    private String prompt;
    @JsonProperty("max_tokens")
    private int maxTokens;
    private double temperature;

    public ChatGPTExternalRequest(String prompt){
        this.model = ChatGPTRequestConstants.MODEL;
        this.prompt = prompt;
        this.maxTokens = ChatGPTRequestConstants.MAX_TOKENS;
        this.temperature = ChatGPTRequestConstants.TEMPERATURE;
    }
}
