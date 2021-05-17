

function leftDrum(){
	document.getElementById("cat").setAttribute("src","left.png")
	console.log("left image changed")
	var audio= new Audio("left.wav")
	//var a = document.getElementById("A")
	audio.play()

}
function rightDrum(){
	document.getElementById("cat").setAttribute("src","right.png")
	console.log("right image changed")
	var audio = new Audio("right.wav")
	audio.play()
}
function trumpet(){
	console.log("Trumpet Time")
	var audio = new Audio("trumpet.wav")
	audio.play()
}

window.addEventListener("keydown", function(event)
{
	console.log("Pressed",event.key)
	if(event.key === "a" || event.key==="A"){
		leftDrum()
	}
	else if(event.key==="d" || event.key==="D"){
		rightDrum()
	}
	else if(event.key==="s" || event.key==="S"){
		trumpet()
	}
	else{
		console.log("Wrong Press!! ")
		document.getElementById("err").innerHTML ="Please Press A,D or S or Click the buttons."
	}
	
});