//Economic indicators


let WoC = 100 // Оборотные средства Working Capital

let a = 500 // Выручка
let b = 300 // Затраты

//Функция расчета прибыли проекта 

function profit (a,b){
    var c = a-b
    console.log(c)
}

// Функция рентабельности 

function profitability (a, b){
    var d = (a-b)*100/b
    alert( "Рентабельность проекта составит: "+ d+"%" )
}


//* ПОКАЗАТЕЛИ ФИНАНСОВОГО СОСТОЯНИЯ ПРЕДПРИЯТЯ *//