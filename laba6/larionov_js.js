window.alert("Добро пожаловать на регистрацию на мероприятие");


const ageSelect = document.getElementById('age'); // с id должен совпадать в select
    for (let age = 18; age <= 99; age++) {
        const option = document.createElement('option');
        option.value = age;
        option.textContent = age;
        ageSelect.appendChild(option);
    }


const form = document.querySelector('form[method="post"]');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Получение полей
        const usernameInput = document.getElementById('username');
        const lastnameInput = document.getElementById('lastname');
        const ageSelectElement = document.getElementById('age');
        const emailInput = document.getElementById('email');

        // Получение значений полей
        const username = usernameInput.value.trim();
        const lastname = lastnameInput.value.trim();
        const ageValue = ageSelectElement.value;
        const email = emailInput.value.trim();

        if (!username) {
            alert("Не заполнено поле имени!");
            return;
        }
        if (!lastname) {
            alert("Не заполнено поле фамилии!");
            return;
        }
        if (!ageValue) {
            alert("Не выбран возраст!");
            return;
        }
        if (!email) {
            alert("Не заполнено поле почты!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) { // Если поле не пустое и не соответствует формату
            alert("Ошибка: нарушение формата почты.");
            return;
        }

        alert("Регистрация прошла успешно!");
    });
} else {
    console.error('Форма с method="post" не найдена.');
}



