//Strings

let str = 'Hello';
const str1 = "Hello";
const str2 = `Hello ${ 8 * 9 } ${ str1 }`;

console.log(str + str1);
console.log(`${ str } ${ str1 }`);

//Строки изменять нельзя. Они не мутабельны
console.log(str[1]);
str[1] = 'a';
console.log(str);
str = 'Halo';
console.log(str);

//! Методы строк
//? slice -- замена substring/substr
clog('SLICE');
console.log(str1.slice(0, 4));
console.log(str1.slice(3));
console.log(str1.slice(-1));
console.log(str1.slice());//Бесполезен для строк

//? split
clog('SPLIT');
console.log(str.split('l'));
console.log(str.split(''));
console.log(str1.split('ll'));


function clog(text, color = 'white', colorB = 'black'){
    const style = [
        `background-color: ${ colorB };`,
        'padding: 5px 125px;',
        `color: ${ color };`
    ].join('');
    console.log('%c%s', style, text);
}

clog('ARRAYS', 'red');

//PUSH, POP, SHIFT, UNSHIFT
const arr1 = [];//литеральный
const arr2 = new Array();
const arr3 = [12, 34, 54, 656, 454, 'fdslkaf', true, false, 33n, {}, [22, 4, true]];

clog('LOOPS');

//Цикл с предусловием
/**
 * while(условие){
 *  тело цикла
 * }
 * 
 * for(инициализация до цикла; условие; действие после каждой итерации){
 *  тело цикла
 * }
 */

let i = 10;
while(i--){
    console.log('loop while: ', i);
}

let j = 10;
for(; j--;){
    console.log('loop for: ', j);
}

//Цикл с послеусловием
//do while
let k = 10;
do{
    console.log('loop do-while: ', k);
}while(k--);

clog('RANDOM');
console.log(random(1,10));
const randomValues = [];
const stat = {};
for(let i = 0; i < 100; i++){
    const ran = random(1,10);
    randomValues.push(ran);
    if(!stat[ran]){
        stat[ran] = 0;
    }
    stat[ran]++;
}


function random(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

console.log(randomValues);
console.log(stat);

//? random arrays
clog('RANDOM ARRAYS', 'lightblue');

const races = ['human', 'elf', 'dwarf', 'goblin', 'orc', 'undead'];
const classes = ['warrior', 'monk', 'wizard', 'mage', 'palladin', 'rogue', 'priest'];
const names = ['Mykola', 'Ihor', 'Oleksii', 'Serhii', 'Viktor'];

//! Методы прохода по массиву
const party = names.map((name, i, arr) => {
    return {
        name,
        lvl : random(1, 10),
        race : races[random(0, races.length - 1)],
        class : classes[random(0, classes.length - 1)],
    };
});

console.log(party);
// console.log(party.slice(1, 3));
// console.log(party.splice(1));
// console.log(party.splice(1, 0)); //не работает
// console.log(party.splice(2, 1));//Выразает элемент из массива и возвращает его

//? forEach просто проходит по массиву

//? filter возвращает новый отфильтрованый массив

//? reduce возвращает значение, которое пересылает между итерациями запуска функции

//? some возвращает true, если хоть один из вызовов функции вернул true, иначе false

//? every возвращает false, если хоть оодин из вызовов функции вернул false, иначе true

//? find возвращает первый элемент, на котором функция вернула true

//Functions
function declarationType(){
    //return
}

const expressionType = function(){
    //return
}

//Arrow functions
const arrowF = () => {
    //return
}