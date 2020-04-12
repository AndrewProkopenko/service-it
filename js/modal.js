 
  
let modalBtn = document.querySelectorAll('.js-modal-btn a'),
    modalCont = document.querySelector('.js-modal'),
    modalCloseCont = document.querySelector('.js-modal .service-modal-container'),
    modalCloseIcon = document.querySelectorAll('.modal-close'),
    closeBtn = document.querySelector('.js-close-bnt'),
    modalContact = document.querySelector('.service-modal-container_contact'),
    modalEnd = document.querySelector('.service-modal-container_end') 

 
for (let i = 0 ; i < modalBtn.length; i++) { 
    modalBtn[i].addEventListener('click', openModal)
}
 
for (let i = 0 ; i < modalCloseIcon.length; i++) { 
    modalCloseIcon[i].addEventListener('click', closeModal)
}

modalCont.addEventListener('click', closeModalProps) 

closeBtn.addEventListener('click', closeBtnFunction)
 

function openModal(e) { 
    console.log('openModal')
    document.body.classList.add('overflow-hidden')
    e.preventDefault()
    modalCont.classList.add('show') 
}

function closeModal() { 
    console.log('closeModal')
    document.body.classList.remove('overflow-hidden')
    modalCont.classList.remove('show') 
    modalEnd.classList.remove('show')
    modalContact.classList.remove('hide') 
}
function closeModalProps(e) { 
    console.log('closeModalProps')
    if( e.target == modalCont ||  e.target == modalCloseCont) {
        console.log('closeModalProps if')
        document.body.classList.remove('overflow-hidden');
        modalCont.classList.remove('show');
        modalEnd.classList.remove('show');
        modalContact.classList.remove('hide');
    }  
}

function submitModal() {  
    console.log('submit') 
    modalEnd.classList.add('show')
    modalContact.classList.add('hide')
}

function closeBtnFunction() { 
    console.log('closeBtnFunction')
closeModal()
modalEnd.classList.remove('show')
modalContact.classList.remove('hide')
}
 