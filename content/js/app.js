

let inputElem=document.querySelector('input')
let cityElem=document.querySelector('.city')    
let dateElem=document.querySelector('.date')
let tempElem=document.querySelector('.temp')
let weatherElem=document.querySelector('.weather')
let placeElem=document.querySelector('.hi-low')

let apiData={
    url:'https://api.openweathermap.org/data/2.5/weather?q=',
    key:'85c8780520b9bbd626b2dbb083c84155'
}

function fetchData() {
    let countryvalue=inputElem.value
    fetch(`${apiData.url}${countryvalue}&appid=${apiData.key}`)
    .then(res=>res.json())
    .then(data=>{
        showData(data)
     console.log(data);
     
    })
    
}
function showData(data) {
    
    cityElem.textContent=`${data.name},${data.sys.country}`;
    tempElem.textContent=`${Math.floor(data.main.temp - 273.15)}C°`
    weatherElem.textContent=`${data.weather[0].main}`
    placeElem.textContent=`${Math.floor(data.main.temp_min- 273.15)}°C / ${Math.floor(data.main.temp_max- 273.15)}°C`
  dateElem.innerHTML=showData2()

}
function showData2() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now=new Date() 
    let year=now.getFullYear()
    let day=days[now.getDay()]
    let month=months[now.getMonth()]
    let date=now.getDate()
    
    return `${day} ${date} ${month} ${year}`
      
}
inputElem.addEventListener('keydown',(event)=>{

   if (event.keyCode===13) {
    fetchData()
   }
    
})