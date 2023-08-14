console.log('Hola desde JS');
function saludo(){
    console.log('Hola desde la funcion saludo')
}

const saludo1 = function(){
    console.log('Hola desde la funcion anónima')
}

const saludo2 = () => {
    console.log('Hola desde la funcion flecha')
}

const formsValue = ()=>{
    const user_name = document.getElementById("user_name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    console.log(user_name);
    console.log(lastname);
    console.log(email);
}

const formsValue2 = () =>{
    const array_ids = ["user_name", "lastname", "email"];
    const array_values = [];
    for (let i = 0; i < array_ids.length; i++){
        array_values.push(document.getElementById(array_ids[i]).value);
    }
    console.log(array_values);
}