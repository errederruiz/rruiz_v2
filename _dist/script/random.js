$( function() {
  $( "#click-me" ).draggable();
} );

for (var i=1; i <= 3; i++) {
	var x = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
	var y = Math.max(0, Math.min(60, Math.ceil(Math.random() * 100)));
	$('#click-me').css({
		top: y + '%',
		left: x + '%'
	}).appendTo('body');
}


// $('#click-me').hover(
//     function() {
//         var glyph = new Array('✌︎', '☝︎', '✍︎', '☜', '☞','♔','♕','♖','♗','♘','☹︎','✎','✏︎','✐','☕︎','⚅','⚄','⚃','⚂','⚁','⚀');
//         var x = glyph.length;
//         var random_glyph = Math.floor(x*Math.random());
//
//         var $this = $(this); // caching $(this)
//         $this.data('initialText', $this.text());
//         $this.text(random_glyph);
//     },
//     function() {
//         var $this = $(this); // caching $(this)
//         $this.text($this.data('initialText'));
//     }
// );

// $('#click-me').hover(
//   function() {
//     var example = ['✌︎', '☝︎', '✍︎', '☜', '☞','♔','♕','♖','♗','♘','☹︎','✎','✏︎','✐','☕︎','⚅','⚄','⚃','⚂','⚁','⚀'];
//
//     textSequence(0);
//     function textSequence(i) {
//       if (example.length > i) {
//           setTimeout(function() {
//             document.getElementById("click-me").innerHTML = example[i];
//             textSequence(++i);
//           }, 700); // 1 second (in milliseconds)
//       } else if (example.length == i) { // Loop
//           textSequence(0);
//       }
//     }
//
//   }
// );
