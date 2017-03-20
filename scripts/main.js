var heading=document.querySelector('h1');
var image_one=document.querySelector('img');
var my_button=document.querySelector('button');
image_one.onclick=function(){
    var my_src=image_one.getAttribute('src');
    if(my_src==='images/background.png'){
        image_one.setAttribute('src','images/changepic.png');
    }else{
        image_one.setAttribute('src','images/background.png');
    }
}
my_button.onclick=function(){
    setUserName();
}
function setUserName(){
    var name=prompt('Please enter your name');
    localStorage.setItem('name',name);
    heading.innerHTML='东京残响很棒，'+name;
}
