var url=`http://api.openweathermap.org/data/2.5/weather`
var key='8c41ffef132b3af1a9f444d767a390c5'
//?q=delhi&appid=8c41ffef132b3af1a9f444d767a390c5`
async function weather() {
    let temp;
    let search=document.getElementById("search-box").value.toString().toLowerCase()
    let image=document.getElementById('weather-icon')
    let weather=document.getElementById("weather-detail")
    console.log(search);
    let loc=document.getElementById("Location")
    if (search.length==0) {
        loc.innerHTML="Enter a location"
        loc.style.color='red'
        loc.style.visibility='visible'
        weather.style.visibility='hidden'   
    } else {
        try{
            var response=await fetch(url+`?q=${search}&appid=${key}`)
                if (response.status==200) {
                    let result= await response.json()
                    console.log(result)
                    temp=result.main.temp
                    console.log(typeof(temp));
                    loc.style.color="black"
                    loc.style.visibility='visible'
                    weather.style.visibility='visible'
                    loc.innerHTML=search
                    weather.innerHTML=`${temp}\u00B0k/${Number((temp-273).toFixed(1))}\u00B0C`  
                    image.src = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`; 
                } else {
                    image.style.visibility="hidden"
                 weather.style.visibility='hidden'
                 loc.style.visibility='visible' 
                 loc.style.color="red"
                 loc.innerHTML=`Weather detail for specified place couldn't find`
                 
                } 
        }catch(error){
            image.style.visibility="hidden"
            weather.style.visibility='visible'
            loc.innerHTML='Internal Server Error'
            console.log('Server error')
        }
        // let response=await getData(search)
        // console.log(response.error)
    }  
}