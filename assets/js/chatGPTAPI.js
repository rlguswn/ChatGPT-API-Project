import {data} from "./data.js";

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

export function chatGptAPI(){
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    })
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        console.log(res.choices[0].message.content)
        answerOutput(res.choices[0].message.content)
    })
}