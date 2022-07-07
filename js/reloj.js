$(document).ready(function () {
    
    let Phour = $('.date__horas');
    let Pminutes = $('.date__minutos');
    let Pday = $('.date__dia');
    let Pmonth = $('.date__mes');
    let Pyear = $('.date__año');

    let actualizarReloj = () => {
        let time = new Date();
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let day = time.getDay();
        let month = time.getMonth();
        let year = time.getFullYear();

        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        // hour
        $(Phour).text(hour);
        // minutes
        $(Pminutes).text(minutes);
        // day
        $(Pday).text(semana[day]);
        // month
        $(Pmonth).text(meses[month]);
        // year
        $(Pyear).text(year);


    }

    actualizarReloj();

});