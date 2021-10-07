# Критерии приема

Создан репозиторий goit-react-hw-06-phonebook
При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу проекта на GitHub Pages или Netlify
В Redux-состоянии хранится минимально необходимый набор данных
При запуске кода задания, в консоли нету ошибок и предупреждений
Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей
Для компонентов описаны propTypes, и где необходимо, defaultProps
Телефонная книга
Выполни рефакторинг кода приложения «Телефонная книга» добавив управление состоянием при помощи библиотеки Redux.

Пусть Redux-состояние выглядит следующим образом.

{
contacts: {
items: [],
filter: ''
}
}
Шаг 1
Используй только возможности библиотеки Redux (без redux-toolkit).

Создай хранилище и добавь инструменты разработчика
Создай действия (actions) сохранения и удаления контакта, а также обновления фильтра.
Вынеси типы действий в отдельный файл констант.
Создай редюсеры контактов и фильтра.
Свяжи React-компоненты с Redux-логикой при помощи бибилиотеки react-redux.
Шаг 2
Выполни рефакторинг кода и сократи Redux-бойлерплейт используя библиотеку Redux Tookit. Используй функции configureStore(), createAction() и createReducer().
