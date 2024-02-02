let todo = document.getElementById("todo");
let todoList = document.getElementById("todoList");

function addTask() {
    if (todo.value) {
        var div = document.createElement("div");
        div.style.padding = "5px";
        div.style.backgroundColor = "white";
        div.classList = "d-flex";
        div.style.marginTop = "10px";
        div.style.border = "1px solid grey";
        let li = document.createElement("li");
        li.innerText = todo.value;
        li.style.fontSize = "30px";
        div.appendChild(li);

        // edit functionality
        var edit = document.createElement("button");
        edit.innerText = "EDIT";
        edit.style.marginLeft = "8px";
        edit.classList = "btn btn-info";
        edit.onclick = function () {
            var newText = prompt("Edit task:", li.innerText);
            if (newText !== null) {
                li.innerText = newText;
            }
        };
        div.appendChild(edit);


        // delete functionality
        var del = document.createElement("button");
        del.innerText = "DELETE";
        del.style.marginLeft = "8px";
        del.classList = "del";
        del.classList = "btn btn-danger";
        del.onclick = function () {
            div.remove();
        };
        div.appendChild(del);
        todoList.appendChild(div);
        todo.value = "";
    }
    else {
        alert("write any todo!");
    }
}
