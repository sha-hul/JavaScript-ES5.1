var sec=document.getElementsByClassName('section');
for(var a=0;a<sec.length;a++){
    sec[a].addEventListener('click',function(){
        this.classList.toggle('active');
        var block=this.nextElementSibling;
        if(block.style.display=='block'){
            block.style.display='none'
        }
        else{
            block.style.display='block'
        }
    })
}