

 //manual transition of the slides
 
 let currentSlide = 0;

function goToSlide(slideNunber, tduration)
{
    let w = document.getElementById("caro").style
    w. transition = tduration +"s" // will slower the transition speed by 3 seconds
    w.marginLeft = -(slideNunber)*100 +"%";
}

//going to the next slide
document.getElementById("next").addEventListener('click', function(){
    currentSlide++;
    goToSlide(currentSlide, 1)
    

    if(currentSlide >  3){
                setTimeout(function(){
                    let w = document.getElementById("caro").style
                w. transition = "0s" // will slower the transition speed by 3 seconds
                w.marginLeft = "0% ";
               currentSlide = 1;
        
            }, 1000)
            }
    
})


//going to the previous slide

document.getElementById('previous').addEventListener('click', function(){
    currentSlide--;
    goToSlide(currentSlide,1 );
   
})





// automatic transition of the slides

//  let ml = 100;

let slider = setInterval(function(){

   goToSlide(currentSlide, 1);
    currentSlide++
    // ml = ml+100;

    if(currentSlide > 4){
        setTimeout(function(){
         let w = document.getElementById("caro").style
        w. transition = "0s" // will slower the transition speed by 3 seconds
        w.marginLeft = "0% ";
       currentSlide = 1;

    }, 1000)
    }
},3000)