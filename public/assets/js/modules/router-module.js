/*********************************************************  
	ROUTER MODULE [with router lib: Routie]
*********************************************************/      
APP.router = (function () {
    function init () {
        routie({
            'home': function() {
                APP.page.feed();
            },
            'appearance/:uuid': function(uuid) {
                APP.page.appearance(uuid);
            }
        });
    };
    
    return {
        init: init
    };     
    
})();
    