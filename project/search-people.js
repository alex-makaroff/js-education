const people = [
    {
        name: 'natasha',
        age: 15
    },
    {
        name: 'petyad1',
        age: 17
    },
    {
        name: 'sasha',
        age: 13
    },
    {
        name: 'petyad2',
        age: 1
    },
    {
        name: 'grisha',
        age: 17
    },
    {
        name: 'misha',
        age: 9
    },
    {
        name: 'vasia',
        age: 100
    },
    {
        name: 'petya',
        age: 17
    },
    {
        name: 'petyad3',
        age: 300
    }
];

function searchPeopleByPattern (arrPeople, parameters) { // +
    if (!parameters.pattern) return [...arrPeople];
    const acc = [];
    for (let i = 0; i < arrPeople.length; i++) {
        const obj = arrPeople[i];
        if (obj.name.includes(parameters.pattern)) {
            acc.push(obj);
        }
    }
    return acc;
}

function searchPeopleByMinAge (arrPeople, parameters) {
    if (!parameters.minAge) return [...arrPeople];

    // поиск по макс возрасту, и по мин вохрасту разбить на 2 УНКЦИИ
    const acc = [];

    for (let i = 0; i < arrPeople.length; i++) {
        const person = arrPeople[i];
        if (person.age >= parameters.minAge) {
            acc.push(person);
        }
    }
    return acc;
}

function searchPeopleByMaxAge (arrPeople, parameters) {
    if (!parameters.maxAge) return [...arrPeople];

    // поиск по макс возрасту, и по мин вохрасту разбить на 2 УНКЦИИ
    const acc = [];

    for (let i = 0; i < arrPeople.length; i++) {
        const person = arrPeople[i];
        if (person.age <= parameters.maxAge) {
            acc.push(person);
        }
    }
    return acc;
}

function getPeopleDiv (person) {
    return `<div class="people"> 
<div ">
<span class="img-name"><img  src="name.png" alt=""></span> 
<span class="value">${person.name}</span>
</div> 
<div>
<span class="img-age"><img src="age.png" alt=""></span> 
<span class="value">${person.age}</span>
</div>

</div>`;
}

function appendPeople (arrPeople, ellId) {
    const ell = document.getElementById(ellId);
    let html = '';
    for (let i = 0; i < arrPeople.length; i++) {
        const person = arrPeople[i];
        html += getPeopleDiv(person);
    }
    ell.innerHTML = html;
}

const filters = [searchPeopleByPattern, searchPeopleByMaxAge, searchPeopleByMinAge];

function filterPeople (arrPeople, ellId) {
    const parameters = {};
    parameters.pattern = document.getElementById('pattern').value;
    parameters.minAge = document.getElementById('minAge').value;
    parameters.maxAge = document.getElementById('maxAge').value;

    let rez = [...arrPeople];

    for (const filter_ of filters) {
        rez = filter_(rez, parameters);
    }

    appendPeople(rez, ellId);
}

function filter () {
    filterPeople(people, 'peopleList');
}

function getPeople (name, age) {
    const obj = {};
    if (!name) {
        alert('Enter the name');
        return false;
    }
    obj.name = name;

    if (!age) {
        alert('Enter the age');
        return false;
    }
    if (age !== String(Number(age))) {
        alert(`${age} is not a number`);
        return false;
    }
    obj.age = age;
    return obj;
}

function showHideAddPeople (isShow) {
    document.getElementById('add-people').style.display = isShow ? 'block' : 'none';
    document.getElementById('add-people-btn').style.display = isShow ? 'none' : 'block';
    if (!isShow) {
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
    }
}

function appendAddedPeople () {
    let html = '';
    const ell = document.getElementById('peopleList');
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const newPerson = getPeople(name, age);
    if (newPerson !== false) {
        people.unshift(newPerson);
        showHideAddPeople(false);
    }
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        html += getPeopleDiv(person);
    }
    if (name && age && age === String(Number(age))) {
        alert(`Person with a name: ${name} and age: ${age} added`);
    }
    ell.innerHTML = html;
}

function showPeople () {
    let html = '';
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        html += getPeopleDiv(person);
    }

    document.getElementById('peopleList').innerHTML = html;
}

function reset () {
    document.getElementById('pattern').value = '';
    document.getElementById('minAge').value = '';
    document.getElementById('maxAge').value = '';
}

function day () {
    document.body.style.backgroundColor = 'white';
}
function night () {
    document.body.style.backgroundColor = '#3f3f47';
}

