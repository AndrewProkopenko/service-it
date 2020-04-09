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
