class ErrorSensor {
    constructor() {
        super("¡El sesor está roto!");
    }
}

class ErrorTemperatura {
    constructor(temperatura) {
        if (temperatura >= 500) {
            super("¡La temperatura ha superado el límite! " + "temperatura actual: " + temperatura);
            this.temperatura = temperatura;
        }
    }
}

//exercici 1
 function checkHumidityLevel(x) {
     if (x >= 70) {
        alert("ADVERTENCIA, el nivel de humedad supera el 70%");
    }
}


//exercici 2
function reportOverheating(temp) {
    if (temp == null) {
        throw new ErrorSensor();

    } else if (temp > 500) {
        throw new ErrorTemperatura(temp);
    }
//mas de esto mal 500 °C

}

//exercici 3
function monitorTheMachine({check,alertDeadSensor,alertOverheating,shutdown}) {
    try {
        check() //primero comprobamos la temperatura de la maquina
      } catch (errorActivado) {
        if (ErrorSensor) {
            alertDeadSensor();
        }else if (ErrorTemperatura) {
            if (ErrorTemperatura.temperatura  <  600) {
                alertOverheating();
            }else {
                shutdown();
            }

        }
        
      }
}
    
