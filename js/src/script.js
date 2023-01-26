

// создание переменных
    let inner = document.getElementById("inner"); // Добавить строку
    let show = document.getElementById("show"); // Показать таблицу 
    let form = document.getElementById("Form"); // 
    let CreatArray = document.getElementById("ButtonCreatArray"); // открыть окно создания массива
    let cancel = document.getElementById("cancel")
    let removtable = document.getElementById("removtable");// кнопка удалить таблицу
    let select = document.getElementById("list")
    let contry = Bus

/// код 

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
    /*if (document.getElementById("table") !== null) {
        table.remove()  
        inpCA(form)
    }
    else {
        inpCA(form)
    }*/    
    showCreatArray("CreatArray")
})

cancel.addEventListener("click", ()=>{
    hideElement("CreatArray")
})


show.onclick = ()=>{
        
            var a  = select[select.selectedIndex].text
                if (a == 'People') {
                contry = People 
                } else if (a == 'Bus'){
                    contry = Bus
                }
                else if (a == 'Truck'){
                    contry = Truck
                }

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




inner.onclick = () =>{
    will(contry)
    inp(table, contry)
}

/// ****** ФУНКЦИИ *****
// table.rows.length - Длина таблицы

function will(contry) {

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
                
}


// will - добовляет строку 

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

// Таблица для создания масива

function inpCA (box){
    let table = document.createElement("table")
    table.className ="table"
    table.id = "table"
        let tr = document.createElement("tr");    
                for ( let i = 0; i < 5; i++) {
                        let td = document.createElement("td")
                        let input = document.createElement("input")
                            td.innerHTML = ""
                            input.className ="input"
                            input.id = i
                        td.appendChild(input)
            tr.appendChild(td)}
        table.append(tr)
    box.append(table)
}


// Вызов окна

function showCreatArray(Idname){
    document.getElementById(Idname).style.display ="block"
}

// Отмена вызова

function hideElement(Idname){
    document.getElementById(Idname).style.display ="none"
}


function inpCA1(form){
    let input = document.createElement("input")
    input.innerHTML = ""
    input.className ="input"
    input.id = i
    form.append(input)
}

    
let button1 = document.getElementById("button1")

button1.addEventListener("click", ()=>{
    inpCA1("CreatArray")
})
