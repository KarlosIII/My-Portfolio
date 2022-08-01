

// Variables
let modeFollow = 1;
let mode = document.getElementById("mode");
let mode2 = document.getElementById("mode2");
let whiteDog = document.getElementById("whitedog");
let blackDog = document.getElementById("blackdog");
let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");
let project3 = document.getElementById("project3");
let project4 = document.getElementById("project4");
let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");
let but4 = document.getElementById("but4");
let closeAll = document.getElementById("close");

const liList = document.getElementsByClassName("daynight");

//Display of current coding streak 
let start = 1653667200000;
let now = Date.now();
streak = Math.floor((now - start) / 8.64e7) + 1;
document.getElementById("streak").innerHTML = streak;




// Initial view 
mode2.style.display = "none"
blackDog.style.display = "none"
project1.style.display = "none"
project2.style.display = "none"
project3.style.display = "none"
project4.style.display = "none"


//Function to be use in event

const blackNite = () => {
  for (let i = 0; i < liList.length; i++) {
       liList[i].style.color = "black"
  }
}

const whiteDay = () => {
    for (let i = 0; i < liList.length; i++) {
        liList[i].style.color = "white"
    }
}  



// Day-Night change on button click
mode.onclick = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = "black"
    mode2.style.display = "";
    mode.style.display = "none";
    whiteDog.style.display = 'none'
    blackDog.style.display = ''
    blackNite();
    modeFollow = 0;
}

mode2.onclick = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = "white"
    mode2.style.display = "none";
    mode.style.display = "";
    whiteDog.style.display = ''
    blackDog.style.display = 'none'
    modeFollow = 1;
    whiteDay();
}
 // Projects section ->Hide/Show project

but1.onclick = () => {
   project1.style.display =""
   project2.style.display ="none"
   project3.style.display ="none"
   project4.style.display ="none"

}

but2.onclick = () => {
    project1.style.display ="none"
    project2.style.display =""
    project3.style.display ="none"
    project4.style.display ="none"
}

but3.onclick = () => {
    project1.style.display ="none"
    project2.style.display ="none"
    project3.style.display =""
    project4.style.display ="none"
}

but4.onclick = () => {
    project1.style.display ="none"
    project2.style.display ="none"
    project3.style.display ="none"
    project4.style.display =""
}

closeAll.onclick = () => {
    project1.style.display ="none"
    project2.style.display ="none"
    project3.style.display ="none"
    project4.style.display ="none"
}


 


