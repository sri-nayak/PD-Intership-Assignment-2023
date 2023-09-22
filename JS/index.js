var url=`http://api.openweathermap.org/data/2.5/weather`
var key='8c41ffef132b3af1a9f444d767a390c5'
//?q=delhi&appid=8c41ffef132b3af1a9f444d767a390c5`
async function weather() {
    let temp;
    let search=document.getElementById("search-box").value.toString().toLowerCase()
    let weather=document.getElementById("weather-detail")
    console.log(search);
    let loc=document.getElementById("Location")
    if (search.length==0) {
        loc.innerHTML="Enter a location"
        loc.style.color='red'
        loc.style.visibility='visible'   
    } else {
        let response=await getData(search)
        temp=response.main.temp
        console.log(typeof(temp));
        loc.style.visibility='visible'
        weather.style.visibility='visible'
        loc.innerHTML=search
        weather.innerHTML=`${temp}\u00B0k/${Number((temp-273).toFixed(1))}\u00B0C`
        console.log(response.main.temp.toString()+"/"+parseInt(response.main.temp)-273.15);
    }  
}
async function getData(location) {
    var result=await fetch(url+`?q=${location}&appid=${key}`)
    return result.json()
}