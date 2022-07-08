$(document).ready(function () {
    
    let Phour = $('.date__horas');
    let Pminutes = $('.date__minutos');
    let Pday = $('.date__dia');
    let Pmonth = $('.date__mes');
    let Pyear = $('.date__año');

    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();

    let start = () => {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', '../json/particlesjs.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }
    
    
    let cambioBackground = () => {

        let background = $('.forma');
        let background2 = $('.forma2')

        // luna
        let ocultarMoon = () => {
            $(background).fadeOut(800);
            $(background).removeClass('moon');
        }
        let mostrarMoon = () => {
            $(background).addClass('moon');
            $(background).fadeIn(800);
        }
        // sol
        let mostrarSol = () => {
            $(background).addClass('sol');
            $(background).fadeIn(800);
        }
        let ocultarSol = () => {
            $(background).fadeOut(800);
            $(background).removeClass('sol')
        }

        // cambio de background
        let prueba = 6;
        if (prueba > 7) {
            ocultarMoon();
            mostrarSol();
        }else {
            ocultarSol();
            mostrarMoon();
            start();
        }   

    }


    let actualizarReloj = () => {

        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        // hour
        $(Phour).text(hour);
        // minutes
        if (minutes < 10) { minutes = "0" + minutes }
        $(Pminutes).text(minutes);
        // day
        $(Pday).text(semana[day]);
        // month
        $(Pmonth).text(meses[month]);
        // year
        $(Pyear).text(year);

        

    }

    cambioBackground()
    actualizarReloj();

});