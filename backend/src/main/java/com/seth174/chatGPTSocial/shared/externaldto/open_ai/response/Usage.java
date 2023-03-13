package com.seth174.chatGPTSocial.shared.externaldto.open_ai.response;

import lombok.Data;

@Data
public class Usage {
    private int prompt_tokens;
    private int completion_tokens;
    private int total_tokens;
}
