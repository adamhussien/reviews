const reviews = [

  {
    id: 1,
    name: "emily",
    job: "backend developer",
    img: "img/emily.jpg",
    text: "Ld magni ipsam sit tempore harum, nihil quod vitae aliquid repellendus",
  },
  {
    id: 2,
    name: "matt",
    job: "game developer",
    text: "Lorem ipsum repellendus",
    img: "img/matt.jpg",
  },
  {
    id: 3,
    name: "alex",
    job: "ux desiginer",
    text: "Lorem ipsum repellendus",
    img: "img/alex.jpg",
  },
]
const image = document.querySelector(".person-img")
const author = document.querySelector(".author")
const job = document.querySelector(".job")
const info = document.querySelector(".info")
const prvBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".randombtn")
let currentitem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showperson()
})
function showperson() {
 const item = reviews[currentitem]
  image.src  = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener("click",()=>{
currentitem++
if(currentitem > reviews.length - 1)
currentitem = 0
showperson()
})

nextBtn.addEventListener("click",()=>{
  currentitem--
  if(currentitem > 0)
  currentitem = 0
  showperson()
  })

randomBtn.addEventListener("click",() => {
currentitem = Math.floor(Math.random() * reviews.length)
showperson(currentitem)
})