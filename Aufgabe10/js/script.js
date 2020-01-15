var todosObject = [
    {
        text: "Lorem",
        status: true
    },
    {
        text: "Ipsum",
        status: false
    },
    {
        text: "Dolor",
        status: false
    },
    {
        text: "new",
        status: false
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check "
            + todosObject[index_1].status
            + "'><i class='fas fa-check'></i></span>"
            + todosObject[index_1].text
            + "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
        todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
    };
    for (var index_1 = 0; index_1 < todosObject.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
function updateCounter() {
    var unchecked = 0;
    var checked = 0;
    for (var i = 0; i < todosObject.length; i++) {
        if (todosObject[i].status == true) {
            checked++;
        }
        else {
            unchecked++;
        }
    }
    counterDOMElement.innerHTML = todosObject.length + " in total | " + unchecked + " open | " + checked + " done";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        var task = {
            text: inputDOMElement.value,
            status: false
        };
        todosObject.push(task);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todosObject[index].status = !todosObject[index].status;
    drawListToDOM();
}
function deleteTodo(index) {
    todosObject.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neues ToDo " + wildcard + " wurde erstellt.");
            var task = {
                text: wildcard,
                status: false
            };
            todosObject.push(task);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=script.js.map