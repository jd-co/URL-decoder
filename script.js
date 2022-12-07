const output=document.querySelector('.output');
const decoder=function(){

    let uri=document.querySelector('input').value;
    text=decodeURIComponent(uri);    
    text=text.substring(text.indexOf("arn"));
    output.textContent=text;
}
const submitBtn=document.querySelector(".submitBtn").addEventListener('click',decoder);

window.addEventListener('keypress',function(e){
    if(e.key=='Enter')
        decoder();
})
