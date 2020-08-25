$(window).load(function() {

    Webcam.set({
        width: 320,
        height: 240,
        dest_width: 320,
        dest_height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90,
        force_flash: false,
        swfURL: '/ArmMpProcForms/webcam.swf' //to download the swf
    });
    var id_cam = $('.cameramy')[0].getAttribute('id');        
    Webcam.attach(id_cam);
});


function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
        // display results in page
        var id_pho = $('.photomy')[0].getAttribute('id');
        var id_tex = $('.textmy>input')[0].getAttribute('id');
        document.getElementById(id_pho).innerHTML = '<img id="my_photo_snapshot_img" src="'+data_uri+'"/>';        
        document.getElementById(id_tex).setAttribute('value',data_uri)
        $('#' + id_tex).change();
        
    } );
}

