const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const infoMsg = document.querySelector("#info-msg");
const loginForm = document.querySelector("#login-form");
const loginDiv = document.querySelector("#login-div");
const mainDiv = document.querySelector("#main-div");
const link = document.querySelector("a");
const USER_NAME_KEY = "userName";
const HIDDEN_CLASS_NAME = "hidden";

loginForm.addEventListener("submit",(event)=>{
    //event.preventDefault();
    const userName = loginInput.value;

    //event.currentTarget.classList.add(HIDDEN_CLASS_NAME);
    localStorage.setItem(USER_NAME_KEY,userName);
});


const savedUserName = localStorage.getItem(USER_NAME_KEY);
if(savedUserName === null){
    loginDiv.classList.remove(HIDDEN_CLASS_NAME);
    mainDiv.classList.add(HIDDEN_CLASS_NAME);
} 
else {
    //날씨 표시
    navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

    loginDiv.classList.add(HIDDEN_CLASS_NAME);
    mainDiv.classList.remove(HIDDEN_CLASS_NAME);
    infoMsg.innerText = `Hi~ ${savedUserName}. Have a good day!`;
}

console.dir(loginInput);
console.dir(loginButton);
console.dir(infoMsg);
console.dir(loginForm);


this.addEventListener("load",(event)=>{
    console.log("document load");
});




