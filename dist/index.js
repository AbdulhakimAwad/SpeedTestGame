//create levels
let lvl={
  "easy":6,
  "normal":4,
  "hard":3
}

//create the array of words
let words=[
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "HTTP",
  "HTTPS",
  "LocalStorage",
  "SetTimeOut",
  "Git",
  "Github",
  "PHP",
  "Csharp",
  "Java",
  "Pascal",
  "MachineLearning",
  "Angular",
  "React",
  "Vue",
  "Flutter",
  "Spring",
  "Asp.Net",
  "SqlServer",
  "MongoDb",
  "Django",
  "SqlLite",
  "Mysql",
  "Laravel",
  "CommendLine",
  "Linux",
  "Unix",
  "MacPc",
  "BubbleSort",
  "QuickSort",
  "MergeSort",
  "SelectionSort",
  "InsertionSort",
  "HeapSort",
  "InOrderTraversal",
  "PostOrderTraversal",
  "PreOrderTraversal",
  "LinearSearch",
  "BinarySearch",
  "InterpolationSearch",
  "AJAX",
  "JSON",
  "WebAPI",
  "Server",
  "DepthFirstSearch",
  "BreathFirstSearch",
  "UnitTesting",
  "Postfix",
  "Prefix",
  "OverLoading",
  "Overriding",
  "Polymorohism",
  "inhertance",
  "generics",
  "FeskaBarsa",
  "Cat",
  "Speed"
];
let length=words.length;
let startBtn=document.querySelector(".Game .start .start-btn");
let the_word=document.querySelector(".Game .container .the-word");
let input=document.querySelector(".Game .container .input");
let upcomming=document.querySelector(".Game .container .upcomming-words");
let finish=document.querySelector(".Game .container .finish");
let level=document.querySelector(".Game .container .message span.lvl");

//the level
let seconds=document.querySelector(".Game .container .message span.seconds");
seconds.innerHTML=6;
let btns=document.querySelectorAll(".Game .start .btns button");
let defaultlvl;
btns.forEach((btn)=>{
  btn.onclick=()=>{
    if(btn===btns[1]){
      document.querySelector(".Game .start span").innerHTML="easy";
      level.innerHTML="easy";
      defaultlvl=lvl["easy"];
      seconds.innerHTML=defaultlvl;
    }else if(btn===btns[2]){
      document.querySelector(".Game .start span").innerHTML="normal";
      level.innerHTML="normal";
      defaultlvl=lvl["normal"];
      seconds.innerHTML=defaultlvl;
    }else if(btn===btns[3]){
      document.querySelector(".Game .start span").innerHTML="hard";
      level.innerHTML="hard";
      defaultlvl=lvl["hard"];
      seconds.innerHTML=defaultlvl;
    }
  }
})



let time=document.querySelector(".Game .container .control .time span");
let score=document.querySelector(".Game .container .control .score .got");score.innerHTML=0 ;
let total=document.querySelector(".Game .container .control .score .total");total.innerHTML=words.length;



startBtn.onclick= function(){
  this.remove();
  document.querySelector(".Game .start").remove();
  input.focus();
  //start the game
  start();
}

function start(){
  
  if(words.length>0){
    //select random word
    let word=words[Math.floor(Math.random()*words.length)];
    
    //remove the word from array
    words.splice(words.indexOf(word),1);
    
    //add the word to the challenge
    the_word.innerHTML=word;

    //fill upcomming words by words
  if(upcomming.innerHTML==""){
    for(let i=0;i<words.length;i++){
      let upword=document.createElement("span");
      let text=document.createTextNode(words[i]);
      upword.appendChild(text);
      upcomming.appendChild(upword);
    }
  }
  }
  

  //start the time
  play();
}

function play(){
  //reset the Time
  time.innerHTML=defaultlvl;

  
  stratPlay=setInterval(()=>{
    time.innerHTML--;
    if(time.innerHTML==0){
      clearInterval(stratPlay);

      //in the easy & normal level
      if(defaultlvl===lvl["easy"]||defaultlvl===lvl["normal"]){
        if(input.value.toLocaleLowerCase()===the_word.innerHTML.toLocaleLowerCase()){
        score.innerHTML++;
        the_word.innerHTML="";
        upcomming.innerHTML="";
        input.value="";
        start();
        if(score.innerHTML==length){
          let good=document.createTextNode("You'r The Winner");
          finish.style.display="block";
          finish.style.color="green";
          finish.appendChild(good);
          upcomming.remove();
        }
      }
      else{
        let bad=document.createTextNode("Game Over");
        finish.style.display="block";
        finish.style.color="orangered";
        finish.appendChild(bad);
      }}

      //in the hard level
      if(defaultlvl===lvl["hard"]){
        if(input.value===the_word.innerHTML){
        score.innerHTML++;
        the_word.innerHTML="";
        upcomming.innerHTML="";
        input.value="";
        start();
        if(score.innerHTML==length){
          let good=document.createTextNode("You'r The Winner");
          finish.style.color="green";
          finish.appendChild(good);
          upcomming.remove();
        }
      }
      else{
        let bad=document.createTextNode("Game Over");
        finish.style.display="block";
        finish.style.color="orangered";
        finish.appendChild(bad);
      }}
    }
  },1000)
}
