var big_button;
var background_button


var change_button_color = function(change_button_color){
   if(big_button.style.backgroundColor === 'blue') {
       
       big_button.style.backgroundColor = 'red';
   }else{
       
       big_button.style.backgroundColor = 'green';
   };
  
  };






   
document.addEventListener('DOMContentLoaded',function(event){
    
    big_button = document.getElementById('big_button');
    big_button.style.backgroundColor = 'blue';
    
    big_button.addEventListener('click',function(event){
    
    change_button_color();
        
        console.log(this);
        
    });
    
    
});



















   

    




