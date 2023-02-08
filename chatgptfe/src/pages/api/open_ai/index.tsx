import OpenAIRequest from "./types";
import OpenAIResponse from "./types";
import axios from "axios";

// export const postOpenAIRequest = async (request: OpenAIRequest): Promise<OpenAIResponse> => {

//     return axios.post(process.env.NEXT_PUBLIC_BASE_URL, request)
//         .then((result) => {
//             const response: OpenAIResponse = result.data;
//             return response;
//         })
//         .catch((err) => {
//             console.log("POST ERR:", err);
//             return {} as OpenAIResponse;
//         })
// }