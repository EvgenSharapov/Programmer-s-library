// Добавляем иконку пользователя во вторую кнопку
const userButton2 = document.getElementById('user-button-2');
userButton2.innerHTML = '<i class="fas fa-user"></i>'; // Иконка пользователя из Font Awesome

const TopicArea = {
    OOP: 'OOP',
    EXCEPTIONS: 'EXCEPTIONS',
    GIT: 'GIT',
    SPRING: 'SPRING',
    OBJECT: 'OBJECT',
    PATTERNS: 'PATTERNS',
    SOLID: 'SOLID',
    SQL: 'SQL',
    COLLECTIONS: 'COLLECTIONS',


};




// Общий контейнер для меню
const dropdownMenu = document.getElementById('dropdown-menu');

// Форма для добавления теста
const addTestForm = document.getElementById('add-test-form');

// Содержимое меню для первой кнопки
const menuContent1 = `
    <a href="/test">Пройти тест</a>
    <a href="#" id="show-library-button">Библиотека</a>
    <a href="#" id="topic-button">Темы</a> 
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





// Обработчик для кнопки "Библиотека"
document.addEventListener('click', function(event) {
    if (event.target.id === 'show-library-button') {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Очищаем старые контейнеры
        clearContainers();

        // Скрываем форму добавления теста
        hideAddTestForm();

        // Создаем выпадающие кнопки для каждой области
        createAreaButtons();


        // Показываем колонки
        showColumns();

        // Загружаем все темы
        loadAllTopics();


    }
});

// Функция для отображения колонок
function showColumns() {
    const contentContainer = document.getElementById('topic-content-container');
    const topicsContainer = document.getElementById('topics-list-container');
    contentContainer.style.display = 'block'; // Показываем левую колонку
    topicsContainer.style.display = 'block'; // Показываем правую колонку
}

// Функция для загрузки всех тем
function loadAllTopics() {
    fetch('/api/topics')
        .then(response => response.json())
        .then(topics => {
            displayTopics(topics); // Отображаем список тем
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при загрузке тем.');
        });
}







// Функция для создания выпадающих кнопок по областям
function createAreaButtons() {
    const container = document.createElement('div');
    container.id = 'areas-container';
    container.style.display = 'flex'; // Используем flexbox для расположения кнопок
    container.style.flexWrap = 'wrap'; // Перенос кнопок на новую строку, если не хватает места
    container.style.gap = '20px'; // Отступы между кнопками
    container.style.padding = '20px'; // Отступы внутри контейнера
    container.style.justifyContent = 'center'; // Центрируем кнопки

    // Получаем все значения Enum (области тем)
    const areas = Object.values(TopicArea);

    areas.forEach(area => {
        const areaButton = document.createElement('button');
        areaButton.textContent = area; // Название области
        areaButton.className = 'area-button'; // Добавляем класс для стилизации
        areaButton.dataset.area = area; // Сохраняем область в data-атрибуте
        areaButton.addEventListener('click', () => loadTopicsByArea(area)); // Обработчик клика
        container.appendChild(areaButton);
    });

    // Добавляем контейнер на страницу
    document.body.appendChild(container);
}



// Функция для загрузки тем по области
function loadTopicsByArea(area) {
    clearContainers()
    fetch(`/api/topics/by-area/${area}`)
        .then(response => response.json())
        .then(topics => {
            displayTopics(topics); // Отображаем темы
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при загрузке тем.');
        });
}




// // Функция для отображения списка тем
// function displayTopics(topics) {
//     const container = document.getElementById('topics-list-container');
//     container.innerHTML = '<h2>Список тем:</h2>';
//
//     if (topics.length > 0) {
//         // Загружаем первую тему
//         loadTopicContent(topics[0].id);
//
//         // Выделяем первую тему, если она существует
//         const firstTopic = container.querySelector('.topic-item');
//         if (firstTopic) {
//             setActiveTopic(firstTopic);
//         }
//     }
//
//     topics.forEach(topic => {
//         const topicDiv = document.createElement('div');
//         topicDiv.className = 'topic-item';
//         topicDiv.innerHTML = `
//             <p class="topic-title" data-topic-id="${topic.id}">
//                 <strong>${topic.tableOfContents}</strong>
//             </p>
//         `;
//         topicDiv.addEventListener('click', () => {
//             loadTopicContent(topic.id);
//             setActiveTopic(topicDiv);
//         });
//         container.appendChild(topicDiv);
//     });
// }
//
// // Функция для выделения активной темы
// function setActiveTopic(activeTopic) {
//     const topics = document.querySelectorAll('.topic-item');
//     topics.forEach(topic => topic.classList.remove('active')); // Убираем выделение у всех тем
//
//     if (activeTopic) {
//         activeTopic.classList.add('active'); // Выделяем активную тему
//     }
// }








// Функция для отображения тем
function displayTopics(topics) {
    const container = document.createElement('div');

    container.id = 'topics-list-container';
    container.className='topics-list-container';
    container.innerHTML = '';

    topics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic-item';
        topicDiv.innerHTML = `
            <p class="topic-title" data-topic-id="${topic.id}">${topic.tableOfContents}</p>
        `;
        topicDiv.querySelector('.topic-title').addEventListener('click', () => loadTopicContent(topic.id)); // Обработчик клика
        container.appendChild(topicDiv);
    });

    // Очищаем старые контейнеры и добавляем новый
    clearContainers();
    document.body.appendChild(container);
}







