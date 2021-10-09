let hidNum = Math.floor(Math.random() * 100);
let quest;

function one(num) {
    console.log(num);
    function two() {
        quest = prompt('Угадай число от 1 до 100!');

        if (!isNumber(quest)) {
            quest = confirm('Введи число!');
            if (quest === false) return alert('Игра окончена!');
            two();
        } 

        else if (+quest < num) {
            quest = confirm('Загаданное число больше!');
            if (quest === false) return alert('Игра окончена!');
            two();
        } 

        else if (+quest > num) {
            quest = confirm('Загаданное число меньше!');
            if (quest === false) return alert('Игра окончено!');
            two();
        }

        else alert('Вы угадали!!!');
    }
    two();
}

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function gameOver (x) {
    if (x === false) return alert('Игра окончена!');
}

one(hidNum);



