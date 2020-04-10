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
    // for(let i = 0; i<anchors.length; i++) { 
    //     anchors[i].addEventListener("click", function(event) { 
    //         event.preventDefault(); 
    //         const blockID = anchors[i].getAttribute('href');
    //         document.querySelector('' + blockID).scrollIntoView({
    //             behavior: "smooth", 
    //             block: "start"
    //         })
    //     })
    // }
}());


 
function initMap() {
    // The location of Uluru
    var uluru = {lat: 50.4506909, lng: 30.5229136};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
 

      var icon = { 
          path: "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.71 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z",
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
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
    

    // данный плагин устроен так, что 9 замениться на _
    
   jQuery(function($){
   $(".tel-mask").mask("+38(999) 999-9999");
   });
 
 
  
let modalBtn = document.querySelectorAll('.js-modal-btn a'),
modalCont = document.querySelector('.js-modal'),
modalCloseCont = document.querySelector('.js-modal .service-modal-container'),
modalCloseIcon = document.querySelectorAll('.modal-close'),
closeBtn = document.querySelector('.js-close-bnt'),
modalContact = document.querySelector('.service-modal-container_contact'),
modalEnd = document.querySelector('.service-modal-container_end')
// modalPolicyBtn = document.querySelector('.js-modal-policy'),
// modalPolicy = document.querySelector('.service-modal-container_policy')



// modalBtn.forEach( (item, index) => { 
// modalBtn[index].addEventListener('click', openModal)
// })
for (let i = 0 ; i< modalBtn.length; i++) { 
modalBtn[i].addEventListener('click', openModal)
}


// modalCloseIcon.forEach( (item, index) => { 
// modalCloseIcon[index].addEventListener('click', closeModal)
// }) 
for (let i = 0 ; i< modalCloseIcon.length; i++) { 
modalCloseIcon[i].addEventListener('click', closeModal)
}

modalCont.addEventListener('click', closeModalProps) 

closeBtn.addEventListener('click', closeBtnFunction)

// modalPolicyBtn.addEventListener('click', openModalPolicy)


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
// modalPolicy.classList.remove('show')
}
function closeModalProps(e) { 
if( e.target == modalCont ||  e.target == modalCloseCont) {
document.body.classList.remove('overflow-hidden')
modalCont.classList.remove('show')
modalEnd.classList.remove('show')
modalContact.classList.remove('hide')
// modalPolicy.classList.remove('show')
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

// function openModalPolicy (e) { 
// document.body.classList.add('overflow-hidden')
// e.preventDefault()
// modalCont.classList.add('show') 

// modalPolicy.classList.add('show')
// modalContact.classList.add('hide')
// }
 
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
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
let tableRow = document.querySelectorAll('.service-table tbody tr'), 
    tableBtn = document.querySelector('.js-table-btn'),
    tableBtnLink = document.querySelector('.js-table-btn a'),
    flag = 0; 


for (let i = 0 ; i< tableRow.length; i++) { 
    if( i >= 10) { 
        tableRow[i].classList.add('d-none')
    }
}
// tableRow.forEach( (item, i) => { 
//     if( i >= 10) { 
//         tableRow[i].classList.add('d-none')
//     }
// })

tableBtn.addEventListener('click', moreRow) 

function moreRow (e) { 
    e.preventDefault()
    // console.log('ie')
    if(flag == 0) {  
         for (let i = 0 ; i< tableRow.length; i++) { 
            tableRow[i].classList.remove('d-none') 
        }
        // tableRow.forEach( (item, i) => { 
        //     tableRow[i].classList.remove('d-none') 
        // })
        tableBtnLink.innerHTML = "скрыть";
        flag = 1; 
    }
    else { 
        for (let i = 0 ; i< tableRow.length; i++) { 
            if( i >= 10) { 
                tableRow[i].classList.add('d-none')
            }
        }
        // tableRow.forEach( (item, i) => { 
        //     if( i >= 10) { 
        //         tableRow[i].classList.add('d-none')
        //     }
        // })
        tableBtnLink.innerHTML = "показать все";
        flag = 0;
    }
   
}