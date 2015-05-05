/**
 * Created by georginahughes on 04/05/15.
 */
angular
    .module('myApp')
    .service('myService', myService);

function myService($window){
    return {
        addCustomObject: addCustomObject,
        addDefinedObject: addDefinedObject
    };

    function addCustomObject(key,value){
        var object = {};

        object[key] = value;

        $window.objects.push(object);

        return;
    }

    function addDefinedObject(value){
        var object = {};

        object[value.split('').reverse().join('').toString()] = value;

        $window.objects.push(object);

        return;
    }
}