// Добавляем иконку пользователя во вторую кнопку
const userButton2 = document.getElementById('user-button-2');
userButton2.innerHTML = '<i class="fas fa-user"></i>'; // Иконка пользователя из Font Awesome

const TopicArea = {
    OOP: 'OOP',
    JAVA_CORE: 'JAVA_CORE',
    GIT: 'GIT',
    SPRING: 'SPRING',
    DATA_BASE: 'DATA_BASE',
    MULTITHREADING: 'MULTITHREADING',
    OTHER: 'OTHER',
    COLLECTIONS: 'COLLECTIONS',
    TEST : 'TEST',
    STREAM : 'STREAM',
    SQL : 'SQL',
    SERVLET : 'SERVLET',
    JMS : 'JMS',
    JDBC : 'JDBC',
    HTTP : 'HTTP',
    ALGORITHMS : 'ALGORITHMS'


};


// Функция для скрытия меню
function hideDropdownMenu() {
    dropdownMenu.classList.remove('show');
}

// Обработчик для клика вне меню
document.addEventListener('click', function() {
    // Если клик произошел вне меню и не по кнопке, которая открывает меню
    // if (!dropdownMenu.contains(event.target) &&
    //     !event.target.matches('#user-button-1, #user-button-2, #user-button-3')) {
    hideDropdownMenu(); // Скрываем меню
    // }
});

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
    <a href="#">Прогресс</a>
    <a href="#" id="logout-button">Выход</a>
`;

const menuContent3 = `
    <a href="#" id="add-test-button">Добавить тест</a>
    <a href="#" id="add-library-button">Добавить тему</a>
    <a href="#" id="show-tests-button">Вывести все тесты</a>
`;
// Содержимое меню для 4 кнопки
const menuContent4 = `
    <a href="#" id="edit-library-button">Редактировать библиотеку</a>
`;
// Содержимое меню для 5 кнопки
const menuContent5 = `
    <a href="#">Поиск темы</a>
