const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-input");
const TO_DO_LIST_KEY = "toDoList";

function addLocalStorageToDo(newToDoObj)
{
    const toDoListValue = localStorage.getItem(TO_DO_LIST_KEY);
    let toDoList;
    if(toDoListValue === null)
    {
        toDoList = new Array();
    }
    else
    {
        toDoList = JSON.parse(toDoListValue);
    }
    toDoList.push(newToDoObj);

    localStorage.setItem(TO_DO_LIST_KEY,JSON.stringify(toDoList));
}
function delLocalStorageToDo(id)
{
    const toDoListValue = localStorage.getItem(TO_DO_LIST_KEY);
    
    if(toDoListValue === null)
    {
        console.log("there is not to do list in localStorage.");
    }
    else
    {
        const toDoList = JSON.parse(toDoListValue);
        //console.dir(toDoList);
        const idx = toDoList.findIndex((toDoObj)=>(toDoObj.id === parseInt(id)));
        // console.log(`idx : ${idx}`);
        // console.log(`toDoList before splice: ${toDoList}`);
        toDoList.splice(idx,1);
        // console.log(`toDoList after splice: ${toDoList}`);
        localStorage.setItem(TO_DO_LIST_KEY,JSON.stringify(toDoList));
    }
}
function drowToDoList()
{
    const toDoListValue = localStorage.getItem(TO_DO_LIST_KEY);
    if(toDoListValue === null)
    {
        console.log("there is not to do list in localStorage.");
    }
    else
    {
        const toDoList = JSON.parse(toDoListValue);
        //console.dir(toDoList);
        toDoList.forEach(element => drowToDo(element));
    }    
}
function drowToDo(newToDoObj)
{
    const newLi = document.createElement("li");
    const newSpan = document.createElement("div");
    const newDelButton = document.createElement("button");

    newLi.classList.add("todo-li");
    newSpan.classList.add("todo-item");
    newDelButton.classList.add("todo-del-btn");

    newSpan.innerText = newToDoObj.text;
    newLi.id = newToDoObj.id;
    newDelButton.title = "delete to do element";
    newDelButton.textContent = "🗑️";
    newDelButton.addEventListener("click",(e)=>{
        //console.dir(event);
        const liElement = e.target.parentElement;
        //const idx = Array.from(liElement.parentNode.children).indexOf(liElement);
        //console.dir(liElement);
        delLocalStorageToDo(liElement.id);     
        liElement.remove();
    });
    //console.dir(newDelButton);
    newLi.appendChild(newSpan);
    newLi.appendChild(newDelButton);
    
    toDoList.appendChild(newLi);
}
function addTodo(newToDo) 
{
    drowToDo(newToDo);
    addLocalStorageToDo(newToDo);
}

toDoForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const newToDoVaue = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        id:Date.now(),
        text:newToDoVaue
    };
    addTodo(newToDoObj);
    //localStorage.setItem("toDoList","");    
});

drowToDoList();