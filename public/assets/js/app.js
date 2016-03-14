/********************************************************* 
	NAMESPACE 
*********************************************************/
var APP = APP || {};

(function () {
    
    /********************************************************* 
    	LAUNCH APP
    *********************************************************/    
    APP.launcher = { 
        init: function() { 
            if (!window.location.hash) {
                window.location = '/#home';
            }
            APP.router.init();
        }
    };    
    
    /********************************************************* 
    	DOCUMENT READY
    *********************************************************/
    document.addEventListener("DOMContentLoaded", function () { // Not supported by IE8, but screw IE8 anyways ;)
        APP.launcher.init(); 
    });

}());