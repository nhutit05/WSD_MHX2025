// BT1

function changeText() {
    const pCont = document.getElementById("greeting");
    pCont.textContent = "Chào mừng bạn đến với bài tập DOM!";
}

// BT2
function changeColor() {
    const box = document.getElementById("box");
    box.style.backgroundColor = "orange";
}

// BT3
function addChild() {
    const input = document.getElementById("todoInput");
    const todoText = input.value.trim();

    if (todoText != " ") {
        const ul = document.getElementById("todoList");
        const li = document.createElement("li");
        li.textContent = todoText;
        const button = document.createElement("button");
        button.textContent = "Xóa";
        button.onclick = () => {
            removeToDo(button);
        };
        li.appendChild(button);
        ul.appendChild(li);
        input.value = "";
    }
}

function removeToDo(btn) {
    const lst1 = btn.parentElement;
    lst1.remove();
}

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", addChild);

// BT4

const img = document.getElementById("myImage");
function changeImage() {
    img.setAttribute(
        "src",
        "https://www.svgrepo.com/show/452030/avatar-default.svg"
    );
}

// BT5

function toggleHighlight() {
    const p = document.getElementById("toggleClassText");
    p.classList.toggle("highlight");
}
