let box1= document.getElementById('colr1')
box1.addEventListener("click",()=>{
	document.body.style.backgroundColor = "#FDEB2E"
	document.querySelector("h1").style.color= "black"
	document.querySelector("h4").style.color= "black"
	document.querySelector("h3").style.color="black"

	console.log("changed yellow")
})
document.getElementById('colr2').addEventListener("click",()=>{
	document.body.style.backgroundColor = "#959494"
	document.querySelector("h1").style.color= "white"
	document.querySelector("h4").style.color= "white"
	document.querySelector("h3").style.color="white"

	console.log("changed black")
})
document.getElementById('colr3').addEventListener("click",()=>{
	document.body.style.backgroundColor = " #F99878"
	document.querySelector("h1").style.color= "black"
	document.querySelector("h4").style.color= "black"

	console.log("changed purple")
})
document.getElementById('colr4').addEventListener("click",()=>{
	document.body.style.backgroundColor = "#E6E5E4"
	document.querySelector("h1").style.color= "black"
	document.querySelector("h4").style.color= "black"
	document.querySelector("h3").style.color="black"
	console.log("changed white")
})
// creating object
var quotes= {
	"No0": "Don't let yesterday take up too much of today.",
	"No1": "All our dreams can come true, if we have the courage to pursue them",
	"No2": "Hey, you are doing great! Keep going!!!",
	"No3": "Never give up. Great things take time",
	"No4": "You always pass failure on your way to success.",
	"No5": "Don't be afraid of the dark. Shine...",
	"No6": "Don't be too hard on yourself"
}
function randomQuotes(){
	
	let getkey = Object.keys(quotes)
	let getindex = getkey[Math.floor((Math.random()*getkey.length))]
	document.getElementById("quote").innerHTML = `" ${quotes[getindex]} "`
	console.log(quotes[getindex])
}
randomQuotes()
//date
let date= new Date()
let time = [date.getMonth(),date.getDay(),date.getFullYear()].join("-")
document.getElementById("date").innerHTML = time