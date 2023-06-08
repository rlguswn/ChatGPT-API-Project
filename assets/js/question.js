import {chatGptAPI} from "./chatGPTAPI.js"

const $dateDepart = document.querySelector('.dateDepart')
const $dateArrive = document.querySelector('.dateArrive')
const $attraction = document.querySelector('.attraction')
const $destination = document.querySelector('.destination')
const $button = document.querySelector('.makePlan')

// 사용자 입력을 토대로 질문 텍스트 작성
$button.addEventListener('click', e =>{
    e.preventDefault()
    
    const userInputData = (`
        ${$dateDepart.value}, 
        ${$dateArrive.value}, 
        ${$attraction.value}, 
        ${$destination.value}
    `)

    console.log(userInputData)

    chatGptAPI(userInputData)
})
