window.addEventListener("scroll",function(){
    var header = this.document.querySelector('.header-page');
    if(window.scrollY > 0){
        header.classList.add("active");
    }
    else{
            header.classList.remove("active");
    }
})