const $answer = document.querySelector('#answer')

// json값을 table에 출력
export function answerOutput(jsonString){
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