export function showLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner")
    spinner.style.display = "block"
}

export function hideLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner")
    spinner.style.display = "none"
}