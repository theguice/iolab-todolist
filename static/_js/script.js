$(document).ready(function() {

	initList();

	var index = 0;

	$("#todo-form").submit( function(event) {
		event.preventDefault();

		var t = $("input:nth-child(1)").val();
		var d = $("input:nth-child(2)").val();
		console.log(t);
		console.log(d);
		var data = {'title': t, 'due': d};

		$.ajax({
		  type: "POST",
		  url: '/add',
		  data: data,
		  success: function(data) {
		  	appendToList(data['new_item_id'], data['title'], data['due']);
		  	console.log(data);
		  },
		  dataType: 'json'
		});

		/*
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
		*/
	});	
	$('#todo-list').on('click', 'button', function(event){ 
		$(event.target.parentElement).slideUp(); 
	});

	/* setup jquery datepicker */
	$( "#todo-form-due" ).datepicker("option", "dateFormat", "d MM, y");

	/* Try to get and print geo-location */
    if (navigator.geolocation) {
    
    	function success(pos) {
    		var mapLat = pos.coords.latitude;
    		var mapLong = pos.coords.longitude;
    		console.log("current position: ("+mapLat+" , "+mapLong+")");
    	};
    
    	function error() {
    		console.log("error retrieving geo-location.  did the user deny access?")
    	};

    	navigator.geolocation.getCurrentPosition(success, error);
    
    } /* end geo-location code */

});

function initList() {
	/*
	$.each(localStorage, function(index, val) {
		appendToList(val);
	});
	
	$.ajax({
	  type: "GET",
	  url: '/',
	  data: data,
	  success: function(data) {
	  	appendToList(data['new_item_id'], data['title']);
	  	console.log(data);
	  },
	  dataType: 'json'
	});
	*/
}

function appendToList(id, text, due) {
	$("#todo-list").append("<li id=\"item"+id+"\"><span class=\"todo-title\">"+text+"</span><span class=\"todo-due\">"+{{ todos[0]['due'] }}+"</span><button class=\"todo-list-remove\">remove</button></li>");
}

function supports_html5_storage() {
		try {
		return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
		return false;
		}
}
