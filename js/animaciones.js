$(document).ready(function() {
    // Animación de imagen
    $('#imagePNG').animate({
      width: '0%'
    }, 5000);
    
    $('#imageSVG').animate({
        width: '0%'
      }, 3000);
      

    // Animación de texto
    $('#sobreNosotros').animate({
        fontSize: '3em'
      }, 10000);


    // animacion scroll desaparición de verdura
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1500) {
        $('#gallery').fadeIn(1000);
      } else {
        $('#gallery').fadeOut(5000);
      }
    });
  });