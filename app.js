// //to do app
// let todo = [];

// let req = prompt("please enter your req");

// while(true) {
//     if(req == "quit") {
//         console.log("qeutting app");
//         break;
//     }

//     if(req == "list") {
//         console.log("------------------");
//         for(let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("-----------------");
//     } else if (req == "add") {
//         let task = prompt("Enter your task to add");
//         todo.push(task);
//         console.log("task added");

//     } else if(req == "delete") {
//         let idx = prompt("Enter index no of task to delete");
//         todo.splice(idx,1);
//         console.log("task removed");
//     }

//      req = prompt("please enter your req");
// }

// let fac = 1;
// let n=3;    
// for(let i=n; i>=1; i--) {
//     fac = fac*i;

// }

// console.log(fac);

//guessing number



// let max = prompt("Enter max range");

// let rand = Math.floor(Math.random()*max)+1;

// let guess = prompt("Enter your guess");

// while(true) {
//     if(guess == "quit") {
//         console.log("you quit");
//         break;
//     }

//     if(guess == rand) {
//         console.log("Congratultions ! you won the random number was", rand);
//         break;
//     } else if(guess < rand) {
//         guess = prompt("Your guess is too small. please try again");
//     } else {
//         guess = prompt("Your guess is too large ! please try again");
//     }
// }


// let savu = "Saavvuugoluuumolu";

// function getUniqu(savu) {
//     let ans = "";

//     for(let i=0; i<savu.length; i++) {
//         let currele = savu[i];
//         if(ans.indexOf(currele) == -1) {
//             ans += savu[i];
//         }

//     }

//     return ans;
// }

// console.log(getUniqu(savu));

// let arr = ["india", "australiya", "america", "china"];
// let n = prompt("Enter how much country you want to add");
// for(let i=0; i<n; i++) {
//     arr[i] = prompt("enter country name");
// }



// function getLong(arr) {
//     let max=0;
//     let ansStr = arr[0];
//     for(let i=0; i<arr.length; i++) {
//         if(max<arr[i].length) {
//             max=arr[i].length;
//             ansStr = arr[i];
//         }
//     }
//    return ansStr;
// }

// console.log(getLong(arr));

// let str = "savitri";

// let count = 0;
// for(let i=0; i<str.length; i++) {
//     if(str[i]=='a'|| str[i] == 'e'||str[i] == 'i' ||str[i] == 'o' || str[i] == 'u') {
//         count++;
//     }
// }

// console.log(count);

// const student = {
//     name: "savitri",
//     age: 19,
//     prop: this,
//     getname: function() {
//         console.log(this);
//         return this.name;
//     },

//     getroll: ()=> {
//         console.log(this);
//         return this.mark;
//     },

//     getInfo1: function() {
//         setTimeout(()=>{
//             console.log(this);
//         }, 2000);
//     },

//     getInfo2: function() {
//         setTimeout(function() {
//             console.log(this)
//         },2000);
//     }
// }

// student.getInfo1();
// student.getInfo2();
// let sum = 0;
// let arr = [1,2,3];
// let av = (arr)=> {

//     for(let i=0; i<arr.length; i++) {
//         sum+=arr[i];
//     }

//     console.log(`avj is ${sum/arr.length}`);
// }

// av(arr);
// let num = 2;

// const even = (n)=> n%2==0;

// console.log(even(num));



// let print = function (each) {
//     console.log(each);
// }

// arr.forEach(print);

// arr.forEach(function(each) {
//     console.log(each);
// })

// let num = arr.map((el)=> {
//     return el/2;
// })

// console.log(num);

// let even = arr.filter((ele) => (ele%2==0));

// console.log(even);

// function sum(...arg) {
//     return arg.reduce((sum,ele) => sum + ele);
// } 

// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
// }

// let mergeObject  = (obj1, obj2)=> {
//     return newo = {...obj1, ...obj2};

// }



//    console.log(mergeObject({a:"savu", b:19}, {c:"momo", d:40}).a);  

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked");
// };

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();

//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

// })

// function getRandomColor () {
//     let red = Math.floor(Math.random() * 255);

//     let green = Math.floor(Math.random() * 255);
//     let blue =  Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // let user = document.querySelector('#user');
//     // let pass = document.querySelector('#pass');
//     // let user = this.elements[0];
//     // let pass = this.elements[1];

//     // console.log(user.value);
//     // console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`)

// });


// let user = document.querySelector('#user');


// user.addEventListener("change", function(event) {
//     event.preventDefault();
//     console.log("value changed");
//     console.log("final value = ", this.value);
// })


