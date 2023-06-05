let $input = document.querySelector('input')
let $button = document.querySelector('button')
let $contents = document.querySelector('#contents')

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

// CSS 클래스를 추가하는 function
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    } else {
        element.className += ' ' + className;
    }
}

// 학습 데이터
let data = [{
    "role": "system",
    "content": "assistant는 제주 여행 전문가이다."
},{
    "role": "user",
    "content": "제주 여행 일정을 만들어줘"
}
,{
    "role": "user",
    "content": "제주 3박4일 여행 일정을 만들어줘. 결과는 문장은 제외하고 key는 날짜, value는 여행 계획을 서술한 json형식으로 간단하게 해줘."
}]

// 전송 버튼이 눌렸을 때 EventListener
$button.addEventListener('click', e =>{
    e.preventDefault()
    userInputData = $input.value
    $input.value = ''
    $contents.innerText = '여행 계획을 작성중입니다.'

    data.push({
        "role": "user",
        "content": userInputData
    })

    chatGptAPI()
})

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
        // $contents.innerText = res.choices[0].message.content
        jsonParse(res.choices[0].message.content)
    })
}

const pattern = /({[\s\S]*?})/g

// 수신한 문자열에서 json 형식만 추출
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
        console.log('Error, JSON 데이터를 찾을 수 없습니다.')
    }
}

// 가공된 json값을 table에 출력
function jsonParse(jsonString){
    jsonData = jsonRefactoring(jsonString)
    // let jsonData = JSON.parse(jsonString)

    // 출력 내용 초기화
    $contents.innerText = ''
    
    for (let key in jsonData){
        if (jsonData.hasOwnProperty(key)){
            let row = $contents.insertRow()

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