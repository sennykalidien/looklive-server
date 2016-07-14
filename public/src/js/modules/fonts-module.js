/********************************************************* 
    FONTS APP
*********************************************************/
APP.fonts = (function () {

    function init() {
        var observer = new FontFaceObserver('Raleway');        
        Promise.all([
          observer.check()
        ]).then(function () {
            document.documentElement.className += "fonts-loaded";
        });
    }
    
    return {
        init: init
    };

}());