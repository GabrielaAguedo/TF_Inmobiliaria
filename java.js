const expresiones = {
    nom: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
    msn: /^[a-zA-ZÀ-ÿ\s]{3,100}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^\d{7,14}$/,
    presu: /^\d{7,14}$/,
},
  form = document.getElementById('formulario'),
  inputs = document.querySelectorAll('#formulario input'),
  
  campos = {
    nombre: false,
    email: false,
    telefono: false,
    mensaje: false,
    presupuesto: false
};



let textoArea = document.querySelector(".textarea__contacto");
console.log("textoArea");

textoArea.addEventListener('keyup', validarArea);
textoArea.addEventListener('blur', validarArea);


function validarArea(){
    textAreaMsj = document.querySelector('#textAreaMensaje'); 
let long = textoArea.value;
if(long !== "" && long.length > 15){
    textoArea.classList.remove('border-danger');
    textoArea.classList.add('border-success');
    textoArea.classList.remove('d-flex');
}else {
    textoArea.classList.add('border-danger');
    textoArea.classList.add('d-flex');
    textAreaMsj.classList.remove('invalid-feedback');
}
}

const validarForm = (e)=>{
switch (e.target.name){
    case 'nombre':
            validarCampo(expresiones.nom, e.target, 'nombre');
        break;

    case 'email':
        validarCampo(expresiones.correo, e.target, 'email');
        break;
    
    case 'telefono':
        validarCampo(expresiones.tel, e.target, 'telefono');
            break;
    
    case 'mensaje':
        validarCampo(expresiones.msn, e.target, 'mensaje');
        break;
    
    case 'presupuesto':
        validarCampo(expresiones.presu, e.target, 'presupuesto');
            break;


}
}


const validarCampo = (expresion, input, campo)=>{
if (expresion.test(input.value)){
    document.getElementById(`${campo}`).classList.remove('border-danger');
    document.getElementById(`${campo}`).classList.add('border-success');
    document.querySelector(`.invalid-feedback-${campo}`).classList.remove('d-flex');
    campos[campo] = true;
}else{
    document.getElementById(`${campo}`).classList.add('border-danger');
    document.querySelector(`.invalid-feedback-${campo}`).classList.add('d-flex');
}
}



inputs.forEach((input)=>{
input.addEventListener('keyup', validarForm);
input.addEventListener('blur', validarForm);
});



form.addEventListener('submit', (e) => {
e.preventDefault();

const contacTel = document.getElementById('contacTel');
const contacCorreo = document.getElementById('contacCorreo');
if (campos.nombre && campos.email && campos.telefono && campos.mensaje && campos.presupuesto && (contacTel.checked || contacCorreo.checked)){
    location.href = "index.php";

}
else{
    Swal.fire({
        title: 'Error!',
        text: 'Debes completar el formulario',
        icon: 'error',
        confirmButtonText: 'Ok!'
})

}
});










