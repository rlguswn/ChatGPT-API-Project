import {data} from "./data.js"
import {chatGptAPI} from "./chatGPTAPI.js"
import {showLoading} from "./loading.js"

const $dateDepart = document.querySelector('#dateDepart')
const $dateArrive = document.querySelector('#dateArrive')
const $attraction = document.querySelector('#attraction')
const $destination = document.querySelector('#destination')
const $submitBtn = document.querySelector('.makePlan')
const $clearBtn = document.querySelector('.inputClear')

// 사용자 입력을 토대로 질문 텍스트 작성
$submitBtn.addEventListener('click', e =>{
    e.preventDefault()
    
    if ($dateDepart.value.trim() === "") {
        alert("여행을 출발하는 날짜를 입력해주세요.")
    } else if ($dateArrive.value.trim() === "") {
        alert("여행에서 돌아오는 날짜를 입력해주세요.")
    } else if ($dateDepart.value > $dateArrive.value) {
        alert("여행 도착일을 출발일 이후 날짜로 입력해주세요")
    } else if ($destination.value.trim() === "") {
        alert("원하는 여행지를 입력해주세요.")
    }
    else {
        showLoading()

        const userInputData = (`
            출발일: ${$dateDepart.value}, 
            도착일: ${$dateArrive.value}, 
            여행지: ${$destination.value}, 
            특이사항: ${$attraction.value}
        `)

    chatGptAPI(data, userInputData)
    }
})

$clearBtn.addEventListener('click', e =>{
    e.preventDefault()

    $dateDepart.value = ""
    $dateArrive.value = ""
    $destination.value = ""
    $attraction.value = ""
})