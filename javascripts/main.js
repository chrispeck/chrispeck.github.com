var Colorizr = {
  letters : '0123456789ABCDEF',
  hex     : 'FEDCBA9876543210',

  randomColor: function() {
    var color = '';

    for(var i = 0; i < 6; i++) {
      var index = Math.random() * 15 << 0;
      color += Colorizr.letters[index];
    }

    return '#' + color;
  },

  complementaryColor: function(color) {
    var ch;
    var compliment = '';

    for(var i = 1; i < color.length; i++) {

      ch = color.charAt(i);

      for(var j = 0; j < Colorizr.hex.length; j++) {
        if (ch === Colorizr.letters.charAt(j)) {
          compliment += Colorizr.hex.charAt(j);
        }
      }
    }

    return '#' + compliment;
  },

  go: function() {
    var elements = $('body');
    var color, compliment;

    $('body').find('*').each(function() {
      var color = Colorizr.randomColor();
      var compliment = Colorizr.complementaryColor(color);

      $(this).css('background', color);
      $(this).css('color', compliment);
    });
  },

  init: function(interval) {
    window.setInterval(function() {
      Colorizr.go();
    }, interval);
  },

};

window.addEventListener('load', function(){
  Colorizr.init(2000);
});
