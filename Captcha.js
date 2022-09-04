function Captcha_Generator()
{
    let alpha=new Array('A','D','T','U','L','k','1','8','9','1','8','9');


    var alpha1=alpha[Math.floor(Math.random()*10)];
    var alpha2=alpha[Math.floor(Math.random()*10)];
    var alpha3=alpha[Math.floor(Math.random()*10)];
    var alpha4=alpha[Math.floor(Math.random()*10)];
    var alpha5=alpha[Math.floor(Math.random()*10)];
    var alpha6=alpha[Math.floor(Math.random()*10)];
    
    let result= alpha1+alpha2+alpha3+alpha4+alpha5+alpha6;
    document.getElementById("Generate").value=result
}

function check_it()
{
    const a = document.getElementById("Generate").value
    const b = document.getElementById("valid").value
    
    if(a==b)
    {
        alert("Your Entered Captcha is valid");
    }
    else{
        alert("Fail to check Validity,, Entered Captcha is Invalid");
    }

    document.getElementById("Man")
}