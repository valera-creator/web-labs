const ageSelect = document.getElementById('age'); // с id должен совпадать в select
    for (let age = 18; age <= 99; age++) {
        const option = document.createElement('option');
        option.value = age;
        option.textContent = age;
        ageSelect.appendChild(option);
    }
