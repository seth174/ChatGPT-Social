package com.seth174.chatGPTSocial.controller;

import com.seth174.chatGPTSocial.service.OpenAIService;
import com.seth174.chatGPTSocial.shared.dto.open_ai.request.OpenAIRequest;
import com.seth174.chatGPTSocial.shared.dto.open_ai.response.OpenAIResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import reactor.core.publisher.Mono;

@Controller
@RequestMapping(value = "/v1/chat-gpt")
public class OpenAI {
    private final OpenAIService openAIService;

    public OpenAI(OpenAIService openAIService){
        this.openAIService = openAIService;
    }

    @PostMapping
    public @ResponseBody Mono<OpenAIResponse> postOpenAIRequest(@RequestBody OpenAIRequest openAIRequest){
        return openAIService.postOpenAIRequest(openAIRequest);
    }
}
