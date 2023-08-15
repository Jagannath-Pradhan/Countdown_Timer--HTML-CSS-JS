const endDate = "15 August 2024 12:00 AM"

document.getElementById("end-date").innerText = endDate

const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()

    const diff = (end - now) / 1000             // converting milliseconds to seconds
    // console.log(diff)
    
    if(diff < 0 ) return
    
    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24)

    // convrt into hours 
    inputs[1].value = Math.floor(diff / 3600) % 24
    // inputs[1].value = Math.floor(diff / 3600 )    

    // convrt into minutes
    inputs[2].value = Math.floor(diff / 60) % 60

    // convrt into seconds
    inputs[3].value = Math.floor(diff % 60) 
}

// initial call
clock()



setInterval(() =>{
    clock()
}, 1000)


/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 1 min = 60 secs
 * 
 * 60 mins = 3600 secs
 */