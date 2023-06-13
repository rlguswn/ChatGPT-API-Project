import {hideLoadingSpinner} from "./loading.js"

const $answer = document.querySelector('#answer')

/**
* chatGPTAPI 응답을 양식에 맞춰 테이블 형태로 생성 
* @param {array} jsonString 사용자 입력으로 생성된 질문
*/
export function answerOutput(jsonString){
    const jsonData = JSON.parse(jsonString)

    // 출력 내용 초기화
    $answer.innerText = ''
    
    for (let key in jsonData){
        if (jsonData.hasOwnProperty(key)){
            let row = $answer.insertRow()

            let nameCell = row.insertCell(0)
            nameCell.innerText = key
            nameCell.classList.add("nameCell")

            let valueCell = row.insertCell(1)
            valueCell.innerText = (
                "오전: " + jsonData[key]["오전"] + "\n" + 
                "오후: " + jsonData[key]["오후"] + "\n" + 
                "저녁: " + jsonData[key]["저녁"]
            )
            valueCell.classList.add("valueCell")
        }
        hideLoadingSpinner()
    }
}