// Функция для загрузки содержимого темы
function loadTopicContent(topicId) {
    fetch(`/api/topics/${topicId}`)
        .then(response => response.json())
        .then(topic => {
            displayTopicContent(topic); // Отображаем содержимое темы
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при загрузке содержимого темы.');
        });
}


// // Функция для отображения содержимого темы
// function displayTopicContent(topic) {
//     const container = document.getElementById('topic-content-container');
//     container.innerHTML = `
//         <h2>Содержимое темы:</h2>
//         <div class="topic-content-container">
//             <p><strong>Название темы:</strong> ${topic.tableOfContents}</p>
//             <p>${topic.content}</p>
//         </div>
//     `;
// }




// Функция для отображения содержимого темы
function displayTopicContent(topic) {
    const container = document.createElement('div');
    container.id = 'topic-content-container';
    container.className = 'topic-content-container';
    container.innerHTML = `
        <p><strong>Название темы:</strong> ${topic.tableOfContents}</p>
        <p>${topic.content}</p>
    `;

    // Очищаем старые контейнеры и добавляем новый
    clearContainers();
    document.body.appendChild(container);
}
























//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Функция для отображения заголовков тем
// function displayTopics(titles) {
//     const container = document.createElement('div');
//     container.id = 'topics-container';
//     container.innerHTML = '';
//
//     // Создаем контейнер для карточек тем
//     const topicsGrid = document.createElement('div');
//     topicsGrid.style.display = 'grid'; // Используем CSS Grid для расположения карточек
//     topicsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))'; // Адаптивные колонки
//     topicsGrid.style.gap = '20px'; // Отступы между карточками
//     topicsGrid.style.padding = '20px'; // Отступы внутри контейнера
//
//     titles.forEach((title, index) => {
//         // Создаем карточку для темы
//         const topicCard = document.createElement('div');
//         topicCard.style.border = '1px solid #ccc'; // Рамка карточки
//         topicCard.style.borderRadius = '10px'; // Закругленные углы
//         topicCard.style.padding = '15px'; // Отступы внутри карточки
//         topicCard.style.display = 'flex'; // Используем flexbox
//         topicCard.style.flexDirection = 'column'; // Вертикальное расположение элементов
//         topicCard.style.justifyContent = 'space-between'; // Распределение пространства между элементами
//         topicCard.style.backgroundColor = '#f9f9f9'; // Фон карточки
//         topicCard.style.height = '150px'; // Фиксированная высота карточки (можно изменить)
//
//         // Название темы
//         const topicTitle = document.createElement('h3');
//         topicTitle.textContent = title; // Название темы
//         topicTitle.style.margin = '0 0 10px 0'; // Отступ снизу
//         topicTitle.style.fontSize = '18px'; // Размер шрифта
//
//         // Большая кнопка
//         const topicButton = document.createElement('button');
//         topicButton.textContent = 'Перейти к теме'; // Текст кнопки
//         topicButton.style.width = '100%'; // Ширина кнопки
//         topicButton.style.padding = '10px'; // Отступы внутри кнопки
//         topicButton.style.fontSize = '16px'; // Размер шрифта
//         topicButton.style.backgroundColor = '#007bff'; // Цвет фона кнопки
//         topicButton.style.color = '#fff'; // Цвет текста кнопки
//         topicButton.style.border = 'none'; // Убираем рамку
//         topicButton.style.borderRadius = '5px'; // Закругленные углы
//         topicButton.style.cursor = 'pointer'; // Курсор-указатель
//         topicButton.addEventListener('click', () => loadTopicContent(index + 1)); // Обработчик клика
//
//         // Добавляем название и кнопку в карточку
//         topicCard.appendChild(topicTitle);
//         topicCard.appendChild(topicButton);
//
//         // Добавляем карточку в контейнер
//         topicsGrid.appendChild(topicCard);
//     });
//
//     container.appendChild(topicsGrid);
//
//     // Добавляем новый контейнер на страницу
//     document.body.appendChild(container);
// }
// // Функция для загрузки содержимого темы
// function loadTopicContent(topicId) {
//     // Очищаем старые контейнеры
//     clearContainers();
//
//     // Отправляем запрос на сервер для получения содержимого темы
//     fetch(`/api/topics/${topicId}`)
//         .then(response => response.json())
//         .then(topicContent => {
//             // Отображаем содержимое темы на странице
//             displayTopicContent(topicContent);
//         })
//         .catch(error => {
//             console.error('Ошибка:', error);
//             alert('Произошла ошибка при загрузке содержимого темы.');
//         });
// }
//
// // Функция для отображения содержимого темы
// function displayTopicContent(topicContent) {
//     const container = document.createElement('div');
//     container.id = 'topic-content-container';
//     container.className = 'topic-content-container'; // Добавляем класс для стилизации
//     container.innerHTML = '';
//
//     // Отображаем содержимое темы
//     const contentDiv = document.createElement('div');
//     contentDiv.innerHTML = `
//         <p> ${topicContent.content}</p>
//     `;
//     container.appendChild(contentDiv);
//
//     // Добавляем новый контейнер на страницу
//     document.body.appendChild(container);
// }

// Функция для очистки старых контейнеров
function clearContainers() {
    const containers = [
        'questions-container',
        'topics-container',
        'topic-content-container',
        'areas-container',

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