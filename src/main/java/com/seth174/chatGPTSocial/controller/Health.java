package com.seth174.chatGPTSocial.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/v1/test")
public class Health {

    @GetMapping
    public @ResponseBody boolean healthCheck(){
        return true;
    }

}
