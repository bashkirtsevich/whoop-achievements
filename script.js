const filters = document.querySelectorAll(".filters span"),
taskBox = document.querySelector(".task-box");

let editId,
isEditTask = false,
achievements = JSON.parse(localStorage.getItem("achievements-list"));

if (!achievements){
    achievements = [
        {
            "title":"Аквариумист",
            "text":"упасть в стакан с пивом",
            "status":"pending"
        },
        {
            "title":"Цирюльник",
            "text":"влететь в волосы",
            "status":"pending"
        },
        {
            "title":"Двойной вуппер с сыром",
            "text":"упасть в тарелку с едой",
            "status":"pending"
        },
        {
            "title":"Хэдшот",
            "text":"без коментариев",
            "status":"pending"
        },
        {
            "title":"Таран оружие героев",
            "text":"столкнуться с соперником в воздухе",
            "status":"pending"
        },
        {
            "title":"Иду по приборам",
            "text":"пролететь хотя бы один круг с жесточайшими помехами",
            "status":"pending"
        },
        {
            "title":"Торопыга",
            "text":"выставить вуп на старт с чужой группой",
            "status":"pending"
        },
        {
            "title":"Чип и дейл",
            "text":"разбить дрон словив фс",
            "status":"pending"
        },
        {
            "title":"Олдскул",
            "text":"потерять видео и лететь без очков",
            "status":"pending"
        },
        {
            "title":"Победитель по жизни",
            "text":"словить подряд 3 фейлсейва",
            "status":"pending"
        },
        {
            "title":"Диверсант",
            "text":"включиться во время чужого вылета",
            "status":"pending"
        },
        {
            "title":"Но зачем?",
            "text":"слетать лонг-рейндж на вупе",
            "status":"pending"
        },
        {
            "title":"Невозможно...",
            "text":"сломать 1.5мм вал",
            "status":"pending"
        },
        {
            "title":"Самая быстрая рука на диком западе",
            "text":"успешно починить вуп между вылетами",
            "status":"pending"
        },
        {
            "title":"Очумелые ручки",
            "text":"починить раму пэт бутылкой",
            "status":"pending"
        },
        {
            "title":"Подбит, но не сломлен",
            "text":"долететь круг без антенны",
            "status":"pending"
        },
        {
            "title":"Да такой же как у всех",
            "text":"только из отборных комплектующих",
            "status":"pending"
        },
        {
            "title":"Неудержимый",
            "text":"уронить ворота или другой достаточно тяжёлый инвентарь",
            "status":"pending"
        },
        {
            "title":"Минус уши",
            "text":"выложить двр со звуком",
            "status":"pending"
        },
        {
            "title":"Близорукость",
            "text":"пролететь с расфокусированной камерой",
            "status":"pending"
        },
        {
            "title":"Корчевод",
            "text":"собрать дрон из того, что осталось",
            "status":"pending"
        },
        {
            "title":"Неуравновешенный",
            "text":"продолжить полет с висящим на проводе аккумулятором",
            "status":"pending"
        },
        {
            "title":"Форсаж",
            "text":"ужарить батку в ноль",
            "status":"pending"
        },
        {
            "title":"Гнев Зевса: потерять болты, которыми мотор крепится к раме",
            "status":"pending"
        },
        {
            "title":"Форсаж 2",
            "text":"заодно ужарить моторы",
            "status":"pending"
        },
        {
            "title":"Икар",
            "text":"потерять пропы",
            "status":"pending"
        },
        {
            "title":"Легендарная пыль",
            "text":"перебрать 0702 мотор",
            "status":"pending"
        },
        {
            "title":"NTSB",
            "text":"потерять данные блекбокса при краше",
            "status":"pending"
        },
        {
            "title":"Еще поработают",
            "text":"летать на погнутых/сломанных пропах",
            "status":"pending"
        },
        {
            "title":"И на старуху бывает проруха",
            "text":"переделать вуп в пушер",
            "status":"pending"
        },
        {
            "title":"Амнезия",
            "text":"потерять все дврки на флешке",
            "status":"pending"
        },
        {
            "title":"Углепластик",
            "text":"летать на зубочисточной раме",
            "status":"pending"
        },
        {
            "title":"Вспомнить всё: пересматривая двр, найти такую, которую не помнишь как записал",
            "status":"pending"
        },
        {
            "title":"Чернокнижник",
            "text":"настроить вуп по блекбоксу",
            "status":"pending"
        },
        {
            "title":"Лучше бы машину купил",
            "text":"потратить более 100к на запчасти",
            "status":"pending"
        },
        {
            "title":"Дай прикурить",
            "text":"сжечь батку в полете",
            "status":"pending"
        },
        {
            "title":"Призрачный гонщик",
            "text":"лететь с горящей баткой",
            "status":"pending"
        },
        {
            "title":"Стрелок",
            "text":"на полетухах стрельнуть пару баток у коллег",
            "status":"pending"
        },
        {
            "title":"Халявщик",
            "text":"летать на чужих батах",
            "status":"pending"
        },
        {
            "title":"Халявщик 2",
            "text":"летать на чужих батах, вупе и очках",
            "status":"pending"
        },
        {
            "title":"Каршеринг",
            "text":"летать на чужом дроне",
            "status":"pending"
        },
        {
            "title":"Эндуро",
            "text":"упасть в грязь",
            "status":"pending"
        },
        {
            "title":"Синяя изолента",
            "text":"использовать в качестве изолятора и стяжек синюю изоленту",
            "status":"pending"
        },
        {
            "title":"Флюгегехаймен",
            "text":"забыть бинд фразу елрс",
            "status":"pending"
        },
        {
            "title":"КВН",
            "text":"летать по экранчику",
            "status":"pending"
        },
        {
            "title":"КиВин",
            "text":"летать по экрану от шлема без антен, и зрением -10",
            "status":"pending"
        },
        {
            "title":"Даблкил",
            "text":"два хэдшота подряд",
            "status":"pending"
        },
        {
            "title":"Триплкил",
            "text":"3 хэда",
            "status":"pending"
        },
        {
            "title":"Монстеркилл",
            "text":"хэдшоты всем в баре",
            "status":"pending"
        },
        {
            "title":"Небоевая потеря",
            "text":"забыть что нибудь в баре",
            "status":"pending"
        },
        {
            "title":"Не, амнезия это",
            "text":"стартовать с выключенным пультом. Сам попадал в такую ситуацию и видел ребят, которые в ней оказывались.",
            "status":"pending"
        },
        {
            "title":"Небоевая потеря",
            "text":"приехать с разряженными очками",
            "status":"pending"
        },
        {
            "title":"Сын маминой подруги",
            "text":"выйграть несколько гонок подряд",
            "status":"pending"
        },
        {
            "title":"Сын маминой подруги 2",
            "text":"выйграть гонку в баре будучи пьяным",
            "status":"pending"
        },
        {
            "title":"Больше никогда!",
            "text":"разбить/потерять квад, из за этого расстроится и ливнуть с хобби",
            "status":"pending"
        },
        {
            "title":"Семеныч",
            "text":"напиться до конца гонки, сойти изза дезориентации",
            "status":"pending"
        },
        {
            "title":"Фарсаж 9",
            "text":"лететь по трассе Тёмы на зубочистке",
            "status":"pending"
        },
        {
            "title":"Диванный воин",
            "text":"выиграть гонку в твго",
            "status":"pending"
        }
    ]
}

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

function showTodo(filter) {
    let liTag = "";
    if(achievements) {
        achievements.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter == "all") {
                liTag += `<li class="task">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}"><b>${todo.title}</b><br>${todo.text}</p>
                            </label>
                        </li>`;
            }
        });
    }
    taskBox.innerHTML = liTag || `<span>You don't have any achievements here</span>`;
    let checkTask = taskBox.querySelectorAll(".task");
    taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
}
showTodo("all");

function showMenu(selectedTask) {
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    });
}

function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked) {
        taskName.classList.add("checked");
        achievements[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        achievements[selectedTask.id].status = "pending";
    }
    localStorage.setItem("achievements-list", JSON.stringify(achievements))
}


function deleteTask(deleteId, filter) {
    isEditTask = false;
    achievements.splice(deleteId, 1);
    localStorage.setItem("achievements-list", JSON.stringify(achievements));
    showTodo(filter);
}
