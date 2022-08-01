

// Variables
let mode = document.getElementById("mode");
let mode2 = document.getElementById("mode2");
const liList = document.getElementsByClassName("daynight");
let modeFollow = document.getElementById("modefollow");


// Initial view 
//mode2.style.display = "none"



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

if (modeFollow=0) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = "black"
    mode2.style.display = "";
    mode.style.display = "none";
    blackNite();
} else if (modeFollow=1) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = "white"
    mode2.style.display = "none";
    mode.style.display = "";
    whiteDay();
}



// Day/Night change on button click
mode.onclick = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = "black"
    mode2.style.display = "";
    mode.style.display = "none";
    blackNite();
    modeFollow = 0;

}

mode2.onclick = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = "white"
    mode2.style.display = "none";
    mode.style.display = "";
    whiteDay();
    modeFollow = 1;
}


