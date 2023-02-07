package com.seth174.chatGPTSocial.service;

import com.seth174.chatGPTSocial.client.ChatGPTClient;
import com.seth174.chatGPTSocial.shared.dto.chatgpt.request.ChatGPTRequest;
import com.seth174.chatGPTSocial.shared.dto.chatgpt.response.ChatGPTResponse;
import com.seth174.chatGPTSocial.shared.externaldto.chatgpt.request.ChatGPTExternalRequest;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class ChatGPTService {
    private final ChatGPTClient chatGPTClient;
    public ChatGPTService(ChatGPTClient chatGPTClient){
        this.chatGPTClient = chatGPTClient;
    }
    public Mono<ChatGPTResponse> postChatGPTRequest(ChatGPTRequest request){
        ChatGPTExternalRequest chatGPTExternalRequest = new ChatGPTExternalRequest(request.getPrompt());
        return chatGPTClient.postChatGPTRequest(chatGPTExternalRequest)
                .onErrorResume(err -> {
                    throw new RuntimeException();
                })
                .map(response -> new ChatGPTResponse(response.getChoices().get(0).getText()));
    }
}
