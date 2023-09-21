var client_id = 'e0ed96518dc04c7c90141cb4b87c70f7';
var client_secret='cb05a583cb274e4e942f42ec447a6c60'
var artistList=['4YRxDV8wJFPHPTeXepOstw','0TnOYISbd1XYRBk9myaseg','1mUl05hT77FrwVFW51wOlr','0xWGBvlwCBHAgXyR7TmPwp','2CIMQHirSU0MQqyYHq0eOx','57dN52uHvrHOxijzpIgu3E','1vCWHaC5f2uS3yhpwWbIA6','7o7doCwqft91WC690aglWC']


async function logIn() {
  var cred=btoa(`${client_id}:${client_secret}`)
  let data=await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Authorization': `Basic ${cred}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
});
 var dat=await data.json()
  return dat.access_token;
}
var token=logIn()
const url = `https://api.spotify.com/v1/artists?ids=${artistList}`


async function getData(){
    try{
      const request = new Request(
        url,{
            headers:{
                'Authorization': `Bearer ${await token}`
            }
        },'GET')
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
    let doc=document.getElementById("container")
    const data=num
   for(let i in num){
    doc.insertAdjacentHTML('beforeend',
    `<div class="card">
      <div class="main">
        <div class="image">
           <img
            src=${num[i].images[0].url}
            alt="Image of Artist"
          />
        </div>
      <div class="body">
        <div class=" paragraph">
          <h1>${num[i].name}</h1><br />
          <p>Follower: ${num[i].followers.total}</p><br />
          <p>Popularity: ${num[i].popularity}</p><br />
          <p>Music Kind:${num[i].genres?.find(element => {return element})}
          </p><br />
        </div>
      </div>
      </div>
    </div>`)
    // document.getElementsByClassName("card").style.backgroundImage=`url(${num[i].images[0].url})`
  }
}

