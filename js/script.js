alert("estamos conectados");

$(".btn-ver-menu").click(function() {
    $('.pagina-izquierda').addClass("paginaIzquierda2");

    setTimeout(() => {

        $('.pagina-derecha').addClass("paginaDerecha2");

    }, 1000);

});

$(".btnCerrar").click(function() {
    $('.pagina-derecha').removeClass("paginaDerecha2");


    setTimeout(() => {

        $('.pagina-izquierda').removeClass("paginaIzquierda2");

    }, 300);

});