function neonTheme () {
    const elemenstBtn = document.getElementsByClassName('btn-help');
    for (const ell of elemenstBtn) {
        ell.classList.remove('usual-theme-btn', 'neonTheme-btn', 'strangeTheme-btn', 'simpleTheme-btn');
        ell.classList.add('neonTheme-btn');
    }
    const elementBtnReset = document.getElementsByClassName('btn-reset-help');
    for (const ell of elementBtnReset) {
        ell.classList.remove('usual-theme-btn-reset', 'neonTheme-btn-reset', 'strangeTheme-btn-reset', 'simpleTheme-btn-reset');
        ell.classList.add('neonTheme-btn-reset');
    }
    const elementTitle = document.getElementsByClassName('title-help');
    for (const ell of elementTitle) {
        ell.classList.remove('usual-theme-title', 'neonTheme-title', 'strangeTheme-title', 'simpleTheme-title');
        ell.classList.add('neonTheme-title');
    }
    const elementPeople = document.getElementsByClassName('people');
    for (const ell of elementPeople) {
        ell.classList.remove('usual-theme-people-list', 'neonTheme-people-list', 'strangeTheme-people-list', 'simpleTheme-people-list');
        ell.classList.add('neonTheme-people-list');
        night();
    }
}

function usualTheme () {
    const elemenstBtn = document.getElementsByClassName('btn-help');
    for (const ell of elemenstBtn) {
        ell.classList.remove('usual-theme-btn', 'neonTheme-btn', 'strangeTheme-btn', 'simpleTheme-btn');
        ell.classList.add('usualTheme-btn');
    }
    const elementBtnReset = document.getElementsByClassName('btn-reset-help');
    for (const ell of elementBtnReset) {
        ell.classList.remove('usual-theme-btn-reset', 'neonTheme-btn-reset', 'strangeTheme-btn-reset', 'simpleTheme-btn-reset');
        ell.classList.add('usualTheme-btn-reset');
    }
    const elementTitle = document.getElementsByClassName('title-help');
    for (const ell of elementTitle) {
        ell.classList.remove('usual-theme-title', 'neonTheme-title', 'strangeTheme-title', 'simpleTheme-title');
        ell.classList.add('usualTheme-title');
    }
    const elementPeople = document.getElementsByClassName('people');
    for (const ell of elementPeople) {
        ell.classList.remove('usual-theme-people-list', 'neonTheme-people-list', 'strangeTheme-people-list', 'simpleTheme-people-list');
        ell.classList.add('usualTheme-people-list');
    }
}
function strangeTheme () {
    const elemenstBtn = document.getElementsByClassName('btn-help');
    for (const ell of elemenstBtn) {
        ell.classList.remove('usual-theme-btn', 'neonTheme-btn', 'strangeTheme-btn', 'simpleTheme-btn');
        ell.classList.add('strangeTheme-btn');
    }
    const elementBtnReset = document.getElementsByClassName('btn-reset-help');
    for (const ell of elementBtnReset) {
        ell.classList.remove('usual-theme-btn-reset', 'neonTheme-btn-reset', 'strangeTheme-btn-reset', 'simpleTheme-btn-reset');
        ell.classList.add('strangeTheme-btn-reset');
    }//
    const elementTitle = document.getElementsByClassName('title-help');
    for (const ell of elementTitle) {
        ell.classList.remove('usual-theme-title', 'neonTheme-title', 'strangeTheme-title', 'simpleTheme-title');
        ell.classList.add('strangeTheme-title');
    }
    const elementPeople = document.getElementsByClassName('people');
    for (const ell of elementPeople) {
        ell.classList.remove('usual-theme-people-list', 'neonTheme-people-list', 'strangeTheme-people-list', 'simpleTheme-people-list');
        ell.classList.add('strangeTheme-people-list');
    }
}
function simpleTheme () {
    const elemenstBtn = document.getElementsByClassName('btn-help');
    for (const ell of elemenstBtn) {
        ell.classList.remove('usual-theme-btn', 'neonTheme-btn', 'strangeTheme-btn', 'simpleTheme-btn');
        ell.classList.add('simpleTheme-btn');
    }
    const elementBtnReset = document.getElementsByClassName('btn-reset-help');
    for (const ell of elementBtnReset) {
        ell.classList.remove('usual-theme-btn-reset', 'neonTheme-btn-reset', 'strangeTheme-btn-reset', 'simpleTheme-btn-reset');
        ell.classList.add('simpleTheme-btn-reset');
    }//
    const elementTitle = document.getElementsByClassName('title-help');
    for (const ell of elementTitle) {
        ell.classList.remove('usual-theme-title', 'neonTheme-title', 'strangeTheme-title', 'simpleTheme-title');
        ell.classList.add('simpleTheme-title');
    }
    const elementPeople = document.getElementsByClassName('people');
    for (const ell of elementPeople) {
        ell.classList.remove('usual-theme-people-list', 'neonTheme-people-list', 'strangeTheme-people-list', 'simpleTheme-people-list');
        ell.classList.add('simpleTheme-people-list');
    }
}
