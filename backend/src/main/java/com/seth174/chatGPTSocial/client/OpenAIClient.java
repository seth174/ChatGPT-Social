package com.seth174.chatGPTSocial.client;

import com.seth174.chatGPTSocial.shared.EnvConfig;
import com.seth174.chatGPTSocial.shared.SharedWebClient;
import com.seth174.chatGPTSocial.shared.externaldto.open_ai.request.OpenAIExternalRequest;
import com.seth174.chatGPTSocial.shared.externaldto.open_ai.response.OpenAIExternalResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class OpenAIClient {
    private final SharedWebClient webClient;

    private final EnvConfig envConfig;

    public OpenAIClient(SharedWebClient webClient, EnvConfig envConfig){
        this.webClient = webClient;
        this.envConfig = envConfig;
    }

    public Mono<OpenAIExternalResponse> postOpenAIRequest(OpenAIExternalRequest request){
        String test = envConfig.getOpenAIKey();
        return webClient.getWebClient().post()
                .uri("https://api.openai.com/v1/completions")
                .headers(httpHeaders -> httpHeaders.setBearerAuth(envConfig.getOpenAIKey()))
                .bodyValue(request)
                .retrieve()
                .bodyToMono(OpenAIExternalResponse.class);
    }
}
