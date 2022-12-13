
//let table = document.getElementById("table"); // Добавить строку
let inner = document.getElementById("inner"); // Добавить строку
let show = document.getElementById("show"); // Загрузить таблицу 
let form = document.getElementById("Form"); // Загрузить таблицу 

// Масивы

let Bus =[
    ["№пп", "Марка", "Модель","Год выпуска ","Класс"],
    [1,"Setra","S317HDH",2008,"БК"],
    [2,"Man","LionS",2009,"БК"],
    [3,"Mercedes","Tuorismo",2015,"БК"],
]

let People =[
    ["№пп","Имя", "Фамилия", "Отчество","Год рождения ",],
    [1,"Иван","Алексеевич","Сидоров",1989],
    [2,"Александр","Сергеевич","Пушкин",1995],
    
]

let truk = [
    ["№пп","Марка", "Модель", "Год выпуска","Гос №", "Тоннаж","Тип"],
    [1,"Mercedes","Sprinter",2010,"е215сн190","2 тонны","Фургон"],    

]



/// код 

let contry = Bus

show.onclick = ()=>{ 
    var contr = document.querySelector(".list").value
        console.log(contr)
    table.remove() // - удаление таблицы 
    showTable(form, contry)
        
}



document.addEventListener ("contextmenu", event => { 
    event.preventDefault()
    

});

// Функция добавляющая строку 

inner.onclick = () =>{

    let val = contry.length 
    let arr =[val]
    
    for (let j = 1; j < contry[1].length; j++){
        let x  = document.getElementById(j).value
        arr.push(x)

    }
      
   
    contry.push(arr) // добовляем в масив данные 
    let lastr = table.lastChild

            for( let i = 0; i < arr.length; i++){
                lastr.childNodes[i].innerHTML = arr[i]
            }  
        inp(table, contry)
}


// table.rows.length - Длина таблицы

// showTable - Создать таблицу 

function showTable(box, contry) {
    
    let table = document.createElement("table")
    table.className ="table"
    table.id = "table"
    for (let i = 0; i < contry.length; i++ ){
        let tr = document.createElement("tr");
            for (let j = 0; j <contry[i].length; j++ ){
                let td = document.createElement("td");
                td.innerHTML = contry[i][j]
                tr.appendChild(td)
            }
            table.append(tr);
    }   
    box.append(table)

    inp(table, contry)

};

// inp - добавить строку с вводом данных

function inp(table, contry){
    let tr = document.createElement("tr");    
        for ( let i = 0; i < contry[0].length; i++) {
                let td = document.createElement("td")
                let input = document.createElement("input")
                    td.innerHTML = ""
                    input.className ="input"
                    input.id = i
                td.appendChild(input)
    tr.appendChild(td)}
table.append(tr);
}










