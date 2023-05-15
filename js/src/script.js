

// Переменные

    let inner = document.getElementById("inner"); // Добавить строку
    let show = document.getElementById("show"); // Показать таблицу 
    let form = document.getElementById("Form"); // 
    let CreatArray = document.getElementById("ButtonCreatArray"); // открыть окно создания массива
    let cancel = document.getElementById("cancel")
    let removtable = document.getElementById("removtable");// кнопка удалить таблицу
    let select = document.getElementById("select")
    let contry = db["Автобусы"]

/// обработчики событий 

document.addEventListener ("contextmenu", event => { 
    event.preventDefault()
});

document.addEventListener ("click", event => { 
    event.preventDefault()
    
});

removtable.addEventListener ("click", () => { 
    table.remove()
});


CreatArray.addEventListener ("click", () => { 
    ShowElement("CreatArray")
})

cancel.addEventListener("click", ()=>{
    HideElement("CreatArray")
})


selectDB("listDB",db) // вывод списка свойств в объекта DB



show.onclick = ()=>{

    if (document.getElementById("table") !== null) {
        alert("Таблица есть");
        table.remove() // - удаление таблицы 
        showTable(form, contry)
    }
    else {
        alert("Таблицы нет");
        showTable(form, contry)
    }
}

document.onkeydown = (event) =>{
    if (event.key == "Enter"){
        will(contry)
        inp(table, contry)
        
    }
    else{
        return 
    }
    
}
inner.onclick = () =>{
    will(contry)
    inp(table, contry)
}

/****************************/
/* Создания Функций
/*****************************/


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

// will - добовляет новые данные в массив 

function will(contry) {

    let val = contry.length 
    let arr =[val]
    
        for (let j = 1; j < contry[0].length; j++){
            let x  = document.getElementById(j).value
            arr.push(x)
        }

    contry.push(arr) 
    
    let lastr = table.lastChild
        for( let i = 0; i < arr.length; i++){
             lastr.childNodes[i].innerHTML = arr[i]
        }
                
}

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
