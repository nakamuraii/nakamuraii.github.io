// Переключение активной кнопки в My recent works
document.querySelectorAll('.works__button').forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс 'active' у всех кнопок
        document.querySelectorAll('.works__button').forEach(btn => btn.classList.remove('active'));
        // Добавляем класс 'active' к текущей нажатой кнопке
        button.classList.add('active');

        // Получаем текстовое содержимое кнопки, чтобы определить категорию
        const category = button.textContent.trim().replace(/\s+/g, '-');

        // Показываем/скрываем элементы works__recent-item в зависимости от категории
        document.querySelectorAll('.works__recent-item').forEach(item => {
            if (category === 'All') {
                item.style.display = 'flex'; // Показываем все элементы для категории "All"
            } else {
                // Скрываем элемент, если его класс не соответствует выбранной категории
                if (item.classList.contains(`works__recent-item--${category}`)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});


// Валидация формы при отправке
document.querySelector('.message__send-button').addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки

    let hasError = false;
    document.querySelectorAll('.form-input').forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '1px solid red';
            hasError = true;
        } else {
            input.style.border = '';
        }
    });
    if (!hasError) {
        document.querySelectorAll('.form-input').forEach(input => input.value = '');
        alert('Успешный успех!');
    }
});
