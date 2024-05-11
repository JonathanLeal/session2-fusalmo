class Reloj {
    constructor() {
        this.actualizarHora();
    }

    actualizarHora() {
        var fecha = new Date();

        this.hora = fecha.getHours();
        this.minutos = fecha.getMinutes();
        this.segundos = fecha.getSeconds();

        this.hora = this.hora < 10 ? '0' + this.hora : this.hora;
        this.minutos = this.minutos < 10 ? '0' + this.minutos : this.minutos;
        this.segundos = this.segundos < 10 ? '0' + this.segundos : this.segundos;
    }

    mostrarHora() {
        var mensaje = 'La hora actual es: ' + this.hora + ':' + this.minutos + ':' + this.segundos;
        console.log(mensaje);
    }

    empezar() {
        this.mostrarHora();
        setInterval(() => {
            this.actualizarHora();
            this.mostrarHora();
        }, 1000);
    }
}

var reloj = new Reloj();
reloj.empezar();
