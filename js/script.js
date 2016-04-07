
var img_urls = new Array;

var add_images = function(number_of_images){
    var image;
    for(var i=0; i< number_of_images; i++){
        img_urls.push('/images/profile_photo_' + (i + 1) + '.jpg');
        image = document.createElement('img');
        image.setAttribute('src', img_urls[i]);
        
       
       
        /*flip try*/
    image.style.transform = 'rotatey(180deg)';
    
    
    
    
    
    
    // image.addEventListener('click',function(event){
        
    //     if(image.style.transform === 'rotateY(180deg)'){
    //         image.style.transform = 'rotateY(0deg)'
    //     }else{
    //         image.style.transform = 'rotateY(180deg)'
    //     }
        
        
    // });
   
        
        document.body.appendChild(image);
    };
};






/*
('.flip') ('onclick',function() {
  (this).find('.card')
  .addClass('flipped')
  .mouseleave(function() {
    (this).removeClass('flipped');
   
    console.log(this);
    
  });


});
*/





document.addEventListener('DOMContentLoaded', function(event){
    add_images(68);
    
    console.log();
});

















   

    