// let div = document.querySelector("div");

// div.addEventListener("mouseout", function() {
//     console.log("mouse is outed");
//     let div = document.querySelector("div");
//     div.style.backgroundColor = "blue";
//     div.innerText = "mouse is outed";
// })

// div.addEventListener("mouseover", function() {
//     console.log("mouse is enetered");
//     let div = document.querySelector("div");
//     div.style.backgroundColor = "lightgreen";
// })

// let input = document.querySelector("input");

// // input.addEventListener("keypress", function() {
// //     console.log("key was pressed");
// //     input.style.backgroundColor = "lightblue";
// // })

// input.addEventListener("keydown", function() {
//     console.log("key was pressed");
//     input.style.backgroundColor = "darkgreen"
// })


// Add a load event listener to the window

//___________________________________________________________________________
// let gameSeq = [];
// let userSeq = [];
// let btns = ["yellow", "red", "purple", "green"]

// let started = false;
// let level = 0;
// let h2 = document.querySelector("h2");

// //step 1 start
// document.addEventListener("keypress", function () {
//   if (started == false) {
//     console.log("game started");
//     started = true;
//     levelUp();
//   }
// })

// //step 2 flash
// function levelUp() {
//   userSeq = [];
//   level++;
//   h2.innerText = `level ${level}`;

//   let rndIndx = Math.floor(Math.random() * 4);
//   let randomColor = btns[rndIndx];
//   let randBtn = document.querySelector(`.${randomColor}`);
//   gameSeq.push(randomColor);
//   btnflash(randBtn);
//   console.log(gameSeq);
// }


// function btnflash(btn) {
//   btn.classList.add("flash");
//   setTimeout(function () {
//     btn.classList.remove("flash")
//   }, 150)
// }

// function checkAns(idx) {
//   // console.log("current level", level);
 
//   if(userSeq[idx] == gameSeq[idx]) {
//      if(userSeq.length == gameSeq.length) {
//       setTimeout(levelUp, 1000);
     
//      }
//   } else {
//     h2.innerHTML = `Game over!your score is<b> ${level} <b/>press any key to start game`;
//     reset();
//     document.querySelector("body").style.backgroundColor = "red";
//     setTimeout(function() {
//       document.querySelector("body").style.backgroundColor = "white";
//     }, 150);
//   }
// }

// function btnpress() {
//   let btn = this;
  
//   btnflash(btn);
//   userColor = btn.getAttribute("id");
//   userSeq.push(userColor);

//   checkAns(userSeq.length-1);
// }

// let allBtn = document.querySelectorAll(".btn");
// for (let btn of allBtn) {
//   btn.addEventListener("click", btnpress);
// }

// function reset() {
//   started = false;
//   gameSeq = [];
//   userSeq = [];
//   level = 0;
// }

//step 1 start game by pressing any key on keyboard
//step 2 level up and flas button
//step 3 button pressed by user detect both buttons user and random by game check both the same or not if same than level up otherwise game over in which set default

let userSeq = [];
let gameSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let h2 = document.querySelector("h2");
let started = false;
let level  = 0;

document.addEventListener("keypress" , function() {
  if(started == false) {
    started = true;
    levelup();
  }
 
})

 function levelup() {
  level++;
  h2.innerText = `level ${level}`;
  userSeq = [];
  //random button
  let randIndx = Math.floor(Math.random()*3);
  let randcolor = btns[randIndx];
  let randBtn = document.querySelector(`.${randcolor}`);

  butnflash(randBtn);
  gameSeq.push(randcolor);
  console.log(gameSeq);
 }

function butnflash(btn) {
   btn.classList.add("flash");
   setTimeout(function() {
    btn.classList.remove("flash");
   }, 250);

   
}

function btnpress() {
  let btn = this;
  console.log(btn);
  butnflash(btn);

  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  console.log(userSeq);

  checkans(userSeq.length-1);
  
}

let btnall = document.querySelectorAll(".btn");

for(let btn of btnall) {
  btn.addEventListener("click", btnpress);
}

function checkans(idx) {
  if(userSeq[idx] == gameSeq[idx]) {
         if(userSeq.length == gameSeq.length) {
          setTimeout(levelup, 1000);
         
         }
      } else {
        h2.innerHTML = `Game over! your score is<b> ${level} <b/>press any key to start game`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
          document.querySelector("body").style.backgroundColor = "white";
        }, 150);
      }
}

function reset() {
   userSeq = [];
   gameSeq = [];
   level = 0;
   started = false;
}