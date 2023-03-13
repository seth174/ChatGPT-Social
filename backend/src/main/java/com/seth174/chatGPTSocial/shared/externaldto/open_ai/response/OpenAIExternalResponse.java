package com.seth174.chatGPTSocial.shared.externaldto.open_ai.response;

import lombok.Data;

import java.util.List;

@Data
public class OpenAIExternalResponse {
    private String id;
    private String object;
    private int created;
    private String model;
    private List<Choice> choices;
    private Usage usage;
}

