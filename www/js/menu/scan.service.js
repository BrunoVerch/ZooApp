(function() {
    'use strict';

    angular.module('zooapp')
           .service('scanService',scanService);

    function scanService(){
        
        this.scan = function(sucess,error){
            cordova.plugins.barcodeScanner.scan(
                sucess, 
                error,
                {
                    "preferFrontCamera" : true,
                    "showFlipCameraButton" : true, 
                    "prompt" : "Coloque o qrcode na área de scan",
                    "formats" : "QR_CODE"
                });
        }
    }
})();