`;



// Обработчик для кнопки "Выход"
document.addEventListener('click', function(event) {
    if (event.target.id === 'logout-button') {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        window.history.back(); // Возвращаемся на предыдущую страницу
    }
});

// Обработчик для 1 кнопки
const userButton1 = document.getElementById('user-button-1');
userButton1.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent1; // Устанавливаем содержимое меню
    dropdownMenu.classList.add('show'); // Показываем меню
});

// Обработчик для 2 кнопки
userButton2.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent2; // Устанавливаем содержимое меню
    dropdownMenu.classList.add('show'); // Показываем меню
});

// Обработчик для 3 кнопки
const userButton3 = document.getElementById('user-button-3');
userButton3.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent3; // Устанавливаем содержимое меню
    dropdownMenu.classList.add('show'); // Показываем меню
});

// Обработчик для 4 кнопки
const userButton4 = document.getElementById('user-button-4');
userButton4.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent4; // Устанавливаем содержимое меню
    dropdownMenu.classList.add('show'); // Показываем меню
});
// Обработчик для 5 кнопки
const userButton5 = document.getElementById('user-button-5');
userButton5.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    dropdownMenu.innerHTML = menuContent5; // Устанавливаем содержимое меню
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


document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Собираем данные из формы
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.querySelector('input[name="correct-answer"]:checked').value;

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
    if (event.target.id === 'show-library-button' ) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Очищаем старые контейнеры
        clearContainersFull()

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



// Функция для отображения тем с пагинацией
function displayTopics(topics, page = 1, itemsPerPage = 12) {
    const container = document.createElement('div');
    container.id = 'topics-list-container';
    container.className = 'topics-list-container';
    container.innerHTML = '';

    if (topics.length === 0) {
        container.innerHTML = '<p>Темы не найдены.</p>';
        return;
    }

    // Вычисляем начальный и конечный индексы для текущей страницы
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTopics = topics.slice(startIndex, endIndex);

    // Отображаем темы для текущей страницы
    paginatedTopics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic-item';
        topicDiv.innerHTML = `
            <p class="topic-title" data-topic-id="${topic.id}">${topic.tableOfContents}</p>
        `;
        topicDiv.querySelector('.topic-title').addEventListener('click', () => {
            loadTopicContent(topic.id); // Загружаем содержимое темы
            setActiveTopic(topicDiv); // Выделяем активную тему
        });
        container.appendChild(topicDiv);
    });

    // Очищаем старые контейнеры и добавляем новый
   clearContainersLibrary();
    document.body.appendChild(container);

    // Добавляем пагинацию
    addPagination(topics, page, itemsPerPage);

    // Выделяем первую тему после добавления контейнера в DOM
    if (paginatedTopics.length > 0) {
        const firstTopic = container.querySelector('.topic-item'); // Теперь контейнер в DOM
        if (firstTopic) {
            setActiveTopic(firstTopic); // Выделяем первую тему
        }
    }
}

// Функция для добавления пагинации
function addPagination(topics, currentPage, itemsPerPage) {
    const totalPages = Math.ceil(topics.length / itemsPerPage);

    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';

// Кнопка "Назад"
    const prevButton = document.createElement('button');
    clearPagination();
    prevButton.innerHTML = '&larr;'; // Левый стрелка (←)
    prevButton.disabled = currentPage === 1;
    prevButton.classList.add('pagination-button', 'prev-button');
    prevButton.addEventListener('click', () => {
        displayTopics(topics, currentPage - 1, itemsPerPage);
    });
    paginationContainer.appendChild(prevButton);

// Кнопка "Вперед"
    const nextButton = document.createElement('button');
    clearPagination();
    nextButton.innerHTML = '&rarr;'; // Правый стрелка (→)
    nextButton.disabled = currentPage === totalPages;
    nextButton.classList.add('pagination-button', 'next-button');
    nextButton.addEventListener('click', () => {
        displayTopics(topics, currentPage + 1, itemsPerPage);
    });
    paginationContainer.appendChild(nextButton);

// Добавляем пагинацию в DOM
    document.body.appendChild(paginationContainer);
}



// Функция для выделения активной темы
function setActiveTopic(activeTopic) {
    const allTopics = document.querySelectorAll('.topic-item');
    allTopics.forEach(topic => topic.classList.remove('active'));
    activeTopic.classList.add('active');
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
    hideAddTopicForm();


}




// Функция для очистки старых контейнеров
function clearContainersFull() {
    const containers = [
        'questions-container',
        'topics-container',
        'topic-content-container',
        'areas-container',
        'topics-list-container',
        'areas-containerEdit'


    ];

    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.remove();
        }
    });
    hideAddTopicForm();
    clearPagination()


}











function clearPagination(){
    const oldPagination = document.querySelector('.pagination-container');
    if (oldPagination) {
        oldPagination.remove();
    }
}




// Функция для очистки старых контейнеров
function clearContainersLibrary() {
    const containers = [
        'questions-container',
        'topics-container',
        // 'topic-content-container',
        'areas-container',
        'topics-list-container',


    ];

    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.remove();
        }
    });
    hideAddTopicForm();

}


// Функция для скрытия формы добавления теста
function hideAddTestForm() {
    addTestForm.style.display = 'none';
}

// Обработчик для кнопки "Добавить тему"
document.addEventListener('click', function(event) {
    if (event.target.id === 'add-library-button') {
        event.preventDefault();// Предотвращаем стандартное поведение ссылки

        clearContainersFull()
        hideAddTestForm();

        // Показываем форму добавления темы
        showAddTopicForm();

        // Заполняем выпадающий список областей
        populateTopicAreas();
    }
});

// Функция для отображения формы добавления темы
function showAddTopicForm() {
    const addTopicForm = document.getElementById('add-topic-form');
    addTopicForm.style.display = 'block'; // Показываем форму
}

// Функция для заполнения выпадающего списка областей
function populateTopicAreas() {
    const topicAreaSelect = document.getElementById('topic-area');
    topicAreaSelect.innerHTML = ''; // Очищаем старые опции

    // Получаем все значения Enum (области тем)
    const areas = Object.values(TopicArea);

    // Добавляем опции в выпадающий список
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        topicAreaSelect.appendChild(option);
    });
}

// Функция для очистки формы добавления темы
function clearAddTopicForm() {
    document.getElementById('topic-title').value = ''; // Очищаем поле "Заголовок"
    document.getElementById('topic-content').value = ''; // Очищаем поле "Содержание"
    document.getElementById('topic-area').selectedIndex = 0; // Сбрасываем выбор области
}

// Обработчик для формы добавления темы
document.getElementById('topic-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Собираем данные из формы
    const tableOfContents = document.getElementById('topic-title').value;
    const content = document.getElementById('topic-content').value;
    const topicArea = document.getElementById('topic-area').value;

    // Создаем объект с данными
    const data = {
        topicArea: topicArea,
        content: content,
        tableOfContents: tableOfContents
    };
    console.log(data);

    // Отправляем данные на сервер
    fetch('/api/topics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            alert('Тема успешно добавлена!');
            console.log(result);
            hideAddTopicForm(); // Скрываем форму после успешного добавления
            clearAddTopicForm(); // Очищаем поля формы
            // loadAllTopics(); // Обновляем список тем
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при добавлении темы.');
        });
});

// Функция для скрытия формы добавления темы
function hideAddTopicForm() {
    const addTopicForm = document.getElementById('add-topic-form');
    addTopicForm.style.display = 'none';
}

// Обработчик для кнопки "Отмена"
document.getElementById('cancel-topic-button').addEventListener('click', function() {
    hideAddTopicForm(); // Скрываем форму
    clearAddTopicForm(); // Очищаем поля формы
});





// Обработчик для кнопки "Редактировать библиотеку"
document.addEventListener('click', function(event) {
    if (event.target.id === 'edit-library-button') {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Очищаем старые контейнеры
        clearContainersFull();

        // Скрываем форму добавления теста
        hideAddTestForm();

        // Создаем выпадающие кнопки для каждой области
        createAreaButtonsEdit();





        const contentContainer = document.getElementById('topic-content-container1');
        const topicsContainer = document.getElementById('topics-list-container1');
        contentContainer.style.display = 'block'; // Показываем левую колонку
        topicsContainer.style.display = 'block'; // Показываем правую колонку

        // Загружаем все темы в режиме редактирования
        loadAllTopicsForEditing();
    }
});


// Функция для создания выпадающих кнопок по областям
function createAreaButtonsEdit() {
    const container = document.createElement('div');
    container.id = 'areas-containerEdit';
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
        areaButton.addEventListener('click', () => loadAllTopicsForEditing(area)); // Обработчик клика
        container.appendChild(areaButton);
    });

    // Добавляем контейнер на страницу
    document.body.appendChild(container);
}



// Функция для загрузки всех тем в режиме редактирования
function loadAllTopicsForEditing() {
    clearContainersFull();
    fetch('/api/topics')
        .then(response => response.json())
        .then(topics => {
            displayTopicsForEditing(topics); // Отображаем список тем с возможностью редактирования
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при загрузке тем.');
        });
}

// Функция для отображения тем с возможностью редактирования
function displayTopicsForEditing(topics, page = 1, itemsPerPage = 12) {
    const container = document.createElement('div');
    container.id = 'topics-list-containerEdit';
    container.className = 'topics-list-containerEdit';
    container.innerHTML = '';


    if (topics.length === 0) {
        container.innerHTML = '<p>Темы не найдены.</p>';
        return;
    }

    // Вычисляем начальный и конечный индексы для текущей страницы
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTopics = topics.slice(startIndex, endIndex);



    // Отображаем темы для текущей страницы
    paginatedTopics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic-item';
        topicDiv.innerHTML = `
            <button class="edit-topic-button" data-topic-id="${topic.id}">Редактировать</button>
            <button class="delete-topic-button" data-topic-id="${topic.id}">Удалить</button>
            <p class="topic-title" data-topic-id="${topic.id}">${topic.tableOfContents}</p>
         
           
        `;
        topicDiv.querySelector('.edit-topic-button').addEventListener('click', () => {
            loadTopicContentForEditing(topic.id); // Загружаем содержимое темы для редактирования
        });
        topicDiv.querySelector('.delete-topic-button').addEventListener('click', () => {
            deleteTopic(topic.id); // Удаляем тему
        });
        container.appendChild(topicDiv);
    });

    // Очищаем старые контейнеры и добавляем новый
    clearContainersLibrary();
    document.body.appendChild(container);

    // Добавляем пагинацию
    addPagination(topics, page, itemsPerPage);
}

// Функция для удаления темы
function deleteTopic(topicId) {
    if (confirm('Вы уверены, что хотите удалить эту тему?')) {
        fetch(`/api/topics/${topicId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    alert('Тема успешно удалена!');
                    loadAllTopicsForEditing(); // Перезагружаем список тем
                } else {
                    throw new Error('Ошибка при удалении темы');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при удалении темы.');
            });
    }
}

