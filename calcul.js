

console.log("Hello")


// ========== + =====

var addition= document.getElementById("addition");
    addition.addEventListener("click",function(){
        console.log("Addition clicked ") 
        var NB1= parseFloat(document.getElementById("NB1").value);
        var NB2= parseFloat(document.getElementById("NB2").value);
        document.getElementById("rslt").textContent= NB1+NB2 ;
        
})


// =========== - ==========
var soustraction= document.getElementById("soustraction");
    soustraction.addEventListener("click",function(){
        console.log("Soustraction clicked ") 
        var NB1= parseFloat(document.getElementById("NB1").value);
        var NB2= parseFloat(document.getElementById("NB2").value);
        document.getElementById("rslt").textContent= NB1-NB2 ;
        
})



// ========= * ==========
var multiplication= document.getElementById("multiplication");
    multiplication.addEventListener("click",function(){
        console.log("multiplication clicked ") 
        var NB1= parseFloat(document.getElementById("NB1").value);
        var NB2= parseFloat(document.getElementById("NB2").value);
        document.getElementById("rslt").textContent= NB1*NB2 ;
        
})



// ======= / =========
var division= document.getElementById("division");
    division.addEventListener("click",function(){
        console.log("division clicked ") 
        var NB1= parseFloat(document.getElementById("NB1").value);
        var NB2= parseFloat(document.getElementById("NB2").value);
            if (NB2==0){
                document.getElementById("rslt").textContent="ERROR";
            }
        
                else {
                     document.getElementById("rslt").textContent= NB1/NB2 ;
                }
})

