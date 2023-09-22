var url=`http://api.openweathermap.org/data/2.5/weather`
var key='8c41ffef132b3af1a9f444d767a390c5'
//?q=delhi&appid=8c41ffef132b3af1a9f444d767a390c5`
async function weather() {
    var loc='delhi'
    var result=await getData(loc)
    console.log(result.tempe);
    // console.log(result.mai)
}
async function getData(location) {
    var data={status:null,error:null,tempe:null}
    try{
        var result=await fetch(url+`?q=${location}&appid=${key}`)
        data.status=result.status
        data.error=null
        data.tempe=await fetch(url+`?q=${location}&appid=${key}`)
        return data
    }catch(error){
        data.error=result.error
        console.log('Server error')
    }
}
weather()