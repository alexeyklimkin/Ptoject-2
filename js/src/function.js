//Economic indicators


let WoC = 1000000 // Основные средства Working Capital
let FicA = 10000000 // Оборотные средства Fixed Assets
let Revenue = 500000 // Выручка Revenue
let Expenses = 300000 // Затраты

//function profit  - Функция расчета прибыли проекта 
//function netprofit - Функция расчета чистой прибыли проекта netprofit
//function profitability -  Функция рентабельности
// function Sum() - Сумма

const economic = {
    profit (Revenue,Expenses){
    let c = Revenue-Expenses
    alert( "Прибыль от проекта составит "+ c )
    return c},

    netprofit (Revenue,Expenses){
    let c = 1-0.2
    let d = (Revenue-Expenses)*c
    alert( "Чистая прибыль от проекта составит "+ d )
    return d},

    profitability (Revenue, Expenses,b){
    let d = (Revenue-Expenses)*100/b
    alert( "Рентабельность проекта составит: "+ d+"%" )
    return d+"%"},

    sum(){
    var sum = 0 
    for ( let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum},

    averag(){
    let sum = 0 
    for ( let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }

    let averag = sum/arguments.length
    return averag
    }
    
}

let list = document.getElementById("list")

for (var key in economic) {  
    let li = document.createElement("li")
        let a = document.createElement("a")
        a.innerHTML = key
        a.dataset = key
            a.onclick = ()=>{ a.text 
                return economic[a.text](Revenue,Expenses,20)}
        li.append(a)
    list.append(li)
    //;
}
 

//Функция обратоного вызова 


function callbackfunction(callback) {
    let a = prompt('Выручка.');
    let b =prompt('Убытки.');
    callback(a,b)
}

let showfonction = document.getElementById("showfonction") 

/*showfonction.addEventListener ("click", () => { 
    callback = netprofit
    callbackfunction(callback);  
});*/






//************************************************/
//* Разное* ///
//************************************************/


var myCar = {
make:"Ford",
model: "Mustang",
year: 1969,
age: 10,
abx: function (){
 return this.age
}

}

//************************************************/
// **********Пример Замыкания ********************/
//************************************************/


let c = 500
let later 

function OuterFunction(a){
    var a = 1-a/100;
        function inerfunction(b) {
            let d = (b - c)*a
                alert(d)
        }
        this.later = inerfunction 
}

let outer1 = new OuterFunction(20)
let outer2 = new OuterFunction(10)
let outer3 = new OuterFunction(30)
//outer1.later(1500)
//outer2.later(1500)


let NumberOfEmployees = function(x){
    console.log("численность пероснала составит "+x+" человек")
}
NumberOfEmployees(5)

//************************************************/
// **********Пример генераторов ********************/
//************************************************/