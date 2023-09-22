var url=`http://api.openweathermap.org/data/2.5/weather`
var key='8c41ffef132b3af1a9f444d767a390c5'
//?q=delhi&appid=8c41ffef132b3af1a9f444d767a390c5`
async function weather() {
    var loc='delhi'
    var result=await getData(loc)
    console.log(result.status);
    console.log(result.main.temp)
}
async function getData(location) {
    var result=await fetch(url+`?q=${location}&appid=${key}`)
    console.log(result.status);
    return result.json()
}
weather()