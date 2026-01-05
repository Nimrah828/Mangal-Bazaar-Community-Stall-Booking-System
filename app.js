function nextStep(){
    let name = document.getElementById("userName").value;
    let phone = document.getElementById("userPhone").value;

    if(name === "" || phone === ""){
        alert("Please fill all details");
        return;
    }

    document.getElementById("step1").style.display="none";
    document.getElementById("step2").style.display="block";
}

function paymentDone(){
    document.getElementById("successMsg").style.display="block";

    setTimeout(()=>{
        document.getElementById("successMsg").style.display="none";
        document.getElementById("step2").style.display="none";
        document.getElementById("step1").style.display="block";
    },3000);
}
