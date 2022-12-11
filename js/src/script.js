
let inner = document.getElementById("inner"); // Добавить строку
let show = document.getElementById("show"); // Загрузить таблицу 
let form = document.getElementById("Form"); // Загрузить таблицу 



var Bus =[
    ["№пп", "Марка", "Модель","Год выпуска ","Класс"],
    [1,"Setra","S317HDH",2008,"БК"],
    [2,"Man","LionS",2009,"БК"],
    [3,"Mercedes","Tuorismo",2015,"БК"],
]

var People =[
    ["№пп","Имя", "Фамилия", "Отчество","Год рождения ",],
    [1,"Иван","Алексеевич","Сидоров",1989],
    [2,"Александр","Сергеевич","Пушкин",1995],
    
]


let contry = Bus

show.onclick = ()=>{ 
    var contr = document.querySelector(".list").index
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
    let marka = document.getElementById('1').value
    let model = document.getElementById('2').value
    let yer = document.getElementById('3').value
    let clas = document.getElementById('4').value

    let a = [[val,marka,model,yer,clas],]
    contry.push(a[0]) // добовляем в масив данные 
    let lastr = table.lastChild

            for( i = 0; i < a[0].length; i++){
                lastr.childNodes[i].innerHTML = a[0][i]
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










