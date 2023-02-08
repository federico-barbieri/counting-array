

// count is 0

let count = 0;

let myArray = [];

// initloop calls countBegins after 1 second

function initLoop(){
    setTimeout(countBegins, 1000);
}

function countBegins(){
    if(count < 10){
        myArray.unshift(count);
        console.log(myArray);
        count++;
        
        
    } else{
        myArray.length = 0;
        count = 0;
    }

    initLoop();
}

initLoop();
