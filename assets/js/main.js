$(document).ready(function() {
	$('[data-item="phone"]').mask("9 (999) 999-99-99");
	var form = $('[data-form="send"]');
	form.validator();
	form.ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('map', {
			center: [55.1435064, 61.4476156],
			zoom: 16,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
		myPlacemark = new ymaps.Placemark([55.1435064, 61.4476156], {
			hintContent: [
			''
		].join(''),
			balloonContentBody: [
			''
		].join('')
		}, {
			iconLayout: 'default#image'
			
		});
		myMap.geoObjects.add(myPlacemark);
	}
	
});