$(document).ready(function() {
	console.log("The document is ready!");
	$( ".light" ).on( "click", function() {
  	$( 'body' ).css( "background", "#000 url(img/tileable_wood_texture.png) repeat" );
	});
	$( ".dark" ).on( "click", function() {
  	$( 'body' ).css( "background", "#000 url(img/dark_wood.png) repeat" );
	});
	$( ".forest" ).on( "click", function() {
  	$( 'body' ).css( "background", "#000 url(img/forest.jpg) repeat" );
  	$( 'body' ).css( "background-size", "cover" );
	});
	$( ".low" ).on( "click", function() {
		$( ".image-container" ).html($( ".home" ).sort(priceAscending));
	});
	$( ".high" ).on( "click", function() {
		$( ".image-container" ).html($( ".home" ).sort(priceDescending));
	});

  function priceAscending(a, b) {
    return ($(b).data("price")) < ($(a).data("price")) ? 1 : -1;
  }
  function priceDescending(a, b) {
    return ($(b).data("price")) > ($(a).data("price")) ? 1 : -1;
  }

})
