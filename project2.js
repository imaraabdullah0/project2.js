const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const step = document.querySelectorAll('.step')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > step.length) {
        currentActive = step.length
    }


})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }

    
})

function update() {
    step.forEach((step.idx) => {
        if(idx<currentActive) {
            step.classList.add('active')
        }else{
            step.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
    progress.style.width = (active.length / step.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === step.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}