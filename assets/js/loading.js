const spinner = document.getElementById("loading-spinner")

/** void showLoadingSpinner
* loading-spinner 가시화
*/
export function showLoadingSpinner() {
    spinner.style.display = "block"
}

/** void hideLoadingSpinner
* loading-spinner 비가시화
*/
export function hideLoadingSpinner() {
    spinner.style.display = "none"
}