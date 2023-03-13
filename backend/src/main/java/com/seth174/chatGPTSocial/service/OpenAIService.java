package com.seth174.chatGPTSocial.service;

import com.seth174.chatGPTSocial.client.OpenAIClient;
import com.seth174.chatGPTSocial.shared.dto.open_ai.request.OpenAIRequest;
import com.seth174.chatGPTSocial.shared.dto.open_ai.response.OpenAIResponse;
import com.seth174.chatGPTSocial.shared.externaldto.open_ai.request.OpenAIExternalRequest;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class OpenAIService {
    private final OpenAIClient openAIClient;

    public OpenAIService(OpenAIClient openAIClient){
        this.openAIClient = openAIClient;
    }

    public Mono<OpenAIResponse> postOpenAIRequest(OpenAIRequest request){
        OpenAIExternalRequest openAIExternalRequest = new OpenAIExternalRequest(request.getPrompt());
        return openAIClient.postOpenAIRequest(openAIExternalRequest)
                .onErrorResume(err -> {
                    throw new RuntimeException();
                })
                .map(response -> new OpenAIResponse(response.getChoices().get(0).getText()));
    }
}
