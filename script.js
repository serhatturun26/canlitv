
const USER="admin", PASS="1234";

function login(){
if(user.value===USER && pass.value===PASS){
loginBox.style.display="none";
app.style.display="block";
}else alert("Hatalı giriş");
}

function logout(){location.reload();}

function play(url){player.src=url;player.play();}

function loadM3U(input){
const file=input.files[0];
const r=new FileReader();
r.onload=e=>parseM3U(e.target.result);
r.readAsText(file);
}

function parseM3U(t){
channels.innerHTML="";
let name="";
t.split("\n").forEach(l=>{
if(l.startsWith("#EXTINF")) name=l.split(",")[1];
if(l.startsWith("http")){
let b=document.createElement("button");
b.textContent=name;
b.onclick=()=>play(l);
channels.appendChild(b);
}
});
}
