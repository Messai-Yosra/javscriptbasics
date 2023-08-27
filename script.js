// console.log("hello");
var myname ="Test"

console.log(myname);
myname = 404;
console.log(myname);


// ========== conditions =========
 
var score = 80 
if (score >= 70 ){
    console.log ("exam taada "  )
}

// ======= for ======
for ( var i =0; i <10; i++)
{
console.log(i);

}


// =========== array ======
var names =["ahmed",2,"ali","sarra"];
console.log(names[1] );


// ========= object======
var car = {
    type :"AUDI",
    color :"BLACK",
    speed : 1245

};
console.log(car.type );


// ==== fct ===========
function acceleration (obj){
    return obj.speed * 5;
}
    console.log(acceleration(car));

    // ======= ajout ====
    
function ajout(obj)
{
   obj.acceleration=acceleration(obj) ;
}
ajout(car);
console.log("car acceleration is "+ car.acceleration);

