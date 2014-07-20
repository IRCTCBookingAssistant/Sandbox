; (function (window, document, undefined) {
    'use strict';
    var Greeter = (function () {
        function Greeter(message) {
            var msg = message;
            this.sayHello = function () {
                return "Hi " + message + "<br/>";
            };
        }
        return Greeter;
    })();

    window.onload = function () {
        var log = document.getElementById('content');
        var greeter = new Greeter("Anil");
        log.innerHTML += greeter.sayHello();
        var greeter2 = new Greeter("Sunil");
        log.innerHTML += greeter2.sayHello();
        log.innerHTML += greeter.sayHello();
        var el = document.getElementById('btnStart');
        el.addEventListener('click', function () {
            log.innerHTML += greeter.sayHello();
            log.innerHTML += greeter2.sayHello();
            log.innerHTML += greeter.sayHello();
        });
    };
})(window, document);