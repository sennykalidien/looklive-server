/********************************************************* 
	NAMESPACE 
*********************************************************/
var APP = APP || {};

/********************************************************* 
    LAUNCH APP
*********************************************************/ 
APP.launcher = (function () {
     
    function init() {     
        document.addEventListener("DOMContentLoaded", function () { 
            APP.router.init();
            APP.serviceworker.init();
            APP.fonts.init();
        });            
    };    
    
    return { 
        init: init
    };
    
}());

APP.launcher.init();