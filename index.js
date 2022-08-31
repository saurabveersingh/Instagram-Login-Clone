document.addEventListener('DOMContentLoaded',()=>{
    const user = document.querySelector(".user");
    const pass = document.querySelector(".pass");
    const sub = document.querySelector(".submit");
    const form= document.querySelector(".form");

    function redirectToInstagram(){
        // compare values to database and allow access

        user.value=""
        pass.value=""
        enableSubmit();
        window.location = "https://www.instagram.com";
    }

    function enableSubmit(){
        if(user.value!=="" && pass.value!=="" ){
            sub.disabled=false;
            sub.style.backgroundColor = '#0095f6'
        }
        else{
            sub.style.backgroundColor = '#a0d5f8'
            sub.disabled=true;
        }
    }
    user.addEventListener('input',enableSubmit)
    pass.addEventListener('input',enableSubmit)
    sub.addEventListener('click',redirectToInstagram)
})