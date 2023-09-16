const token = 'BQCpffZgHxLdzpnWeR6lt5bnV8iwxBypqgyZ37dvkOMaIiNRylhZeBsIANNfkbkAl0-PN5qPd7jPdZlC-f6lC0QYMF60IYdUEwRqcan9nuM7xE6TtuPRkkbRTdhAi0XkxRVt5oTGzzROrwSp13WYk2O2uhZBXXveH5D8QQr_1Cw6BkfvfoO4plqUNSGN_ija9gRCjuggjUDyR8q8I7BhqRoauSLzMActwT7FOeOrZQO6F183PUvtxagpVJSwtiBSHxlmbxt-jSHMvi3KIYBxZyKg';
var artistList=['4YRxDV8wJFPHPTeXepOstw','0TnOYISbd1XYRBk9myaseg','1mUl05hT77FrwVFW51wOlr','0xWGBvlwCBHAgXyR7TmPwp','2CIMQHirSU0MQqyYHq0eOx','57dN52uHvrHOxijzpIgu3E','1vCWHaC5f2uS3yhpwWbIA6','7o7doCwqft91WC690aglWC']
const url = `https://api.spotify.com/v1/artists?ids=${artistList}`
const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    },'GET')

async function getData(){
    try{
        const response = await fetch(request) 
        const data = await response.json()
        if(response.status == 200) {
            renderData(data.artists)
        } else {
            console.log('Server Error : ', data.error.message)
        }
    } catch (error) {
        console.log('ERROR : ', error)
    }
}
getData()
  function renderData(num){
    let doc=document.getElementById("name")
    const data=num
   for(let i in num){
    console.log("times")
    doc.insertAdjacentHTML('beforeend',`<div class="container"><div class="main">
    <div class="head">
      <div class="row">
        <div class="col-md-6 image">
          <img
            src=${num[i].images[0].url}
            alt="Image of Artist"
          />
        </div>
        <div class="col-md-6 paragraph">
          <p>Name: ${num[i].name}</p><br />
          <p>Follower: ${num[i].followers.total}</p><br />
          <p>Popularity: ${num[i].popularity}</p><br />
          <p>Music Kind:${num[i].genres?.find(element => {return element})}
          </p><br />
        </div>
      </div></div>`)
    console.log(num[i])
   }
//    for()
//    doc.innerHTML=temp;

}
renderData()

