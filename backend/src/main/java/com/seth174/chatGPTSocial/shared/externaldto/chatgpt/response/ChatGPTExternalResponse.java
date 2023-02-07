package com.seth174.chatGPTSocial.shared.externaldto.chatgpt.response;

import lombok.Data;

import java.util.List;

@Data
public class ChatGPTExternalResponse {
    private String id;
    private String object;
    private int created;
    private String model;
    private List<Choice> choices;
    private Usage usage;
}

