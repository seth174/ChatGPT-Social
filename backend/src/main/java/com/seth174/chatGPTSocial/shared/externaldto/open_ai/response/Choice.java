package com.seth174.chatGPTSocial.shared.externaldto.open_ai.response;

import lombok.Data;

@Data
public class Choice {
    private String text;
    private int index;
    private Object logprobs;
    private String finish_reason;
}
