
var day = document.getElementById("day")
var hour = document.getElementById("hour")
var minute = document.getElementById("minute")
var second = document.getElementById("sec")
var inputDate =prompt("Set your Date Time: ")
	console.log(inputDate)
document.getElementById("userInput").innerHTML=inputDate

let findTime=setInterval(function(){
 	var d=new Date()
//console.log(Date.parse(d))
	var today= Date.parse(d)
	let endDate = Date.parse(inputDate)
 	let total = endDate- today
	let seconds = Math.floor((total / 1000)%60)
	let minutes = Math.floor((total / 1000/60 )%60)
	let hours = Math.floor((total/1000 * 3600) %24)
	let days =Math.floor(total/(1000 * 3600 * 24))
	
	day.innerHTML = days 
	hour.innerHTML = hours 
	minute.innerHTML = minutes 
	second.innerHTML = seconds

	if(total <=0){
		clearInterval(findTime)
	}

},1000)

