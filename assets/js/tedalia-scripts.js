(function(){
	var dir = "assets/images/recommendations/";
    var fileextension = ".png";
    var imgTags = '';
    const images = [
        'frazer',
        'davit',
//        'nastri',
        'robles'
      ];

    images.forEach(url => {
        var imgTag = '<img src="http://' +window.location.host+ '/'+dir + url + fileextension + '" alt>';
        imgTags += imgTag;
        console.log('image : '+imgTag);
    });
	
    document.getElementById('vertical-images').innerHTML = imgTags;
})();