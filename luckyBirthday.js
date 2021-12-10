const dd=document.querySelector(".day");
const mm=document.querySelector(".month");
const yy=document.querySelector(".year");
const lucky=document.querySelector("#luck");

// console.log(dd);console.log(mm);console.log(yy);

btn.addEventListener("click",check);

function check(){
    console.log(`${dd.value}-${mm.value}-${yy.value}`);
    var luckyNumber=Number(lucky.value);
    // console.log(luckyNumber);


    var sum= Number(dd.value)+Number(mm.value)+Number(yy.value);
    console.log(sum);

    
    if(sum==0){
    document.querySelector("#msg").innerText="Enter proper date";    
    }
    else if(sum%luckyNumber==0){
    console.log("Congrats! your Birthday is Lucky");
    document.querySelector("#msg").innerText="Congrats! your Birthday is Lucky";    
    }

    else{
    console.log("OOps your Birthday is Unlucky");
    document.querySelector("#msg").innerText="OOps your Birthday is Unlucky";
    }


}
