  
let modalBtn = document.querySelectorAll('.js-modal-btn a'),
    modalCont = document.querySelector('.js-modal'),
    modalCloseCont = document.querySelector('.js-modal .service-modal-container'),
    modalCloseIcon = document.querySelectorAll('.modal-close'),
    closeBtn = document.querySelector('.js-close-bnt'),
    modalContact = document.querySelector('.service-modal-container_contact'),
    modalEnd = document.querySelector('.service-modal-container_end'),
    modalPolicyBtn = document.querySelector('.js-modal-policy'),
    modalPolicy = document.querySelector('.service-modal-container_policy')
    


modalBtn.forEach( (item, index) => { 
modalBtn[index].addEventListener('click', openModal)
})
modalCloseIcon.forEach( (item, index) => { 
modalCloseIcon[index].addEventListener('click', closeModal)
}) 

modalCont.addEventListener('click', closeModalProps) 

closeBtn.addEventListener('click', closeBtnFunction)

modalPolicyBtn.addEventListener('click', openModalPolicy)


function openModal(e) { 
document.body.classList.add('overflow-hidden')
e.preventDefault()
modalCont.classList.add('show') 
}

function closeModal() { 
document.body.classList.remove('overflow-hidden')
modalCont.classList.remove('show') 
modalEnd.classList.remove('show')
modalContact.classList.remove('hide')
modalPolicy.classList.remove('show')
}
function closeModalProps(e) { 
if( e.target == modalCont ||  e.target == modalCloseCont) {
    document.body.classList.remove('overflow-hidden')
    modalCont.classList.remove('show')
    modalEnd.classList.remove('show')
    modalContact.classList.remove('hide')
    modalPolicy.classList.remove('show')
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

function openModalPolicy (e) { 
    document.body.classList.add('overflow-hidden')
    e.preventDefault()
    modalCont.classList.add('show') 

    modalPolicy.classList.add('show')
    modalContact.classList.add('hide')
}
 