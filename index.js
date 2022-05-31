let dateweek = new Date().toLocaleString('en-us', {  weekday: 'long' })
document.querySelector("h2").innerHTML = dateweek
let firstinput = document.querySelector("input")
let firstbtn = document.querySelector("button")
let productDiv = document.querySelector("main")
let test = ""
let div = ""

function assignvalue(){
    test = firstinput.value
    firstinput.value=""
    div = `<div class="new-item">
    <input type="checkbox" class="check-box">
    <p>${test}</p>
    <button class="second-btn">-</button>
</div>`
    productDiv.innerHTML += div
    
    
    
}

firstbtn.addEventListener("click", assignvalue)
firstbtn.addEventListener("click", (event) => {
        event.preventDefault()
    })
