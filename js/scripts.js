function calcular() {
    var precio = parseFloat(document.getElementById('p_producto').value);
    var unidades = parseInt(document.getElementById('u_producto').value);

    var impuesto = parseFloat(document.getElementById('iva').value);
    var beneficio = parseFloat(document.getElementById('beneficio').value);

    var categoria = document.getElementById('categoria').value;

    switch (categoria) {

        case '15.45':
            var porcentaje = 15.45;

            var calculo = precio * unidades * porcentaje / 100;

            var calculo_1 = precio * unidades * impuesto / 100;

            var calculo_2 = precio * unidades * beneficio / 100;

            resultado = precio + calculo + calculo_1 + calculo_2;

            break;

        case '12.36':
            var porcentaje = 12.36;

            var calculo = precio * unidades * 12.36 / 100;

            var calculo_1 = precio * unidades * impuesto / 100;

            var calculo_2 = precio * unidades * beneficio / 100;

            resultado = precio + calculo + calculo_1 + calculo_2;

            break;

        case '7.21':
            var porcentaje = 7.21;

            var calculo = precio * unidades * porcentaje / 100;

            var calculo_1 = precio * unidades * impuesto / 100;

            var calculo_2 = precio * unidades * beneficio / 100;

            resultado = precio + calculo + calculo_1 + calculo_2;

            break;

        case '8.24':

            var porcentaje = 8.24;

            var calculo = precio * unidades * porcentaje / 100;

            var calculo_1 = precio * unidades * impuesto / 100;

            var calculo_2 = precio * unidades * beneficio / 100;

            resultado = precio + calculo + calculo_1 + calculo_2;

            break;

        case '46.35':

            var porcentaje = 46.35;

            var calculo = precio * unidades * porcentaje / 100;

            var calculo_1 = precio * unidades * impuesto / 100;

            var calculo_2 = precio * unidades * beneficio / 100;

            resultado = precio + calculo + calculo_1 + calculo_2;

            break;

        case 'condicional_1':


            if (precio >= 50) {

                var porcentaje = 15.45;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            } else if (precio <= 50) {

                var porcentaje = 9.27;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            }

        case 'condicional_2':


            if (precio >= 10) {

                var porcentaje = 8.24;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            } else if (precio <= 10) {

                var porcentaje = 15.45;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            }
            break;

        case 'condicional_3':


            if (precio >= 100) {

                var porcentaje = 15.45;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            } else if (precio <= 100) {

                var porcentaje = 8.24;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            }
        case 'condicional_4':


            if (precio >= 200) {

                var porcentaje = 15.45;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            } else if (precio <= 200) {

                var porcentaje = 10.30;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            }
        case 'condicional_5':


            if (precio >= 250) {

                var porcentaje = 20.60;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            } else if (precio <= 250) {

                var porcentaje = 5.15;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            }
        case 'condicional_6':


            if (precio >= 250) {

                var porcentaje = 15.45;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            } else if (precio <= 250) {

                var porcentaje = 5.15;

                var calculo = precio * unidades * porcentaje / 100;

                var calculo_1 = precio * unidades * impuesto / 100;

                var calculo_2 = precio * unidades * beneficio / 100;

                resultado = precio + calculo + calculo_1 + calculo_2;

            }

        default:
            resultado = 0;
            break;
    }

    document.getElementById('resultado').innerHTML = "PVD (Precio de venta al distribuidor) :<b> " + precio + " €.</b> <br /><br />Beneficio seleccionado:<b> " + beneficio +
        " % </b>de beneficio a aplicar. <br /><br />Impuesto aplicado:<b> " + impuesto + " %  de IVA.</b> <br /><br />Unidades:<b> " + unidades + "</b> unidad/es. <br /><br />Porcentaje de comisión de categoría aplicada:<b> " + porcentaje + " %</b><br/><br/><br/><h2>PVP Final<br/>" + resultado.toFixed(2) + " €.</h2>";
    ;

}


