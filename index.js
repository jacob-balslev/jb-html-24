// A $( document ).ready() block.
$( document ).ready(function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
    
    function resume(){
        //do something

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - -350;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('nav a[href*=' + id + ']').classList.add('active');
                });
            };
    
            let sectionListArray = document.querySelectorAll('#cv')
            let headerScan = document.querySelectorAll('.top-container');
            const viewHeight = document.documentElement.clientHeight
            
            sectionListArray.forEach(function(v) {
                let rect = v.getBoundingClientRect();
                let y = rect.y;
                let bottom = rect.bottom;
                let height = rect.height;
                if (y > viewHeight|| bottom+height < viewHeight ) {
                    v.classList.remove('active')
                } else {
                    v.classList.add('active')
                }
            })
            headerScan.forEach(function(v) {
                let rect = v.getBoundingClientRect();
                let y = rect.y;
                let bottom = rect.bottom;
                let height = rect.height;
                if (y > viewHeight|| bottom+height < viewHeight ) {
                    v.classList.remove('active')
                } else {
                    v.classList.add('active');
                }
            })
            
        });
        
       
        }
            window.addEventListener('scroll', resume);   

    
});