// Функция для загрузки содержимого темы в режиме редактирования
function loadTopicContentForEditing(topicId) {
    fetch(`/api/topics/${topicId}`)
        .then(response => response.json())
        .then(topic => {
            displayTopicContentForEditing(topic); // Отображаем содержимое темы для редактирования
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при загрузке содержимого темы.');
        });
}

// Функция для отображения содержимого темы с возможностью редактирования
function displayTopicContentForEditing(topic) {
    const container = document.createElement('div');
    container.id = 'topic-content-container1';
    container.className = 'topic-content-container1';
    container.innerHTML = `
        <p><strong>Название темы:</strong></p>
        <input type="text" id="edit-topic-title" value="${topic.tableOfContents}">
        <p><strong>Содержание:</strong></p>
        <textarea id="edit-topic-content">${topic.content}</textarea>
        <button id="save-topic-button" data-topic-id="${topic.id}">Сохранить</button>
        <button id="cancel-edit-button">Отмена</button>
    `;

    // Очищаем старые контейнеры и добавляем новый
    clearContainers();
    document.body.appendChild(container);

    // Добавляем обработчик для кнопки "Сохранить"
    document.getElementById('save-topic-button').addEventListener('click', () => {
        saveTopicChanges(topic.id);
    });

    // Добавляем обработчик для кнопки "Отмена"
    document.getElementById('cancel-edit-button').addEventListener('click', () => {
        loadAllTopicsForEditing(); // Возвращаемся к списку тем
    });
}

// Функция для сохранения изменений в теме
function saveTopicChanges(topicId) {
    const title = document.getElementById('edit-topic-title').value;
    const content = document.getElementById('edit-topic-content').value;

    fetch(`/api/topics/${topicId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            tableOfContents: title,
            content: content,
        }),
    })
        .then(response => response.json())
        .then(updatedTopic => {
            alert('Изменения сохранены успешно!');
            loadTopicContentForEditing(updatedTopic.id); // Перезагружаем содержимое темы
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при сохранении изменений.');
        });
}
