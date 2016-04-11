//creates element
var card_flip = function(){
      this.classList.toggle('on');
      this.classList.toggle('off');
}

var create_images = function(){

  
        //makes multiple objects
        for(var i=1;i<=68;i++){
               
                //where img is
                var image_container = document.createElement('section');
                
                image_container.setAttribute('id','img_container_'+i);
                document.body.appendChild(image_container);
                
                var image = document.createElement('img');
                image.setAttribute('src','images/profile_photo_'+i+'.jpg');
                
                image.setAttribute('id', 'img_'+i);

                
                image.classList.add('on');
                
                
                image.addEventListener('click',function(event){
                   
                      //sets toggle up
                      if(this.getAttribute('class') === 'on'){
                              this.setAttribute('class','off');
                              this.parentElement.children[1].setAttribute('class','on');
                              
                              
                      }else{
                              this.setAttribute('class','on');
                              this.parentElement.children[1].setAttribute('class','off');
                              
                      }
                      
                                            event.preventDefault();

                      
                      console.log(this);
                        
                });
                
                
                
                
                
                
                image_container.appendChild(image);
                
                
                //creates backside of cardflip
                var image_info = document.createElement('span');
                
                image_info.setAttribute('id','img_info_container_'+i);
                image_info.classList.add('off');
                
                //when image is clicked-show the opposite side
                image_info.addEventListener('click',function(event){
                     
                        
                     if(this.getAttribute('class') === 'on'){
                              this.setAttribute('class','off');
                              this.parentElement.children[0].setAttribute('class','on');
                              
                              
                      }else{
                              this.setAttribute('class','on');
                              this.parentElement.children[0].setAttribute('class','off');
                              
                      }
                           event.preventDefault();

                      
                      console.log(this);
                        
                        
                        
                });
                
                
                
                //links
                
                var image_info_github_link = document.createElement('a');
                var image_info_twitter_link = document.createElement('a');
                
                //icons
                
                var twitter_icon = document.createElement('i');
                twitter_icon.setAttribute('id','twitter_'+i);
                twitter_icon.setAttribute('class','fa fa-twitter');
                
                
                var github_icon = document.createElement('i');
                github_icon.setAttribute('id','github_'+i);
                github_icon.setAttribute('id','fa fa-github-alt22'+i)
                
                //link attributes
                image_info_github_link.setAttribute('id','img_info_github_link_'+i);
                image_info_github_link.setAttribute('href','http://www.github.com/geekwise');
                image_info_github_link.textContent = 'github link '+i;
                
                image_info_twitter_link.setAttribute('id','img_info_twitter_link_'+i);
                image_info_twitter_link.setAttribute('href','http://www.twitter.com/climateamante');
                image_info_twitter_link.textContent = 'twitter link'+i;
                
                
                //connect to body
                image_container.appendChild(image_info);
                image_info.appendChild(image_info_github_link);
                image_info.appendChild(image_info_twitter_link);
                image_info_twitter_link.appendChild(twitter_icon);
                image_info_github_link.appendChild(github_icon);
                
                
                
                
                
                
                
        };
        

}

//tells browser to load
document.addEventListener('DOMContentLoaded',function(event){

        create_images();
        
});

























































































































































































//webkit try

/*var createElement = photo_container;
var createElement = ('id','img_flip');
var createElement = ('id','info_flip');

var img_urls = new Array;

var add_images = function(number_of_images){
    var image;
    for(var i=0; i< number_of_images; i++){
        img_urls.push('/images/profile_photo_' + (i + 1) + '.jpg');
        image = document.createElement('img');
        image.setAttribute('src', img_urls[i]);
        
    };
    */
    
    //section for images
   // appendChild(photo_container);
   // photo_container.setAttribute('id','image_container_' +i);
    
    //images 
   // var image= document.createElement('img');
   // image.setAttribute('src', 'image/profile_photo_' +i+ '.jpg');
   // image.setAttribute('id', 'image_' +i);
   // image.classList.add('image_flip');
    
    
    //info
   // var image_info_github_link = document.CreateElement('a');
   // var image_info_twitter_link = document.CreateElement('a');
    
   // image_info_github_link.setAttribute('id','img_info_link_' +i);
   // image_info_github_link.setAttribute('href','http:www.github.com/');
   // image_info_github_link.textContent = 'github link' +i;
    
   // image_info_twitter_link.setAttribute('id','img_info_link_' +i);
   // image_info_twitter_link.setAttribute('href','http:www.twitter.com/');
   // image_info_twitter_link.textContent = 'twitter link' +i;
    
   // image_info.appendChild(image_info_github_link);
   // image_info.appendChild(image_info_twitter_link);
       

    /*
    photo_container.addEventListener('click',function(event){
        if(this.getAttribute('class')==='image_flip'){
            this.getAttribute('class') = 'info_flip'
        }else{
            this.getAttribute('class') = 'image_flip'
        }
    });
    
    */
    
    
    
    
    
     /*       document.body.appendChild(image);
    };
};
    
/
    // image.addEventListener('click',function(event){
        
    //     if(image.style.transform === 'rotateY(180deg)'){
    //         image.style.transform = 'rotateY(0deg)'
    //     }else{
    //         image.style.transform = 'rotateY(180deg)'
    //     }
        
        
    // });
   
        







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


/*


document.addEventListener('DOMContentLoaded', function(event){
    add_images(68);
    
    console.log();
});

*/















   

    




