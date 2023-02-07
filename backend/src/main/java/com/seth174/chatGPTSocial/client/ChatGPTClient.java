package com.seth174.chatGPTSocial.client;

import com.seth174.chatGPTSocial.shared.SharedWebClient;
import com.seth174.chatGPTSocial.shared.externaldto.chatgpt.request.ChatGPTExternalRequest;
import com.seth174.chatGPTSocial.shared.externaldto.chatgpt.response.ChatGPTExternalResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class ChatGPTClient {
    private final SharedWebClient webClient;

    public ChatGPTClient(SharedWebClient webClient){
        this.webClient = webClient;
    }

    public Mono<ChatGPTExternalResponse> postChatGPTRequest(ChatGPTExternalRequest request){
        return webClient.getWebClient().post()
                .uri("https://api.openai.com/v1/completions")
                .headers(httpHeaders -> httpHeaders.setBearerAuth("Some key"))
                .bodyValue(request)
                .retrieve()
                .bodyToMono(ChatGPTExternalResponse.class);
    }
}
