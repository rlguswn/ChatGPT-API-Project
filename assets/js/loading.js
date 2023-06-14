/** void showLoadingSpinner
* loading-spinner 가시화
*/
export function showLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner")
    spinner.style.display = "block"
}

/** void hideLoadingSpinner
* loading-spinner 비가시화
*/
export function hideLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner")
    spinner.style.display = "none"
}