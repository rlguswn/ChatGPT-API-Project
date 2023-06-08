import {data} from "./data.js";

const $dateDepart = document.querySelector('.dateDepart')
const $dateArrive = document.querySelector('.dateArrive')
const $attraction = document.querySelector('.attraction')
const $carStatus = document.querySelector('input[name="carStatus"]')
const $button = document.querySelector('.makePlan')
const $answer = document.querySelector('#answer')
let carStatusChecked = ''

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

// 여행 계획 만들기 버튼이 눌렸을 때 EventListener
$button.addEventListener('click', e =>{
    e.preventDefault()

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

// chatGptAPI
function chatGptAPI(){
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
        jsonParse(res.choices[0].message.content)
    })
}

// json 값만 추출하기 위한 정규표현식 선언
const pattern = /({[\s\S]*?})/g

// 수신한 문자열에서 json 값만 추출
function jsonRefactoring(string){
    let match = string.match(pattern)
    if (match) {
        console.log(string)
        let data = match[0]
        console.log(data)
        let jsonData = JSON.parse(data)
        console.log(jsonData)
        return jsonData
    } else {
        throw new Error('JSON 데이터를 찾을 수 없습니다.')
    }
}

// 가공된 json값을 table에 출력
function jsonParse(jsonString){
    const jsonData = jsonRefactoring(jsonString)

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
            valueCell.innerText = jsonData[key]
            valueCell.style.padding = "8px"
            valueCell.style.borderBottom = "1px solid #ddd"
        }
    }
}