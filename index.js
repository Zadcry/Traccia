function verificarCodigo() {
            const codigoIngresado = document.getElementById("codigo").value;
            const codigoCorrecto = "我是代碼";
            
            if (codigoIngresado === codigoCorrecto) {
                // Cambia la URL a la que quieres redirigir
                window.location.href = "https://it.wikipedia.org/wiki/Unità_a_nastro_magnetico";
            } else {
                alert("Código incorrecto. Inténtalo de nuevo.");
            }
        }
