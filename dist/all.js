;(function(){
    const anchors = document.querySelectorAll('a[href*="#"]'); 

    for (let anchor of anchors) { 
        anchor.addEventListener("click", function(event) { 
            event.preventDefault();  
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth", 
                block: "start"
            })
        })
    }
}());

 
function initMap() {
    // The location of Uluru
    var uluru = {lat: 50.4506909, lng: 30.5229136};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
 

      var icon = { 
          path: `M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
          c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
          c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z`,
          fillColor: '#7737fb',
          fillOpacity: 1, 
          anchor: new google.maps.Point(0,0),
          strokeWeight: 0,
          scale: .1
      } 
      var marker = new google.maps.Marker({
              position: uluru,
              icon: icon,
              map: map
      });

  } 



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

 
    new Selectr('#yourcity', { 
        searchable: false
    }); 
    
    
     var swiper = new Swiper('.swiper-container', {
      
      loop: true, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
      },
    });  