let array=[]
let input=""
let score=0
let box=["apple","mango","banana","watermelon","papaya","strawberry","pear","plum","cherry","peach","lemon","avocado","coconut","orange","pineapple","grapes","fig","tamarind","jackfruit"]
let answer=""


 function start(){

array.length=0
score=0
let index=Math.floor(Math.random()*20)
console.log("answer: ",box[index])
answer=box[index]
console.log(answer[0])
document.getElementById("firstWord").innerHTML=answer[0].toUpperCase()
document.getElementById("lastWord").innerHTML=answer[answer.length-1].toUpperCase()
let blankNo= answer.slice(1,answer.length-1)
let blank=""
for(let i=0;i<blankNo.length;i++){
	blank+=" _ "

}
document.getElementById("blank").innerHTML=blank
}

//
function word(w){
	console.log(w.value)
	array.push(w.value)
	document.getElementById("ans").innerHTML=array.join("")
	input=array.join("")
}
//
function check(){
	console.log("user:",input)
	if(input===answer.slice(1,answer.length-1)){
		score+=2
		console.log("score: ",score)
		let li=document.createElement("li")
		document.getElementById("uL").appendChild(li)
		li.innerHTML=`${answer} - Score: ${score}`
		document.getElementById("ans").innerHTML=""
		array.length=0
		start()

	}
	else{
		document.getElementById("endResult").innerHTML=`Sorry, Game Over! Total Scores: ${score}.
		Answer is : ${answer}`
	}
}

function del(){
	array.length=0
	document.getElementById("ans").innerHTML=""
}