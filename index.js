let $input = document.querySelector('input')
let $button = document.querySelector('button')
let $contents = document.querySelector('#contents')

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

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
    "content": "제주 3박4일 여행 일정을 만들어줘. 결과는 문장은 제외하고 json형식으로 간단하게 해줘."
}
]

// 버튼이 눌렸을 때 EventListener
$button.addEventListener('click', e =>{
    e.preventDefault()
    userInputData = $input.value
    $input.value = ''
    $contents.innerText = ''

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

const pattern = /{.*}/

// 수신한 문자열에서 json 형식만 추출
function jsonRefactoring(string){
    let match = string.match(pattern)
    if (match) {
        let jsonData = JSON.parse(match[0])
        return jsonData
    } else {
        console.log('Error, JSON 데이터를 찾을 수 없습니다.')
    }
}

// 가공된 json값을 table에 출력
function jsonParse(jsonString){
    // jsonData = jsonRefactoring(jsonString)
    let jsonData = JSON.parse(jsonString)
    
    for (let key in jsonData){
        if (jsonData.hasOwnProperty(key)){
            let row = $contents.insertRow()
            let nameCell = row.insertCell(0)
            let valueCell = row.insertCell(1)
            nameCell.innerHTML = value
            valueCell.innerHTML = jsonData[key]
        }
    }
}