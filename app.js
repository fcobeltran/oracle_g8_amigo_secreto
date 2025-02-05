// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Validaciones
    if (nombre === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }
    
    if (listaDeAmigos.includes(nombre)) {
        alert('Este amigo ya está en la lista');
        return;
    }
    
    // Agregar amigo a la lista
    listaDeAmigos.push(nombre);
    
    // Crear elemento de lista
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    
    // Limpiar input
    inputAmigo.value = '';
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    
    // Validar que haya suficientes participantes
    if (listaDeAmigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo');
        return;
    }
    
    // Crear copia de la lista para el sorteo
    let amigosDisponibles = [...listaDeAmigos];
    let asignaciones = [];
    
    // Realizar el sorteo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigoActual = listaDeAmigos[i];
        let indiceAleatorio;
        
        do {
            indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
        } while (amigosDisponibles[indiceAleatorio] === amigoActual && amigosDisponibles.length > 1);
        
        let amigoSecreto = amigosDisponibles[indiceAleatorio];
        asignaciones.push(`${amigoActual} → ${amigoSecreto}`);
        amigosDisponibles.splice(indiceAleatorio, 1);
    }
    
    // Mostrar resultados
    asignaciones.forEach(asignacion => {
        const li = document.createElement('li');
        li.textContent = asignacion;
        resultado.appendChild(li);
    });
}
