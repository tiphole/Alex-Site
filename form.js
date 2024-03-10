const forms = document.getElementsByClassName("form");
const email1 = document.getElementById("email-input");
const email2 = document.getElementById("email-verify");
console.log(forms)
Array.from(forms).forEach(form => {
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event){
    if(email1.value!==email2.value){
        email2.style.background= 'red';
        event.preventDefault() 
    }
}