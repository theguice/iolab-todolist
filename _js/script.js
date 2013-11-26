$(document).ready(function() {

	initList();

	var index = 0;

	$("#todo-form").submit( function(event) {
		event.preventDefault();

		if ($("input:first").val() != '') {
			localStorage[index] = $("input:first").val();
			$("#todo-list").append("<li>"+$( "input:first" ).val()+"<button class=\"todo-list-remove\">remove</button></li>");
			$("input:first").val('');
			$("input:first").css("border-color", "#ccc");

			index++;
			console.log(localStorage);
		} else {
			$("input:first").css("border-color", "#f66");
		}
	});	
	$('#todo-list').on('click', 'button', function(event){ 
		$(event.target.parentElement).slideUp(); 
	});

	/* Try to get and print geo-location */
    if (navigator.geolocation) {
    
    	function success(pos) {
    		var mapLat = pos.coords.latitude;
    		var mapLong = pos.coords.longitude;
    		//google.maps.event.addDomListener(window, 'load', initialize(37.869154, -122.290768, "map-cafe"));
    		//google.maps.event.addDomListener(window, 'load', initialize(mapLat, mapLong, "map-user"));
    		console.log("current position: ("+mapLat+" , "+mapLong+")");
    	};
    
    	function error() {
    		console.log("error retrieving geo-location.  did the user deny access?")
    	};

    	navigator.geolocation.getCurrentPosition(success, error);
    
    } /* end geo-location code */

});

function initList() {
	$.each(localStorage, function(index, val) {
		$("#todo-list").append("<li>"+val+"<button class=\"todo-list-remove\">remove</button></li>");
	});
}

function supports_html5_storage() {
		try {
		return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
		return false;
		}
}
