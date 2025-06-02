const btnOpen = document.querySelector(".HMenu_button");
const btnOpen2 = document.querySelector(".OCcard_button");
const btnOpen3 = document.querySelector(".OCcard_but2");
const btnOpen4 = document.querySelector(".OCcard_but3");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".modal__button");

const modalViewHandler = () =>{
    modal.style.display = 'flex';
    modal.classList.toggle('modal--open');
}
const modalDeleteHandler = () =>{
    modal.classList.remove('modal--open');
    modal.style.display = 'none';
}

btnOpen.addEventListener('click',modalViewHandler);
btnOpen2.addEventListener('click',modalViewHandler);
btnOpen3.addEventListener('click',modalViewHandler);
btnOpen4.addEventListener('click',modalViewHandler);
modal.addEventListener('click',modalDeleteHandler);