function runDice(){
	let decimal = Math.random()
	let num = decimal * 6
	let dice = Math.floor(num+1)
	return dice
	//console.log(dice)
}
function changeImg(a,b){
	if(a===1){
		document.getElementById("image"+b).setAttribute("src","one.jpg")
	}
	else if(a===2){
		document.getElementById("image"+b).setAttribute("src","two.jpg")
	}
	else if(a===3){
		document.getElementById("image"+b).setAttribute("src","three.jpg")
	}
	else if(a===4){
		document.getElementById("image"+b).setAttribute("src","four.jpg")
	}
	else if(a===5){
		document.getElementById("image"+b).setAttribute("src","five.jpg")
	}
	else if(a===6){
		document.getElementById("image"+b).setAttribute("src","six.jpg")
	}
}

function refresh(){
	let player1 = runDice()
	changeImg(player1,1)
	console.log("Player 1: ",player1)

	let player2 = runDice()
	changeImg(player2,2)
	console.log("Player 2: ",player2)

	if(player1===player2){
		document.getElementById("output").innerHTML="Same Match!"
		console.log("Same")
	}
	else if(player1>player2){
		document.getElementById("output").innerHTML="Player One Win!!!"
		console.log("player1 win")
	}
	else if(player2>player1){
		document.getElementById("output").innerHTML="Player Two Win!!!"
		console.log("player2 win")
	}
	else{
		console.log("No one win")
	}
	
}