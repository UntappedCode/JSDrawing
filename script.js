function mySun() {  
    var c = document.getElementById("mycanvas");  
   
    //to draw a surface on canvas element pass 2d as an argument in the getContext function  
    var draw = c.getContext("2d");  
   
    //to start a new path invoke BeginPath function.  
    //Call this function when you want to create a new path  
    draw.beginPath();  
   
    //to specify a color or style for your canvas use fillStyle property  
    draw.fillStyle = "yellow";  
   
    //to create a full circle invoke the arc method and in that method  
    //pass the value for x and y, radius, start point,  
    draw.arc(350, 250, 80, 0, Math.PI * 2, true);  
   
    //to close the path invoke the closePath function  
    draw.closePath();  
   
    //invoke fill function to fill the canvas with a circle and in that circle a color of yellow  
 draw.fill();  
 }  

//  This area is creating parts of the CLOUDS
 function myCloud() {  
    var c = document.getElementById("mycanvas");  
    var cloud = c.getContext("2d");  
    //moveTo function is used to move the starting point of the canvas to a new point  
    //x value is 55 and y value is 50  
    cloud.moveTo(55, 50);  
   
    //from the new point, begin a new path  
    cloud.beginPath();  
   
    //fill the style with color white  
    cloud.fillStyle = "white";  
    //left round eye  
    cloud.arc(675, 150, 30, 0, Math.PI * 2, true);  
    cloud.closePath();  
    cloud.fill();  

    //move to the new sub path from the current point and part of the cloud  
    cloud.moveTo(103, 49);  
    cloud.beginPath();  
    cloud.fillStyle = "white";  
    //right round eye  
    cloud.arc(575, 150, 30, 0, Math.PI * 2, true);  
    cloud.closePath();  
    cloud.fill();  
    cloud.moveTo(103, 49);  
    cloud.beginPath();  
    cloud.fillStyle = "white";  
    //right round eye  
    cloud.arc(630, 145, 50, 0, Math.PI * 2, true);  
    cloud.closePath();  
    cloud.fill();  
    
 }  

// This is where i made the BIRDS
 function mySmile() {  
    var c = document.getElementById("mycanvas");  
    var smile = c.getContext("2d");  
    //105 means x it will go the left side and 75 means y it will go upward of //downward  
    smile.moveTo(105, 75);  
    smile.beginPath();  
    smile.strokeStyle = "black";  
    smile.arc(500, 200, 10, 1, Math.PI, false);  
    //to draw a half rounded circle with a line stroke we can invoke the stroke function  
    smile.stroke();  
    smile.moveTo(105, 75);  
    smile.beginPath();  
    smile.strokeStyle = "black";  
    smile.arc(500, 220, 10, 1, Math.PI, false);  
    //to draw a half rounded circle with a line stroke we can invoke the stroke function  
    smile.stroke();  
    smile.moveTo(105, 75);  
    smile.beginPath();  
    smile.strokeStyle = "black";  
    smile.arc(520, 200, 10, 1, Math.PI, false);  
    //to draw a half rounded circle with a line stroke we can invoke the stroke function  
    smile.stroke();  
 }  



// This is the MAIN BACKGROUND area filled with a gradient 
 function canvasGrad(){
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    
    // Create a linear gradient
    // The start gradient point is at x=20, y=0
    // The end gradient point is at x=220, y=0
    var gradient = ctx.createLinearGradient(0,0, 0,350);
    
    // Add three color stops
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(.5, 'cyan');
    gradient.addColorStop(1, 'orange');
    
    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 10, 800, 400);
 }



// This is the OCEAN 
 function waterGrad(){
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    
    // Create a linear gradient
    // The start gradient point is at x=20, y=0
    // The end gradient point is at x=220, y=0
    var gradient = ctx.createLinearGradient(20,0, 0,350);
    
    // Add three color stops
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(.5, 'white');
    gradient.addColorStop(1, 'blue');
    
    // Set the fill style and draw a rectangle
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 275, 800, 400);

 }

 

// This function loads all my other function when the page loads
 function bodyLoad() {  
    canvasGrad();
    mySun();  
    waterGrad();
    myCloud(); 
    mySmile(); 
    myTest();
    
 }  