


;(function(){
    
let modalBtn = document.querySelectorAll('.js-modal-btn a'),
modalCont = document.querySelector('.js-modal'),
modalCloseCont = document.querySelector('.js-modal .service-modal-container'),
modalCloseIcon = document.querySelectorAll('.modal-close'),
closeBtn = document.querySelector('.js-close-bnt'),
modalContact = document.querySelector('.service-modal-container_contact'),
modalEnd = document.querySelector('.service-modal-container_end')


modalBtn.forEach( (item, index) => { 
modalBtn[index].addEventListener('click', openModal)
})
modalCloseIcon.forEach( (item, index) => { 
modalCloseIcon[index].addEventListener('click', closeModal)
}) 

modalCont.addEventListener('click', closeModalProps) 

closeBtn.addEventListener('click', closeBtnFunction)




function openModal(e) { 
e.preventDefault()
modalCont.classList.add('show') 
}

function closeModal() { 
modalCont.classList.remove('show') 
modalEnd.classList.remove('show')
modalContact.classList.remove('hide')
}
function closeModalProps(e) { 
if( e.target == modalCont ||  e.target == modalCloseCont) {
    modalCont.classList.remove('show')
    modalEnd.classList.remove('show')
    modalContact.classList.remove('hide')
}  
}

function submitModal() { 
console.log(1)
modalContact.classList.add('hide')
modalEnd.classList.add('show')
}

function closeBtnFunction() { 
closeModal()
modalEnd.classList.remove('show')
modalContact.classList.remove('hide')
}

}());
