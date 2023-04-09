"use strict";

let input = document.querySelector('.input'); // создаём переменную 
let conteiner = document.querySelector('.conteiner'); // создаём переменную, потому что в неё потом будем добавлять теги.


input.addEventListener('keyup', function (event) { // создаём метод клавиатуры
    if (event.code === 'Enter') { // если нажимают Enter тогда: 

        console.log(input.value)
        if (!input.value.trim()) return alert("Вы ничего не написали")  // Метод trim() удаляет пробельные символы с начала и конца строки. для того что бы не отправить пустую строчку

        let area = document.createElement("div"); // создаю переменную и тег в документе
        conteiner.appendChild(area); // показываем в чьё дерево помещаем
        input.after(area);  // показываем после какого тега помещаем
        area.classList.add("area"); //задаём класс

        let area__checkbox = document.createElement('input');
        area.appendChild(area__checkbox);
        area__checkbox.classList.add('area__checkbox');
        area__checkbox.setAttribute("type", "checkbox"); // добавляем атрибут в котором первое это имя, второе значение

        let area__text = document.createElement('text');
        area.appendChild(area__text);
        area__text.classList.add('area__text');

        area__text.innerHTML = input.value; //VALUE важнейшая подкопотная-функция, позволяет получить значение входных элементов

        area__checkbox.addEventListener("change", function () { //функция которая проверяет чек бокс на галочку
            if (this.checked) {                                 //если галочка тогда .....
                area__text.classList.replace('area__text', 'area__text2');
            } else {                                            //если галочки нету тогда....
                area__text.classList.replace('area__text2', 'area__text');
            }
        })

        area__text.addEventListener('click',function(){    // Функция при клике на текст, спрашивает нужно ли поменять задачу
            let task_change = prompt ("Изменить задачу?")
            area__text.textContent = task_change || area__text.textContent   // Первичный текст меняю, на текст который ввели, но если жму ОТМЕНА, тогда возвращается прежнее значение.
        })

        let clean = document.querySelector('.clean')
        clean.addEventListener('click', function(){
           conteiner.removeChild(area);                  // удаляет тег, который находится в ...
        })


        input.value = ""   //Очищает поле ввода
    }; 

});

       











