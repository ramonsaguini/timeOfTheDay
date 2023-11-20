function loader(){
  let msg = window.document.getElementById(`msg`)
  let img = window.document.getElementById(`img`)
  let date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  let hourmin = [hour, min].join(':')
  let day = date.getUTCDate()
  let month = date.getMonth() 
  let year = date.getFullYear()

  msg.innerHTML = `Today is ${day}/${month + 1}/${year} at ${hourmin}hrs `

  if (hour >= 0 && hour < 12){
      img.src = `./assets/img/morning.jpg`
      document.body.style.background = `#f0bb48`
  }else if (hour >= 12 && hour <=18) {
      img.src = `./assets/img/afternnon.jpg`  
      document.body.style.background = `#f18140`
  }else {
      img.src = `./assets/img/night.jpg`
      document.body.style.background = `#3a302b`

  }   
} 