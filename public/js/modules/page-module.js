/********************************************************* 
	PAGE MODULE [with ajax lib: NanoAjax]
*********************************************************/
APP.page = (function () {
    var mainSelector = document.querySelector('main');     
    
    var feed = function () {         
        nanoajax.ajax({
            url: 'api/feed' // Get the template.
        }, function (status, template) {
            if ( status == 200 ) { 
                //console.log(template);
                mainSelector.innerHTML = template;
            }
        });    
    };
 
    var appearance = function (uuid) { 
        nanoajax.ajax({
            url: 'api/appearance/'+uuid // Get the template.
        }, function (status, template) {
            if ( status == 200 ) { 
                //console.log(template);
                mainSelector.innerHTML = template;
                APP.page.appearanceToggle();
            }
        });         
    };

    /********************************************************* 
        src: https://github.com/donnywals/looklive-server
    *********************************************************/    
    var appearanceToggle = function() { 
        var firstProduct = document.querySelector('.appearance__product');
        var firstIndicator = document.querySelector('.appearance__indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.appearance__indicator');

        firstProduct.classList.add('appearance__product--active');
        firstIndicator.classList.add('appearance__indicator--active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.appearance__product--active')
                    .classList.remove('appearance__product--active');

                document
                    .querySelector('.appearance__indicator--active')
                    .classList.remove('appearance__indicator--active');

                document
                    .querySelector('.appearance__product[data-uuid="' + id + '"]')
                    .classList.add('appearance__product--active');

                event.currentTarget.classList.add('appearance__indicator--active');
            });
        });
    };
    
    return {
        feed: feed,
        appearance: appearance,
        appearanceToggle: appearanceToggle
    };    
    
})();