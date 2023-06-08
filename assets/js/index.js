import {data} from "./data.js";
import {chatGptAPI} from "./chatGPTAPI.js";

const $dateDepart = document.querySelector('.dateDepart')
const $dateArrive = document.querySelector('.dateArrive')
const $attraction = document.querySelector('.attraction')
const $carStatus = document.querySelector('input[name="carStatus"]')
const $button = document.querySelector('.makePlan')
const $answer = document.querySelector('#answer')

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

// 사용자 입력을 토대로 질문을 작성
$button.addEventListener('click', e =>{
    e.preventDefault()
    let carStatusChecked

    if ($carStatus) {
        carStatusChecked += '차량을 렌트할거야'
    } else {
        carStatusChecked += '차량은 렌트하지 않을거야'
    }

    const userInputData = $dateDepart.value + '부터' + $dateArrive.value + '까지의 기간동안 ' + $attraction.value + '를 포함하는 제주 여행 계획을 key는 날짜, value는 여행 계획을 서술한 json형식으로 작성해 줘.'
    $answer.innerText = '여행 계획을 작성중입니다.'

    data.push({
        "role": "user",
        "content": userInputData
    })

    console.log($dateDepart.value)
    console.log($dateArrive.value)
    console.log($attraction.value)
    console.log($carStatus.value)

    chatGptAPI()
})

// json값을 table에 출력
function answerOutput(jsonString){
    const jsonData = JSON.parse(jsonString)

    // 출력 내용 초기화
    $answer.innerText = ''
    
    for (let key in jsonData){
        if (jsonData.hasOwnProperty(key)){
            let row = $answer.insertRow()

            let nameCell = row.insertCell(0)
            nameCell.innerText = key
            nameCell.style.padding = "8px"
            nameCell.style.borderBottom = "1px solid #ddd"
            nameCell.style.borderRight = "1px solid #ddd"

            let valueCell = row.insertCell(1)
            valueCell.innerText = (
                "오전: " + jsonData[key]["오전"] + "\n" + 
                "오후: " + jsonData[key]["오후"] + "\n" + 
                "저녁: " + jsonData[key]["저녁"]
            )
            valueCell.style.padding = "8px"
            valueCell.style.borderBottom = "1px solid #ddd"
        }
    }
}