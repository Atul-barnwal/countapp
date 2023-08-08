
// document.getElementById("count-el").innerText = 5
// let count=5
// console.log(count)





// let lap1=20;
// let lap2=30;
// let lap3=20;

// function totallaptime(){
//     totaltime=lap1+lap2+lap3;        //blocked scope lexical environment
//     console.log(totaltime)
// }
// console.log(totaltime)                //it wont work because let is function scope
// totallaptime()




// let myage=23;
// let humandogratio=7;
// mydogage=myage*humandogratio;
// console.log(mydogage)






let saveEl=document.getElementById("save-el")
let countE1=document.getElementById("count-el")   //pass in argument


let count=0;



function increment(){
    count+=1
    countE1.textContent = count 
}



function save(){
    let countstr=count+" - "
    // saveEl.innerText+=countstr                         //innertex dont show hidden elements like space at end
    saveEl.textContent+=countstr
    // console.log(count)
    count=0
    countE1.textContent=0
}










let welcomeEl= document.getElementById("welcome-el")

let name="Atul"
let greeting= "welcome back "
let myGreeting= greeting+name


    welcomeEl.innerText=myGreeting

    welcomeEl.innerText+= "!!!"

















// let bonuspoint=90
// console.log(bonuspoint)
// bonuspoint+=50
// console.log(bonuspoint)
// bonuspoint-=75
// console.log(bonuspoint)
// bonuspoint+=45

// console.log(bonuspoint)







// let name="atul"
// let greeting="hi,my name is "

// myGreeting= greeting+ name
// console.log(myGreeting)















