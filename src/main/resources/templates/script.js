// Добавляем иконку пользователя в кнопку
const userButton = document.getElementById('user-button');
userButton.innerHTML = '<i class="fas fa-user"></i>'; // Иконка пользователя из Font Awesome

// Обработчик для кнопки "Выход"
document.getElementById('logout-button').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    window.history.back(); // Возвращаемся на предыдущую страницу
});

// Обработчик для кнопки "Пользователь" (открытие/закрытие меню)
document.getElementById('user-button').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show'); // Переключаем видимость меню
});

// Закрытие меню при клике вне его области
window.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (!event.target.matches('#user-button') && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show'); // Скрываем меню
    }
});