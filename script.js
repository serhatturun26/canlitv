
const USER="admin",PASS="1234";
let allChannels=[];

function login(){
if(user.value===USER && pass.value===PASS){
login.style.display="none";
app.style.display="block";
}else alert("Hatalı");
}

function toggleTheme(){
document.body.classList.toggle("light");
}

function play(u){player.src=u;player.play();}

function loadFromURL(){
fetch(m3uurl.value).then(r=>r.text()).then(parseM3U);
}

function parseM3U(t){
channels.innerHTML="";
allChannels=[];
let name="";
t.split("\n").forEach(l=>{
if(l.startsWith("#EXTINF")) name=l.split(",")[1];
if(l.startsWith("http")){
allChannels.push({name,url:l});
}
});
render(allChannels);
}

function render(list){
channels.innerHTML="";
list.forEach(c=>{
let b=document.createElement("button");
b.textContent=c.name;
b.onclick=()=>play(c.url);
channels.appendChild(b);
});
}

function searchChannel(){
const q=search.value.toLowerCase();
render(allChannels.filter(c=>c.name.toLowerCase().includes(q)));
}
