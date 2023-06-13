import {data} from "./data.js"
import {answerOutput} from "./answer.js"
import {hideLoadingSpinner} from "./loading.js"

const url = "https://estsoft-openai-api.jejucodingcamp.workers.dev/"

/**
* 사용자 입력으로 생성된 질문을 받아 API 요청
* @param {string} userInputData 사용자 입력으로 생성된 질문
* @param {array} data 사용자 입력으로 생성된 질문을 저장할 곳
*/
export function chatGptAPI(data, userInputData){
    if (userInputData) {
        data.push({
            "role": "user",
            "content": userInputData
        })

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

            hideLoadingSpinner()
        })
    }
}