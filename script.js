// 1.Зробити запит на АРІ
// 2.щоб отримати доступ до масиву з 10 - ма фіксованими користувачами
// 3.і вивести його у вигляді списку на екран
// 4.Додати на сайт текстове поле, при введенні тексту в якому буде відбуватися фільтрація  користувачів за іменем
//Наприклад коли ми вводимо імя у списку повинні залишилитися лише ті користувачі, імя яких теж так починаться.

async function usersFetch() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    return result.json();
}
            
async function visibleList() {
    const users = await usersFetch();
        const ul = document.querySelector('.user-list');
        for (const user of users) {
                // create items
            const li = document.createElement('li');
            li.className = ('list-item');
            li.innerHTML = user.name;   
            ul.appendChild(li);
            }
};

function filterUsers(e) {
    const userListItem = document.getElementsByClassName('list-item');
    if (e.target.value.length === 0) {
        [...document.getElementsByClassName('hidden')].forEach((item) => {
            item.classList.remove('hidden');
        });
        return;
    }
    
    for (const user of userListItem) {
        if (!user.innerHTML.startsWith(e.target.value)) {
            user.classList.add('hidden');
        } else {
            user.classList.remove('hidden');
        }
    }
}

visibleList();

document.querySelector('.input').addEventListener('keyup', filterUsers);




