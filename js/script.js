//creating element
var calc_body;
var input_element_container;
var input_element;
var clear_container;
var clear_button;
var number_container;
var number_buttons
var operator_container;
var operator_buttons;

//array for intergers
number_buttons = [
    '1',
    '2',
    '3',
    '4',
    '5'
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
calc_body.style.backgroundColor = '#130f7e';
calc_body.style.width = '50rem';
calc_body.style.height = '80rem';

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

//when webpage loads
document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild(calc_body);
    calc_body.appendChild(input_element);
    calc_body.appendChild(number_container);
    calc_body.appendChild(operator_container);
    
    input_element_container = document.getElementById('display');
    
    //loop for buttons
    for(var i=0; i<number_buttons.length; i++){
        
        create_numbers_element('button','number_button_'+i);
        
        var current_number_element = document.getElementById('number_button_'+i);
        
        //click for display
        current_number_element.addEventListener('click',function(event){
            
            input_element.value =  input_element.value += this.textContent;
            
        });
        
        current_number_element.textContent = number_buttons[i];
        
        number_container.appendChild(current_number_element);
        
    };
    
    //loop for operator buttons
    for(var i=0; i<operator_buttons.length; i++){
        
        create_operators_element('button','operator_button_'+i);
        var current_operator_element = document.getElementById('operator_button_'+i);
        
        //click for operator function
        current_operator_element.addEventListener('click',function(event){
            
            input_element.value = input_element.value += this.textContent;
            
        });
        
        current_operator_element.textContent = operator_buttons[i];
        
        operator_container.appendChild(current_operator_element);
    };
    
     calc_body.appendChild(number_container);
     calc_body.appendChild(operator_container);
   
   //create equal button and clear button
    create_numbers_element('button','equal_button');
    create_numbers_element('button','clear_button');
    
    var equal_button = document.getElementById('equal_button');
    var clear_data_button = document.getElementById('clear_button');
    
    equal_button.textContent = '=';
    clear_button.textContent = 'C';
    
   
    
    equal_button.addEventListener('click',function calculate(equation) {
     var answer = eval(equation);
     document.getElementById('display').value = answer;
        
    });
    
    //making clear button work
    clear_button.addEventListener('click',function(event){
        
        input_element.value = '';
        
    });
    
});
  
         
    
    
    