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
        
        particlesJS.load('particles-js', '../json/particlesjsNight.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }
    let cloud = () => {
        particlesJS.load('particles-js', '../json/particlesjsDay.json', function() {
            console.log('callback - particles.js config loaded');
        });
    }
    

    let cambioBackground = () => {

        let background = $('.forma');
        let text = $('.reloj__hora')
        let text2 = $('.reloj__fecha')
        // luna
        let ocultarMoon = () => {
            $(background).fadeOut(800);
            $(background).removeClass('moon');
        }
        let mostrarMoon = () => {
            $(background).addClass('moon');
            $(background).fadeIn(800);
        }
        // text
        let textMoon = () => {
            $(text).removeClass('textDay');
            $(text).addClass('textNight');
            $(text).fadeIn(800);
        }
        let textMoon2 = () => {
            $(text).removeClass('textDay2');
            $(text2).addClass('textNight2');
            $(text2).fadeIn(800);
        }
        let textNight = () => {
            textMoon();
            textMoon2();
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
        // text
        let textSol = () => {
            $(text).removeClass('textNight');
            $(text).addClass('textDay');
            $(text).fadeIn(800);
        }
        let textSol2 = () => {
            $(text).removeClass('textNight2');
            $(text2).addClass('textDay2');
            $(text2).fadeIn(800);
        }
        let textDay = () => {
            textSol();
            textSol2();
        }

        // cambio de background
        let prueba = 6;
        if (hour > 7) {
            ocultarMoon();
            mostrarSol();
            textDay();
            cloud();
        }else {
            ocultarSol();
            mostrarMoon();
            textNight();
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