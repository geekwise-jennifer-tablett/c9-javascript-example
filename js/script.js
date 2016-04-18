//creating calculator body
var calc_body;

//creating buttons
var calc_button;
var calc_button = [
    '1',
    '2',
    '3',
    '4',
    '+',
    '-',
    '='
    ];

//creating display    
var input;
 input = document.createElement('input'); 
 input.setAttribute('id','input');
    

//design of calculator body
calc_body = document.createElement('div');
calc_body.style.backgroundColor = 'yellow';
calc_body.style.width = '50rem';
calc_body.style.height = '60rem';

//design of button
// current_element.textContent = calc_button[i];
//         current_element.style.backgroundColor = 'black';
//         current_element.style.width = '2rem';
//         current_element.style.height = '2rem';
 var create_element = function(element_type, element_id){
     var element = document.createElement(element_type);
     element.setAttribute('id',element_id);
     
 };



 
 
    
document.addEventListener('DOMContentLoaded',function(event){
  
  //appending objects
  document.body.appendChild(calc_body);
  calc_body.appendChild(input);
  
  
   
    
 
  //loop for button 
    for(var i=0; i<calc_button.length; i++){
        create_element('button','calc_button_'+i);
        var current_element = document.getElementById('calc_button_'+i);
    };
        
       
        
});
    
    
    
// current_element.addEventListener('click',function(event){
//             input.value =  input.value += this.textContent;    
    
    
      
         
    
    
    