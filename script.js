
<script>


const data={
3:{day:"Rose Day",emoji:"🌹",msg:"Happy Rose Day!"},
4:{day:"Propose Day",emoji:"💍",msg:"Will you be mine forever?"},
5:{day:"Chocolate Day",emoji:"🍫",msg:"Life is sweeter with you!"},
6:{day:"Teddy Day",emoji:"🧸",msg:"A teddy hug for you!"},
7:{day:"Promise Day",emoji:"🤝",msg:"I promise to always stay."},
8:{day:"Hug Day",emoji:"🤗",msg:"Sending warm hugs!"},
9:{day:"Kiss Day",emoji:"💋",msg:"A kiss for my love!"},
10:{day:"Valentine's Day",emoji:"❤️",msg:"You are my forever!"}
};

const bgImages={
 3:"seven.jpg",
 4:"eight.jpg",
 5:"nine.jpg",
 6:"ten.jpg",
 7:"eleven.jpg",
 8:"twelve.jpg",
 9:"thirteen.jpg",
 10:"forteen.jpg"
};

const bgCardImages = {
  3:"rose.jpg",
 4:"propose.jpg",
 5:"chocolate.jpg",
 6:"teddy.jpg",
 7:"promise.jpg",
 8:"hug.jpg",
 9:"kiss.jpg",
 10:"valentine.jpg"
};


function updateBackground(date){
 document.body.style.backgroundImage =
   `url('${bgImages[date]}')`;
}


let today=new Date();
let month=today.getMonth()+1;
let realDate=today.getDate();
let viewDate=(month===2 && realDate>=3 && realDate<=10)?realDate:3;

/* Show Message */
function show(date){
 if(month===2 && data[date]){
	document.querySelector(".card").style.backgroundImage =`url('${bgCardImages[date]}')`;
   dayName.innerText=data[date].day;
   emoji.innerText=data[date].emoji;
   wish.innerText=data[date].msg;
   updateBackground(date);
   

 }
 countdown.style.display="none";
 updateCalendar();
 checkSurprise();
}


/* Previous */
function previousDay(){
 if(viewDate>3){
   viewDate--;
   show(viewDate);
 }
}

/* Next */
function nextDay(){
 if(viewDate<realDate){
   viewDate++;
   show(viewDate);
 }else{
   showCountdown();
 }
}

/* Countdown */
let timer=null;
function showCountdown(){
 countdown.style.display="block";
 if(timer) return;

 timer=setInterval(()=>{
  const now=new Date();
  const midnight=new Date();
  midnight.setHours(24,0,0,0);
  const diff=midnight-now;

  const h=Math.floor(diff/(1000*60*60));
  const m=Math.floor((diff%(1000*60*60))/(1000*60));
  const s=Math.floor((diff%(1000*60))/1000);

  countdown.innerText=`Next day unlocks in ${h}h ${m}m ${s}s`;
  if(diff<=0) location.reload();
 },1000);
}

/* Calendar Build */
function updateCalendar(){
 const cal=document.getElementById("calendar");
 cal.innerHTML="";
 for(let d=3;d<=10;d++){
   const box=document.createElement("div");
   box.className="day-box";
   box.innerText=d + " Feb";

   if(d===viewDate) box.classList.add("active");

   if(d>realDate){
     box.classList.add("locked");
   }else{
     box.onclick=()=>{viewDate=d;show(d);}
   }
   cal.appendChild(box);
 }
}

/* Surprise & Confetti */
function checkSurprise(){
 if(month===2 && viewDate===14){
   document.getElementById("surprise").style.display="flex";
   heartConfetti();
   confettiBlast();
 }
}

function closeSurprise(){
 document.getElementById("surprise").style.display="none";
}

function heartConfetti(){
 for(let i=0;i<30;i++){
  const h=document.createElement("div");
  h.innerHTML="💖";
  h.style.position="fixed";
  h.style.left=Math.random()*100+"vw";
  h.style.top="-20px";
  h.style.fontSize=(20+Math.random()*20)+"px";
  h.style.animation="floatUp 3s linear";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),3000);
 }
}

function confettiBlast(){
 const colors=["#ff4d6d","#ffd166","#06d6a0","#118ab2"];
 for(let i=0;i<50;i++){
  const c=document.createElement("div");
  c.className="confetti";
  c.style.left=Math.random()*100+"vw";
  c.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),4000);
 }
}

/* Init */
if(month===2){
 show(viewDate);
}else{
 dayName.innerText="Not Valentine's Week";
 wish.innerText="Come back in February!";
}

/* Floating Hearts */
setInterval(()=>{
 const h=document.createElement("div");
 h.className="heart-float";
 h.innerHTML="❤️";
 h.style.left=Math.random()*100+"vw";
 h.style.fontSize=(15+Math.random()*20)+"px";
 h.style.animationDuration=(4+Math.random()*4)+"s";
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},400);
</script>
