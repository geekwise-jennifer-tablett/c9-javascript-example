var ul = document.createElement('ul');
var li = document.createElement('li', 'l_1,l_2,l_3,l_4');

document.addEventListener('DOMContentLoaded',function(event){
 console.log(event);
   
    document.body.appendChild(ul);
     
           
     for(var i =0; i < 4; i ++){
       var li = document.createElement('li');
            li.innerhtml = i ;
            ul.appendChild(li);
            li.textContent = 'hello my baby';
            li.textContent = 'hello my darling';
            li.textContent = 'hellow my sweety pie';
            li.textContent = 'ribbit'
        }
   });
 

 
 



 
 

 
 
 
 
 
 
 
   


















   

    




