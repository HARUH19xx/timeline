import './style.scss'

// const article = document.querySelectorAll('.l_article')
const leftBox = document.querySelectorAll('.c_left-box')
const rightBox = document.querySelectorAll('.c_right-box')
document.addEventListener('scroll', () => {
    for (let i =0; i < leftBox.length; i++) {
        const getLeftBoxDistance = leftBox[i].getBoundingClientRect().top + leftBox[i].clientHeight * 2
        console.log(getLeftBoxDistance)
        if (window.innerHeight > getLeftBoxDistance) {
            leftBox[i].classList.add('show')
        }
    }
    for (let i =0; i < rightBox.length; i++) {
        const getRightBoxDistance = rightBox[i].getBoundingClientRect().top + rightBox[i].clientHeight * 2
        console.log(getRightBoxDistance)
        if (window.innerHeight > getRightBoxDistance) {
            rightBox[i].classList.add('show')
        }
    }
})