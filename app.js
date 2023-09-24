let sections = document.querySelectorAll('section');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;

        if(top >= offSet && top < offSet + height ){
            sec.classList.add("show-Animation")
        }
        else{
            sec.classList.remove("show-Animation")
        }
    }) 
}

// const val = 3 && 2 && 1 && 0 && false;
//     console.log(val)