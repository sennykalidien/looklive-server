/*********************************************************  
	ROUTER MODULE [with router lib: Routie]
*********************************************************/      
APP.router = (function () {
    var init = function() {
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
    