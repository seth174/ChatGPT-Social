package com.seth174.chatGPTSocial.controller;

import com.seth174.chatGPTSocial.service.ChatGPTService;
import com.seth174.chatGPTSocial.shared.dto.chatgpt.request.ChatGPTRequest;
import com.seth174.chatGPTSocial.shared.dto.chatgpt.response.ChatGPTResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import reactor.core.publisher.Mono;

@Controller
@RequestMapping(value = "/v1/chat-gpt")
public class ChatGPT {
    private final ChatGPTService chatGPTService;

    public ChatGPT(ChatGPTService chatGPTService){
        this.chatGPTService = chatGPTService;
    }

    @PostMapping
    public @ResponseBody Mono<ChatGPTResponse> postGPTRequest(@RequestBody ChatGPTRequest chatGPTRequest){
        return chatGPTService.postChatGPTRequest(chatGPTRequest);
    }
}
