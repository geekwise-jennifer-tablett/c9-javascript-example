var div;

document.addEventListener('DOMContentLoaded',function(event){
   div =document.createElement('div');
   
   document.body.appendChild(div)
 
 
    var description = 'Enter A CSS Color Or Hex Color - exmaple:#fff444 or Red'
var create_html_element = function (name_of_element,name_of_id) {
    var element = document.createElement(name_of_element);
  element.setAttribute('id',name_of_id);
  
  element.textContent = name_of_element + ' tag';
  document.body.appendChild(element);
   console.log(true);

};

 
 
 
 
 
 
 
 
   /*click_begins*/
    div.addEventListenter('click',function(event){
    
    
    id.innerHtml = 'Click Me Please'
     div.addEventListener('change text', function( event ) {
    
     event.target.style.background = "green";    
        }, true);  function changeText(id) {
    
    id.innerHTML = 'Oh No!';
    }
});
  
  
  
  
  
  
}); 
   /*click_ends*/
   
   
  
  
  
  
  
  
   /*key_down_begins*/



document.addEventListener('DOMContentLoaded', function(event){
   create_html_element('div', 'div_box_text');
   create_html_element('span','span_text');
   span_text.textContent = description;
   div_box_text.setAttribute('placeholder','enter a css color name');
   
   div_box_text.addEventListener('keydown',function(event){
       
       console.log(event.keyCode);
       if(event.keyCode === 13){
           span_text.textContent = div_box_text.value;
           span_text.style.backgroundColor = 
           div_box.value;
         document.body.style.backgroundColor = div_box_test.value; 
       };
    
    
 });

   /*key_down_ends*/
  
  
 
   /*mouse_over_begins*/
  /* div.addEventListenter('mouse_over',function(event){
     
      onmouseover='mOver(this)' onmouseout='mOut(this)' 

     style="background-color:orange; 
   });*/
   /*mouse_over_ends*/



















   

    




