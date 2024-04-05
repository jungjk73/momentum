
const clock = document.querySelector("#clock");

function setClock()
{
    const today = new Date();
    const hour = today.getHours().toString().padStart(2,"0");
    const min = today.getMinutes().toString().padStart(2,"0");
    const sec = today.getSeconds().toString().padStart(2,"0");
    
    clock.innerText = `${hour}:${min}:${sec}`;
}

setClock();
setInterval(setClock, 1000);