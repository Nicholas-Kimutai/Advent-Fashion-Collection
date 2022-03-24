var slideImg =document.getElementById("slideImg");
var images = new Array(
    "images/tie.jpg",
    "images/kids1.jpg",
    "images/landingtrial.png"
    

) ;
var len =images.length;
var i =0;

function slider(){
    if(i>len-1){
        i=0
    }
    slideImg.src=images[i];
    i++;
    setTimeout("slider()",3000);
}