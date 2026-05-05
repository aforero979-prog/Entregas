class Persona {

    //Propiedades (Niveles de accesibilidad: Public, Private, Protected)

        #ojos;    //El # lo vuelve privated, se tiene que usar de acá para abajo.
        barba;
        genero;


    //Metodo Constructor: 
    
    constructor( colorOjos, tieneBaraba, genero = `Masculino` ) {

        this.ojos = colorOjos;
        this.barba = tieneBaraba;
        this.genero = genero;

    }

    //Metodo Getters y Setters:

    getOjos(){                          //Para obtener 
        return this.ojos; 
    }

    setOjos(nuevoColorOjos){            //Para asignar
        this.ojos = nuevoColorOjos
    }

    //Forma nueva de escribir el Getter y Setter:

    get eyeColor(){
        return this.ojos
    }

    set eyeColor(nuevoColorOjos){
        this.ojos = nuevoColorOjos
    }

    //Metodos:

    saludar(){
        console.log(`Mis ojos son color ${colorOjos}`)
    }


}