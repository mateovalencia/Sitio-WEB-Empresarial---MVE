$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('../json/servicios.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.descripcion.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+ val.name +'</h2>';
				output += '<a href=' + val.linkpage + '><img src="'+ val.imgPath +'_tn.jpg" alt="'+ val.name +'" /></a>';
				output += '<p>'+ val.descripcion +'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});
