//Esto es la función para el random, luego la utilizaremos para el metodo de la clase.
const random = {
    random(min, max){
        return Math.floor(Math.random()*(max-min)+min);
    }
}

//Clase para crear los coches
class Coche {
    constructor(marca, id, tipo, velocidad, posicion, suerte){
        this.marca = marca;
        this.id = id;
        this.tipo = tipo;
        this.velocidad = velocidad;
        this.posicion = 100;
        this.suerte = random.random(1,20);
    }
//El metodo recorrido es lo que resta una cantidad random de km recorridos
//a la posicion inicial de los coches. La suerte decide 
//el coche que resta km al total y gana al llegar a 0. Puedes darle la vuelta y poner que salen desde 0 y que en lugar de restar al total, sumas al numero inicial
// y que gane el que primero llegue a 100 o a lo que quieras. 
    recorrido(){
        this.posicion -= this.suerte;
        this.suerte = random.random(1,20);
    }
}

//Instanciamos los coches

let coche1 = new Coche('Mercedes', '1', 'Deportivo', '150km/h', 100, 1);
let coche2 = new Coche('Tesla', '2', 'electrico', '130km/h', 100, 1);


//Función para limpiar el juego cuando hayas terminado la carrera

const clean = () => {
    window.location.reload();
}

//Esto es para mostrar los coches

//Esto es por si quieres meterle una barrita por ejemplo. Con esto vinculamos el ID de la etiqueta en HTML con el nombre que queremos darle a esa variable en JS
let stats1 = document.getElementById('stats1');
let stats2 = document.getElementById('stats2');

//Y esto para el ganador
let winner = document.getElementById('winner');


//Y esta funcion es para la carrera. Cada vez que pulses el botón, se activa el metodo de la clase, y de manera random reducen X km del total.
//luego entramos en el if, y si alguno de los dos ha llegado a 0, lanzamos el mensaje y la img del ganador. También mostramos las barras
//al darle a iniciar

const corre = () => {
    coche1.recorrido();
    coche2.recorrido();

    if(coche1.posicion <= 0){
        winner.innerHTML = `<img class="winner" src="img/winner.png" alt="winner" > </br> The winner is Player 1 with ${coche1.marca}`
    }
    if(coche2.posicion <= 0){
        winner.innerHTML = `<img class="winner" src="img/winner.png" alt="winner" > </br> The winner is Player 2 with ${coche2.marca}`
    }

    stats1.innerHTML = `<div class='kmbar'><div id='kmbar1'></div>`;
    stats2.innerHTML = `<div class='kmbar'><div id='kmbar2'></div>`;
    document.getElementById("kmbar1").style.width = `${coche1.posicion}`+"%";
    document.getElementById("kmbar2").style.width = `${coche2.posicion}`+"%";
}