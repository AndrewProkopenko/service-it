let tableRow = document.querySelectorAll('.service-table tbody tr'), 
    tableBtn = document.querySelector('.js-table-btn'),
    tableBtnLink = document.querySelector('.js-table-btn a'),
    flag = 0; 


for (let i = 0 ; i< tableRow.length; i++) { 
    if( i >= 10) { 
        tableRow[i].classList.add('d-none')
    }
} 

tableBtn.addEventListener('click', moreRow) 

function moreRow (e) { 
    e.preventDefault()
    // console.log('ie')
    if(flag == 0) {  
         for (let i = 0 ; i< tableRow.length; i++) { 
            tableRow[i].classList.remove('d-none') 
        }
      
        tableBtnLink.innerHTML = "скрыть";
        flag = 1; 
    }
    else { 
        for (let i = 0 ; i< tableRow.length; i++) { 
            if( i >= 10) { 
                tableRow[i].classList.add('d-none')
            }
        }
      
        tableBtnLink.innerHTML = "показать все";
        flag = 0;
    }
   
}