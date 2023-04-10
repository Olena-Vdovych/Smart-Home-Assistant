// Jalousie input
const jalousieInput = document.querySelector('.jalousie-system');
const textJalousie = document.querySelector('.text-jalousie');
jalousieInput.addEventListener('input', () => {
    const percent = ((jalousieInput.value - jalousieInput.min) / (jalousieInput.max - jalousieInput.min) * 100).toFixed(0);
    textJalousie.textContent = `${percent}%`;
});