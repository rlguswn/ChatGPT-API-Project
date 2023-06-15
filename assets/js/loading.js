import {$answer} from "./answer.js"

const spinner = document.getElementById("loading-spinner")

/** void showLoadingSpinner
* loading-spinner 가시화
*/
export function showLoading() {
    spinner.style.display = "block"
    $answer.innerText = `
        여행 계획을 생성중입니다.
        20초정도 기다려주시면 멋진 여행 계획을 만들어 드리겠습니다.
    `
}

/** void hideLoadingSpinner
* loading-spinner 비가시화
*/
export function hideLoading() {
    spinner.style.display = "none"
}