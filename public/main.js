const initApp = () => {
    const hamburgerBtn = document.querySelector('#hamburger-button')
    const mobileMenu = document.querySelector('#mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

const radioBtn1 = document.querySelector('#radio1')
const radioBtn2 = document.querySelector('#radio2')
const radioBtn3 = document.querySelector('#radio3')
const radioBtn4 = document.querySelector('#radio4')
const content = document.querySelector('#container')

radioBtn1.addEventListener('click', () => {
    content.innerHTML = '<img src="img/slider/skateboarder.jpg" alt="Photo of skateboarder." title="Photo of a Skateboarder.">'
})

radioBtn2.addEventListener('click', () => {
    content.innerHTML = '<img src="img/slider/snowboarder.jpg" alt="Photo of snowboarder." title="Photo of a Snowboarder.">'
})

radioBtn3.addEventListener('click', () => {
    content.innerHTML = '<img src="img/slider/biker.jpg" alt="Photo of biker." title="Photo of a Biker.">'
})

radioBtn4.addEventListener('click', () => {
    content.innerHTML = '<img src="img/slider/rider.jpg" alt="Photo of rider." title="Photo of a FMX Rider.">'
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('category-header-show');
        } else {
            entry.target.classList.remove('category-header-show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.category-header');
hiddenElements.forEach((el) => observer.observe(el));