//1.HTML hissənizdə bir formunuz və tablenız olsun.Formda firstname,lastname,age,isMarried inputları olsun.İnput boş olduqda user yaradılmasın.Bütün inputları doldurduqdan sonra user yaradılsın və dataları table-a əlavə olunsun.


//getElementById
const form = document.getElementById('form')
const table = document.getElementById('table')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastName')
const age = document.getElementById('age')
const isMarried = document.getElementById('ismaried')
const btn = document.getElementById('btn')



//Regex 
const regex = /^[a-zA-ZəƏŞşÇçÖöğıüÜğ ,.'-]+$/;




//Events
btn.addEventListener('click',(event)=>{
    event.preventDefault()

    // inputlarin value deyer
    const firstNameValue = firstname.value;
    const lastNameValue = lastname.value;
    const ageValue = age.value;
    const isMarriedValue = isMarried.checked ? "Evli" : "Bekar";
    
    if (isMarried.checked =true) {
        console.log('evli');
    }
    else{
        console.log('bekar');
    }

    //createElement
    const user = document.createElement('tr')
    const firstNameTd = document.createElement('td')
    const lastNameTd = document.createElement('td')
    const ageTd = document.createElement('td')
    const isMariedTd = document.createElement('td')
    

    //Şərt boş qalmasın
    if (firstname.value=== '' ||  lastname.value=== ''   ) {
        alert('Inputlari tam doldurun')
        return -1
    }
    else{
        user.appendChild(firstNameTd)
        user.appendChild(lastNameTd)
    }

    // Şərt Regex
    if (!regex.test(firstNameValue) || !regex.test(lastNameValue)) {
        alert('Ad və soyad yalnız hərflərdən ibarət ola bilər.');
        return;
    }

    // Şərt yas menfi ola bilmez
    if (age.value=== '' || age.value<0) {
        alert("yasi duzgun daxil edin")
        return -1
    }
    else{
        user.appendChild(ageTd)
    }
    if (isMarried.checked) {
        user.appendChild(isMariedTd);
    }

    // append user
    table.appendChild(user)

    // Text Content
    firstNameTd.textContent = firstNameValue;
    lastNameTd.textContent = lastNameValue;
    ageTd.textContent = ageValue;
    isMariedTd.textContent = isMarriedValue;


    // value inputlari submit eledikden sonra sifirlamaq
    firstname.value = ''
    lastname.value = ''
    age.value = ''
    isMarried.checked = false;
})


