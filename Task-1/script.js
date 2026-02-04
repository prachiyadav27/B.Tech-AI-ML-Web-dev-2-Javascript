const profile = document.getElementById
("profile");

profile.style.backgroundColor="pink";
profile.style.padding = "15px";
profile.style.textAlign = "center";

// task2

const highlight = document.getElementsByClassName("important");
console.log(highlight)

for(let i=0;i<highlight.length;i++){
    highlight[i].style.color = "red"
}

for(let i = 0;i<highlight.length;i++){
    highlight[i].style.fontSize = "30px";
}
console.log(highlight.length)

// task 3

const paragraphs = document.getElementsByTagName("p");

// Loop through all paragraphs
for (let i = 0; i < paragraphs.length; i++) {
  if (i % 2 === 0) {
    // Even index paragraphs (0, 2, 4...)
    paragraphs[i].style.color = "blue";
  } else {
    // Odd index paragraphs (1, 3, 5...)
    paragraphs[i].style.color = "green";
  }
}

// Make the last paragraph bold
paragraphs[paragraphs.length - 1].style.fontWeight = "bold";

// task4
const firstBox = document.querySelectorAll(".box");
for(let i=0;i<firstBox.length;i++){
  firstBox.style.backgroundColor = "lighblue";

}

firstBox.style.textContent = "i am first box";

// task 5
const section=document.getElementById("content");
const task5=document.querySelectorAll("p");

for(let i = 0;i<task5.length;i++){
  task5[i].style.color="purple"
}

// task 6
// Select all elements with class "card"
const cards = document.querySelectorAll(".card");

// Apply styles to each card
cards.forEach(card => {
  card.style.border = "2px solid black";
  card.style.padding = "10px";
  card.style.borderRadius = "10px"; // corner
  card.style.margin = "10px";
});















