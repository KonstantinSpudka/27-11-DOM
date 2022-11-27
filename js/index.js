const doc = document;

console.dir(doc);

const docHead = document.head;
console.dir(docHead);

const docBody = document.body;
console.dir(docBody);

const divDoc = document.body.firstChild;

const divRoot = document.getElementById("root");

const divs = document.getElementsByTagName("div");

// for (const el of dirs) {
//   console.dir(el);
// }

// const [div1, div2, div3] = document.getElementsByTagName("div");

// const contentClassDiv = document.getElementsByClassName("content");

const divRoot2 = document.querySelector("#root");
const divs2 = document.querySelectorAll("div");

//  Отримати список елементів з класом content
const contentClassDiv2 = document.querySelectorAll("body > .content"); // (body >) - нащадки body

// Обробка подій -------------------------------------

const [btn1, btn2] = document.querySelectorAll("button");

btn1.onclick = function () {
  console.log("Click btn1");
};

// btn1.onclick = null;

const btn2ClickHander = () => {
  console.log("The btn2 was Clicked");
};

btn2.addEventListener("click", () => {
  console.log("Click btn2");
});

btn2.removeEventListener("click", () => {
  console.log("Click btn2");
});

//При натисканні на <div id="root">Привіт</div> вивести алертом привітання
// const rootId = document.querySelectorAll("div");

// divRoot.onclick = function () {
//   alert("Hello");
// };
// АБО
// divRoot.onmouseover = function(){
//   alert('Hello');
// }

// Атрибути

console.log("divRoot.title :>> ", divRoot.title);

divRoot.title = "new title";
// console.log("divRoot.style :>> ", divRoot.style);
divRoot.style.color = "green";
divRoot.style.backgroundColor = "red";
// divRoot.hidden = true; // зникло

console.log("divRoot.getAttribute :>> ", divRoot.getAttribute("title"));

divRoot.setAttribute("title", "new title 2");
divRoot.setAttribute("style", "color: blue; font-size: 30px");
divRoot.setAttribute("hidden", "hidden"); // Зникло
