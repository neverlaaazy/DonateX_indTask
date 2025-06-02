const btnOpen = document.querySelector(".HMenu_button");
const btnOpen2 = document.querySelector(".OCcard_button");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".modal__button");

const modalViewHandler = () =>{
    modal.classList.toggle('modal--open');
}
const modalDeleteHandler = () =>{
    modal.classList.remove('modal--open');
}

btnOpen.addEventListener('click',modalViewHandler);
btnOpen2.addEventListener('click',modalViewHandler);
modal.addEventListener('click',modalDeleteHandler);