// Добавляем иконку пользователя во вторую кнопку
const userButton2 = document.getElementById('user-button-2');
userButton2.innerHTML = '<i class="fas fa-user"></i>'; // Иконка пользователя из Font Awesome

// Общий контейнер для меню
const dropdownMenu = document.getElementById('dropdown-menu');

// Форма для добавления теста
const addTestForm = document.getElementById('add-test-form');

// Содержимое меню для первой кнопки
const menuContent1 = `
    <a href="/test">Пройти тест</a>
    <a href="#" id="show-library-button">Библиотека</a>
`;

// Содержимое меню для второй кнопки
const menuContent2 = `
    <a href="#">Настройки</a>
    <a href="#">Контакты</a>
    <a href="#" id="logout-button">Выход</a>
`;

const menuContent3 = `
    <a href="#" id="add-test-button">Добавить тест</a>
    <a href="#" id="show-tests-button">Вывести все тесты</a>
    <a href="#">Редактировать тест</a>
    <a href="#">Удалить тест</a>
`;

// Обработчик для кнопки "Выход"
document.addEventListener('click', function(event) {
    if (event.target.id === 'logout-button') {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        window.history.back(); // Возвращаемся на предыдущую страницу
    }
});

// Обработчик для первой кнопки
const userButton1 = document.getElementById('user-button-1');
userButton1.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent1; // Устанавливаем содержимое меню
    dropdownMenu.classList.add('show'); // Показываем меню
});

// Обработчик для второй кнопки
userButton2.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent2; // Устанавливаем содержимое меню
    dropdownMenu.classList.add('show'); // Показываем меню
});

// Обработчик для третьей кнопки
const userButton3 = document.getElementById('user-button-3');
userButton3.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent3; // Устанавливаем содержимое меню
    dropdownMenu.classList.add('show'); // Показываем меню
});

// Обработчик для кнопки "Добавить тест"
document.addEventListener('click', function(event) {
    if (event.target.id === 'add-test-button') {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        addTestForm.style.display = 'block'; // Показываем форму
        dropdownMenu.classList.remove('show'); // Скрываем меню
        clearContainers(); // Очищаем старые контейнеры
    }
});

// Обработчик для формы "Создать тест"
document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем данные из формы
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.querySelector('input[name="correct-answer"]:checked').value;

    // Выводим данные в консоль (можно заменить на отправку на сервер)
    console.log('Вопрос:', question);
    console.log('Вариант 1:', option1);
    console.log('Вариант 2:', option2);
    console.log('Вариант 3:', option3);
    console.log('Вариант 4:', option4);
    console.log('Правильный ответ:', correctAnswer);

    // Скрываем форму после отправки
    addTestForm.style.display = 'none';
});

// Закрытие меню при клике вне его области
window.addEventListener('click', function(event) {
    if (
        !event.target.matches('#user-button-1') &&
        !event.target.matches('#user-button-2') &&
        !event.target.matches('#user-button-3') &&
        !dropdownMenu.contains(event.target)
    ) {
        dropdownMenu.classList.remove('show'); // Скрываем меню
    }

    // Закрытие формы при клике вне её области
    if (event.target === addTestForm) {
        addTestForm.style.display = 'none';
    }
});

document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Собираем данные из формы
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.querySelector('input[name="correct-answer"]:checked').value;
    console.log("Данные формы:", { question, option1, option2, option3, option4, correctAnswer });

    // Создаем объект с данными
    const data = {
        text: question,
        options: [option1, option2, option3, option4],
        correctAnswerIndex: parseInt(correctAnswer) - 1 // Преобразуем в индекс (0-based)
    };
    console.log(data);

    // Отправляем данные на сервер
    fetch('/api/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            alert('Вопрос успешно добавлен!');
            console.log(result);
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при добавлении вопроса.');
        });
});

// Обработчик для кнопки "Вывести все тесты"
document.addEventListener('click', function(event) {
    if (event.target.id === 'show-tests-button') {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Очищаем старые контейнеры
        clearContainers();

        // Скрываем форму добавления теста
        hideAddTestForm();

        // Отправляем запрос на сервер для получения всех вопросов
        fetch('/api/questions')
            .then(response => response.json())
            .then(questions => {
                // Отображаем вопросы на странице
                displayQuestions(questions);
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при загрузке вопросов.');
            });
    }
});

// Обработчик для кнопки "Библиотека"
document.addEventListener('click', function(event) {
    if (event.target.id === 'show-library-button') {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Очищаем старые контейнеры
        clearContainers();

        // Скрываем форму добавления теста
        hideAddTestForm();

        // Отправляем запрос на сервер для получения всех заголовков тем
        fetch('/api/topics/titles')
            .then(response => response.json())
            .then(titles => {
                // Отображаем заголовки на странице
                displayTopics(titles);
                console.log("Нажали:", titles);
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при загрузке заголовков тем.');
            });
    }
});

// Функция для отображения вопросов на странице
function displayQuestions(questions) {
    const container = document.createElement('div');
    container.id = 'questions-container';
    container.innerHTML = '<h2>Все вопросы:</h2>';

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <p><strong>Вопрос ${index + 1}:</strong> ${question.text}</p>
            <ul>
                ${question.options.map((option, i) => `
                    <li>${option} ${i === question.correctAnswerIndex ? '(Правильный ответ)' : ''}</li>
                `).join('')}
            </ul>
        `;
        container.appendChild(questionDiv);
    });

    // Добавляем новый контейнер на страницу
    document.body.appendChild(container);
}

// Функция для отображения заголовков тем
function displayTopics(titles) {
    const container = document.createElement('div');
    container.id = 'topics-container';
    container.innerHTML = '<h2>Заголовки тем:</h2>';

    // Создаем список заголовков
    const topicsList = document.createElement('ul');
    topicsList.id = 'topics-list';

    titles.forEach((title, index) => {
        const topicItem = document.createElement('li');
        topicItem.innerHTML = `<strong>Тема ${index + 1}:</strong> ${title}`;
        topicsList.appendChild(topicItem);
    });

    container.appendChild(topicsList);

    // Добавляем новый контейнер на страницу
    document.body.appendChild(container);
}

// Функция для очистки старых контейнеров
function clearContainers() {
    const containers = [
        'questions-container',
        'topics-container'
    ];

    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.remove();
        }
    });
}

// Функция для скрытия формы добавления теста
function hideAddTestForm() {
    addTestForm.style.display = 'none';
}