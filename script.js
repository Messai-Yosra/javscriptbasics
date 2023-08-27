// // console.log("hello");
// var myname ="Test"

// console.log(myname);
// myname = 404;
// console.log(myname);


// // ========== conditions =========
 
// var score = 80 
// if (score >= 70 ){
//     console.log ("exam taada "  )
// }

// // ======= for ======
// for ( var i =0; i <10; i++)
// {
// console.log(i);

// }


// // =========== array ======
// var names =["ahmed",2,"ali","sarra"];
// console.log(names[1] );


// // ========= object======
// var car = {
//     type :"AUDI",
//     color :"BLACK",
//     speed : 1245

// };
// console.log(car.type );


// // ==== fct ===========
// function acceleration (obj){
//     return obj.speed * 5;
// }
//     console.log(acceleration(car));

//     // ======= ajout ====
    
// function ajout(obj)
// {
//    obj.acceleration=acceleration(obj) ;
// }
// ajout(car);
// console.log("car acceleration is "+ car.acceleration);

// // ============ addEventListener =====
// var btn= document.getElementById("btn");
//  btn.addEventListener("click",function(){
//  document.getElementById("hhh").textContent = "Goodbye";

//  });

//  ============== Exercice =======

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) ;
  }

  
var ran= document.getElementById("ran");
ran.addEventListener("click",function(){

    console.log("Random cliked");
        
        var max= document.getElementById("max").value;
        console.log("le maximum est: "+max);
            


        var min= document.getElementById("min").value;
        console.log("le minimum est: "+min);
        var resultat = getRandomNumber(min, max)
        console.log ("le resultat est : "+ resultat)
        
        document.getElementById("rslt").textContent = resultat;
 })




