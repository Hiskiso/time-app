let api_path = "http://localhost:5000/"
let timeElement = document.getElementById("time")

setInterval(async()=>{
    let request = await fetch(api_path)
    let response = await request.text()
    timeElement.innerText = response
},1000)