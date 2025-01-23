// Получаем элементы DOM
const userButton = document.getElementById('user-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Обработчик клика по кнопке
userButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Закрываем меню, если кликнут вне его
window.addEventListener('click', (event) => {
    if (!event.target.matches('#user-button')) {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    }
});