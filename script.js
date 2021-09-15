let today = new Date();
let hourNow = today.getHours();
let greeting;
let name = prompt('Введите ваше имя');

if (hourNow > 22 & hourNow < 4) {
    greeting = 'Доброй ночи ' + name;
} else if (hourNow > 17 & hourNow < 22) {
    greeting = 'Добрый вечер ' + name;
} else if (hourNow > 12 & hourNow < 17) {
    greeting = 'Добрый день ' + name;
} else if (hourNow > 4 & hourNow < 12) {
    greeting = 'Доброе утро ' + name;
} else {
    greeting = 'Приветствуем ' + name;
};

document.write('<div>' + greeting + '</div>');