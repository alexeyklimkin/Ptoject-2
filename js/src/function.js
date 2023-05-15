//Economic indicators


let WoC = 1000000 // Основные средства Working Capital
let FicA = 10000000 // Оборотные средства Fixed Assets
let Revenue = 500000 // Выручка Revenue
let Expenses = 300000 // Затраты


const economic = {
    //function profit  - Функция расчета прибыли проекта 
    Profit (Revenue,Expenses){
    let c = Revenue-Expenses
    alert( "Прибыль от проекта составит "+ c )
    return c},

    //function netprofit - Функция расчета чистой прибыли проекта netprofit
    Netprofit (Revenue,Expenses){
    let c = 1-0.2
    let d = (Revenue-Expenses)*c
    alert( "Чистая прибыль от проекта составит "+ d )
    return d},

    //function profitability -  Функция рентабельности
    Profitability (Revenue, Expenses,b){
    let d = (Revenue-Expenses)*100/b
    alert( "Рентабельность проекта составит: "+ d+"%" )
    return d+"%"},

    // function Sum() - Сумма
    Sum(){
    var sum = 0 
    for ( let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum},

    Averag(){
    let sum = 0 
    for ( let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }

    let averag = sum/arguments.length
    return averag
    },
    
}

////////////////////////////////////////////
// Функция ввыода списка свойств объекта///
//////////////////////////////////////////

function selectDB (form,arr){

    let listdb = document.getElementById(form)
 
         for (var key in arr) {  
             let li = document.createElement("li")
                 let a = document.createElement("a")
                 a.innerHTML = key
                 a.href =""
                 a.dataset = key
                     a.onclick = (event)=>{
                         contry = arr[event.target.textContent]
                         console.log(contry)
                     }
                 li.append(a)
             listdb.append(li)
         }
   
}

function selectD (form,arr){

    let listdb = document.getElementById(form)

        for (lastProperty in db); { ;
             let li = document.createElement("li")
                 let a = document.createElement("a")
                 a.innerHTML = lastProperty
                 a.href =""
                 a.dataset = lastProperty
                     a.onclick = (event)=>{
                         contry = arr[event.target.textContent]
                     }
                 li.append(a)
             listdb.append(li)
         }
   
}




//////////////////////////////////////////////////////
// Вывод в список мотодов объекта economic их вызов// 
////////////////////////////////////////////////////

let list = document.getElementById("list")

for (var key in economic) {  
    let li = document.createElement("li")
        let a = document.createElement("a")
        a.innerHTML = key
        a.href =""
        a.dataset = key
            a.onclick = (event)=>{ 
             economic[event.target.textContent](Revenue,Expenses,20)}
        li.append(a)
    list.append(li)
}
 
////////////////////////////
//Функция обратоного вызова 
///////////////////////////

function callbackfunction(callback) {
    let a = prompt('Выручка.');
    let b =prompt('Убытки.');
    callback(a,b)
}

let showfonction = document.getElementById("showfonction") 

showfonction.addEventListener ("click", () => { 
    callback = netprofit
    callbackfunction(callback);  
})




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