/********************************************************* 
	PAGE MODULE [with Promise]
*********************************************************/
APP.page = (function () {
    var mainSelector = document.querySelector('main');

    function request(method, url) { // src: http://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    };

    function feed() {
        request('GET', 'api/feed')
            .then(function (template) {
                mainSelector.innerHTML = template;
            })
            .catch(function (err) {
                console.error('Augh, there was an error!', err.statusText);
            });
    };

    function appearance(uuid) {
        request('GET', 'api/appearance/' + uuid)
            .then(function (template) {
                mainSelector.innerHTML = template;
                APP.page.appearanceToggle();
            })
            .catch(function (err) {
                console.error('Oh no, there was an error!', err.statusText);
            });        

    };

    function appearanceToggle() { //src: https://github.com/donnywals/looklive-server
        var firstProduct = document.querySelector('.appearance__product');
        var firstIndicator = document.querySelector('.appearance__indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]');
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
        request: request,
        feed: feed,
        appearance: appearance,
        appearanceToggle: appearanceToggle
    };

})();