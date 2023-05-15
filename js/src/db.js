
//***** Объект *****/

const db ={
    Автобусы: [
        ["№пп", "Марка", "Модель","Год выпуска ","Класс","Цена"],
        [1,"Setra","S317HDH",2008,"БК",500000],
        [2,"Man","LionS",2009,"БК",1500000],
        [3,"Mercedes","Tuorismo",2015,"БК",10000000],
    ],
    
    Персонал: [
        ["№пп","Имя", "Фамилия", "Отчество","Год рождения ","Должность"],
        [1,"Иван","Алексеевич","Сидоров",1989,"Директор"],
        [2,"Александр","Сергеевич","Пушкин",1995,"Главный инженер"],
        
    ],

    Грузовики:[
        ["№пп","Марка", "Модель", "Год выпуска","Гос №", "Тоннаж","Тип"],
        [1,"Mercedes","Sprinter",2010,"е215сн190","2 тонны","Фургон"],    
    
    ]
}


/***************************
 Форма для создания масива
****************************/


let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let form2 = document.getElementById("CreatArray")
let i = 1


function ShowElement(Idname){
    document.getElementById(Idname).style.display ="block"
}

// Отмена вызова

function HideElement(Idname){
    document.getElementById(Idname).style.display ="none"

}

// Добавить элемент

function inpCA1(form){
    let elmt = document.getElementById(form)
    let input = document.createElement("input")
    input.innerHTML = ""
    input.className ="input"
    input.id = i++
    elmt.appendChild(input)
}

function clirinp(i) {
    for (let j = 1; j < i; j++){
        document.getElementById(j).remove()
    }
}

function Creatarray (){
    let elmt = document.getElementById("0").value
    let arr =[]

        for (let j = 1; j < i; j++){
                let x  = document.getElementById(j).value
                arr.push(x) 
        }

    alert("Массив "+elmt+arr+" создан")

    db[elmt] = [arr]

        for (let j = 1; j < i; j++){
            document.getElementById(j).remove()
        }
        i = 1 
}

button1.addEventListener("click", ()=>{
    inpCA1("CreatArray-1")
})

button2.addEventListener("click", ()=>{
    Creatarray(),
    HideElement("CreatArray")
    selectD("listDB",db)
})



