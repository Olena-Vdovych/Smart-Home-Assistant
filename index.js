const buttons = document.querySelectorAll('.device-switch');

buttons.forEach(button => {
    // Встановлюємо початковий стан кнопки
    const deviceStatus = button.parentElement.classList.contains('on') ? 'on' : 'off';
    button.classList.add(deviceStatus);

    // Додаємо обробник події click на кожну кнопку
    button.addEventListener('click', () => {
        button.classList.toggle('on');
        button.classList.toggle('off');
    });
});
