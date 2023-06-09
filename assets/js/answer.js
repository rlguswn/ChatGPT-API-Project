import {hideLoading} from "./loading.js"

export const $answer = document.querySelector('#answer')

/** void answerOutput
 * chatGPTAPI 응답을 양식에 맞춰 테이블 형태로 생성 
 * @param {array} jsonString 사용자 입력으로 생성된 질문
*/
export function answerOutput(jsonString){
    const jsonData = JSON.parse(jsonString)
    
    $answer.innerText = ''
    
    for (let key in jsonData){
        if (jsonData.hasOwnProperty(key)){
            let row = $answer.insertRow()

            let nameCell = row.insertCell(0)
            nameCell.innerText = key
            nameCell.classList.add("nameCell")

            let valueCell = row.insertCell(1)
            valueCell.innerText = ""
            jsonData[key].forEach(item => {
                valueCell.innerText += item + "\n"
            })
            valueCell.classList.add("valueCell")
        }
        hideLoading()
    }
}