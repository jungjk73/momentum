const WEATHER_API_KEY = "b746c535f4372f9070be31a29b7d233e";

function onGeoOk(position)
{
    console.log(position);
    console.log(`latitude : ${position.coords.latitude}`);
    console.log(`longitude : ${position.coords.longitude}`);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    console.log(url);

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.name,data.weather[0].main);
            const citySpan = document.querySelector("#weather span:first-child");
            const weatherSpan = document.querySelector("#weather span:last-child");
            
            citySpan.innerText = `${data.name}`;
            weatherSpan.innerText = `: ${data.weather[0].main}`;
            
        });   
    
}
function onGeoError()
{
    alert('Can not find you.');
}