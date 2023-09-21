var client_id = 'e0ed96518dc04c7c90141cb4b87c70f7';
var client_secret='cb05a583cb274e4e942f42ec447a6c60'

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
 console.log(dat);
 console.log(dat.access_token);
  return dat;
}
logIn()