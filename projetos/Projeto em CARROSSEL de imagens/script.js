const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')

const container = document.querySelector('.container')
const list = document.querySelector('.container .list')
const thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemOnClick('.next')
btnBack.onclick = () => moveItemOnClick('.back')

function moveItemOnClick(type) {
    let listItem = document.querySelectorAll('.list .list-item')
    let thumbItem = document.querySelectorAll('.thumb .thumb-item')

    console.log(listItem)
    console.log(thumbItem)

    if(type === '.next'){
        list.appendChild(listItem[0])
        thumb.appendChild(thumbItem[0])
        container.classList.add('next')
    } else {
        list.prepend(listItem[listItem. length - 1])
        thumb.prepend(thumbItem[thumbItem. length - 1])  
        container.classList.add('back') 
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
      }, "1000");

}