let moves = 10;
let rock =document.getElementById("rock")
let scissor=document.getElementById("scissor")
let paper=document.getElementById("paper")
let movesleft=document.querySelector(".move")

//computer
let computer_option=["Rock","Scissor","Paper"]
let player_option=[rock,scissor,paper] //connect with user button , so u can get innerText from btns
//user
var buttons=document.getElementsByTagName("button")
//
let com_score=0
let ply_score=0
//for game over
function gameover(){
	player_option.forEach((option)=>
	{
		option.addEventListener("click",()=>{
			movesleft.style.display="none"
			alert("You have no move")
	})

	document.getElementById("other").style.display= "none"
	if(com_score>ply_score){
	document.getElementById("total_result").innerHTML="Computer Won!"
	document.getElementById("single_result").innerHTML = "Congrate!!"
	}
	else if(com_score<ply_score){
	document.getElementById("total_result").innerHTML="Player Won!"
	document.getElementById("single_result").innerHTML = "Congrate!!"
	}
	else{
	document.getElementById("total_result").innerHTML="Same Match!"
	document.getElementById("single_result").innerHTML = "Play Again?"
}
		
	})

}
//Game start
function start(){
	//adding event listener to every buttons
for (var i = 0; i < buttons.length; i++) {
    	buttons[i].onclick = function () {
    	console.log('Button ' + this.innerText + ' clicked')
    	moves--
		document.getElementById("move").innerHTML = moves

		//making random for computer
		let computerChoice=Math.floor(Math.random()*3)
		console.log("computer:",computer_option[computerChoice])
		let computer=computer_option[computerChoice]
		let player=this.innerText //get innerText from btn

		//choose winner

		if(player===computer){
		document.getElementById("total_result").innerHTML="Same!"
		document.getElementById("single_result").innerHTML = "Same"
		document.getElementById("other").innerHTML=`Computer: ${computer}`
		document.getElementById("computer_score").innerHTML= `${ply_score}`
		document.getElementById("computer_score").innerHTML= `${com_score}`	
		console.log("Same result")
		}
		else if(player==="Rock"){
		if(computer==="Paper"){
			document.getElementById("total_result").innerHTML="Computer Won!"
			document.getElementById("single_result").innerHTML = "Computer Won"
		document.getElementById("other").innerHTML=`Computer: ${computer}`
		com_score+=1
		document.getElementById("computer_score").innerHTML= `${com_score}`
		console.log("computer won")
		}
		else if(computer==="Scissor"){
			document.getElementById("total_result").innerHTML="Player Won!"
			document.getElementById("single_result").innerHTML = "Player Won"
		document.getElementById("other").innerHTML=`Computer: ${computer}`
		ply_score+=1
		document.getElementById("player_score").innerHTML= `${ply_score}`
		console.log("Player Won")
		}
		}
	// paper
	 if(player==="Paper"){
		if(computer==="Scissor"){
			document.getElementById("total_result").innerHTML="Computer Won!"
			document.getElementById("single_result").innerHTML = "Computer Won"
		document.getElementById("other").innerHTML=`Computer: ${computer}`
		com_score+=1
		document.getElementById("computer_score").innerHTML= `${com_score}`
		console.log("computer won")
		}
		else if(computer==="Rock"){
			document.getElementById("total_result").innerHTML="Player Won!"
			document.getElementById("single_result").innerHTML = "Player Won"
		document.getElementById("other").innerHTML=`Computer: ${computer}`
		ply_score+=1
		document.getElementById("player_score").innerHTML=`${ply_score}`
		console.log("Player Won")
		}
	}
	// scissor
	 if(player==="Scissor"){
		if(computer==="Rock"){
			document.getElementById("total_result").innerHTML="Computer Won!"
			document.getElementById("single_result").innerHTML = "Computer Won"
		document.getElementById("other").innerHTML=`Computer: ${computer}`
		com_score+=1
		document.getElementById("computer_score").innerHTML= `${com_score}`
		console.log("computer won")
		}
		else if(computer==="Paper"){
			document.getElementById("total_result").innerHTML="Player Won!"
			document.getElementById("single_result").innerHTML = "Player Won"
		document.getElementById("other").innerHTML=`Computer: ${computer}`
		ply_score+=1
		document.getElementById("player_score").innerHTML= `${ply_score}`
		console.log("Player Won")
		}
	}
	if(moves===0){
		console.log("over")
		gameover()
	}
	}
	
}
}
start()