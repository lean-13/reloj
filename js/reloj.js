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

    let cambioBackground = () => {

        let background = $('.forma');
        let background2 = $('.forma2')

        if (hour > 13) {
            $(background).removeClass('moon');
            $(background).addClass('sol');
        }else {
            $(background).addClass('moon');
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