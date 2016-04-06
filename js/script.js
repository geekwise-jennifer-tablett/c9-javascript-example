var big_button;

/*lets see if this works*/
var speed = prompt ('speed limit is 55', 55);
    if(speed >= 55){
        alert('congrats, you just donated the city your hard earned cash');
    }else{
        alert('go faster, the city wants your cash');
    }
    
    


  








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
    
   
    
    
/*just wondering if this works could be fun to mess with*/

  
   

});



















   

    




