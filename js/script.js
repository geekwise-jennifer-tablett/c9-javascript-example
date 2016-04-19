//creating element
var calc_body;
var input_element_container;
var input_element;
var clear_container;
var clear_button;
var number_container;
var number_buttons;
var operator_container;
var operator_buttons;

//array for intergers
number_buttons = [
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1',
    '0'
 ];

//array for operations
operator_buttons = [
    
    '+',
    '-',
    '*',
    '/'
];

//calculator body design
calc_body = document.createElement('div');
calc_body.style.backgroundColor = '#46619c';
calc_body.style.width = '20rem';
calc_body.style.height = '40rem';

//setting id for containers
input_element = document.createElement('input');
input_element.setAttribute('id','display');

number_container = document.createElement('div');
number_container.setAttribute('id','number_container');

operator_container = document.createElement('div');
operator_container.setAttribute('id','operator_container');

//create elements
var create_numbers_element = function(element_type, element_id){
    
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    
    number_container.appendChild(element);
    
};

var create_operators_element = function(operator_element_type,operator_element_id){
    
    var operator_element = document.createElement(operator_element_type);
    operator_element.setAttribute('id',operator_element_id);
    
    operator_container.appendChild(operator_element);
    
};


var check_keyboard_value = function(value_to_check){
    
      return value_to_check.match(/\d/gi);  
};


var listen_for_keycode = function(){
    
    document.body.addEventListener('keydown',function(event){
        //console.log(event.code);
        //console.log(event.keyCode);
        
        key_pressed = event.code.match(/\d/gi);
        
        if(event.code.match(/digit/gi)){
           //number_button_    
           console.log(key_pressed);
           console.log(document.getElementById(('number_button_'+
                        parseInt(key_pressed[0]-1)
            )));
            
            
            var current_key_number_pressed = document.getElementById(('number_button_'+parseInt(key_pressed[0]-1)));
            
            
            //current_key_number_pressed.setAttribute('class','pressed')
            
            
           display.value += event.code.match(/\d/gi); 
        }
        
        
    })
    
    
    
    
    
};






//when webpage loads
document.addEventListener('DOMContentLoaded',function(event){
    
    listen_for_keycode();
    
    document.body.appendChild(calc_body);
    calc_body.appendChild(input_element);
    calc_body.appendChild(number_container);
    calc_body.appendChild(operator_container);
    
   var display = document.getElementById('display');
    
    //loop for buttons
    for(var i=0; i<number_buttons.length; i++){
        
        create_numbers_element('button','number_button_'+i);
        
        var current_number_element = document.getElementById('number_button_'+i);
        
        //click for display
        current_number_element.addEventListener('click',function(event){
            
            display.value =  display.value += this.textContent;
            
        });
        
        current_number_element.textContent = number_buttons[i];
        
        // number_container.appendChild(current_number_element);
        
    };
    
    //loop for operator buttons
    for(var i=0; i<operator_buttons.length; i++){
        
        create_operators_element('button','operator_button_'+i);
        var current_operator_element = document.getElementById('operator_button_'+i);
        
        //click for operator function
        current_operator_element.addEventListener('click',function(event){
            
            display.value = display.value += this.textContent;
            
        });
        
        current_operator_element.textContent = operator_buttons[i];
        
        // operator_container.appendChild(current_operator_element);
    };
    
    //  calc_body.appendChild(number_container);
    //  calc_body.appendChild(operator_container);
   
   //create equal button and clear button
    create_numbers_element('button','equal_button');
    create_numbers_element('button','clear_button');
    
    var equal_button = document.getElementById('equal_button');
    var clear_button = document.getElementById('clear_button');

    equal_button.textContent = '=';
    clear_button.textContent = 'C';
    
    
   
    
    equal_button.addEventListener('click',function (equation) {
     
     if(display.value.length === 0){
         display.value = 0;
     }
     
     display.value = eval(display.value);
     console.log(this);
        
    });
    
    //making clear button work
    clear_button.addEventListener('click',function(event){
       // document.getElementById()
        //    display.value = '';
        console.log(this);
        display.value = null;
    });
    
});
  
         
    
    
    