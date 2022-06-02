var heartElement = document.querySelectorAll('.heart');

console.log(heartElement);
heartElement.forEach((el) => {
    el.addEventListener('click', () =>{
        el.classList.toggle('heartStyle');
    })
})