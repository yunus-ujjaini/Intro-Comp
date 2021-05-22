function validate(){
    let Fname=document.getElementById("fname");
    let Lname=document.getElementById("lname");
    let Email=document.getElementById("email");
    let Pass=document.getElementById("password");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passstring=new String(Pass.value);
    if(Fname.classList.contains("FName-input")==true)
    {
        Fname.classList.remove("FName-input");
        let elem=document.getElementById("FName");
        elem.style.display='none';
    }
    if(Lname.classList.contains("LName-input")==true)
    {
        Lname.classList.remove("LName-input");
        let elem=document.getElementById("LName");
        elem.style.display='none';
    }
    if(Email.classList.contains("Email-input")==true)
    {
        Email.classList.remove("Email-input");
        let elem=document.getElementById("EmailEmpty");
        elem.style.display='none';
        elem=document.getElementById("EmailWrong");
        elem.style.display='none';
    }
    if(Pass.classList.contains("Password-input")==true)
    {
        Pass.classList.remove("Password-input");
        let elem=document.getElementById("PasswordEmpty");
        elem.style.display='none';
        elem=document.getElementById("PasswordWrong");
        elem.style.display='none';
    }
    
    if(Fname.value=="")
    {
        Fname.classList.add("FName-input");
        let elem=document.getElementById("FName");
        elem.style.display='block';
    }
    if(Lname.value=="")
    {
        Lname.classList.add("LName-input");
        let elem=document.getElementById("LName");
        elem.style.display='block';
    }
    if(Email.value=="")
    {
        Email.classList.add("Email-input");
        let elem=document.getElementById("EmailEmpty");
        elem.style.display='block';
    }
    else if(!Email.value.match(validRegex))
    {
        Email.classList.add("Email-input");
        let elem=document.getElementById("EmailWrong");
        elem.style.display='block';
    }
    if(Pass.value=="")
    {
        Pass.classList.add("Password-input");
        let elem=document.getElementById("PasswordEmpty");
        elem.style.display='block';
    }
    else if(passstring.length<8)
    {
        Pass.classList.add("Password-input");
        let elem=document.getElementById("PasswordWrong");
        elem.style.display='block';
    }

    

}