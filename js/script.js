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

function validate() {
    var{name,email,message} = document.contactForm;
    if( name.value == "") {
       alert( "enter name!" );
       name.focus() ;
       return false;
    }
    else if( email.value ==""){
       alert( "Enter email!" );
       email.focus() ;
       return false;
    }
    else if( message.value =="") {
       alert( "write a message!" );
       message.focus() ;
       return false;
    }else{
        alert(name.value +" "+ "we have received your message. Thank you for reaching out to us.")
        return true;
    }
}