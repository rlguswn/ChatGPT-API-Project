// 로딩스피너 가시화
export function showLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner")
    spinner.style.display = "block"
}

// 로딩스피너 비가시화
export function hideLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner")
    spinner.style.display = "none"
}