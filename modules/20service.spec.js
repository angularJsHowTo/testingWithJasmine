/**
 * Created by georginahughes on 04/05/15.
 */
describe('The service', function () {

    var myService = undefined;

    beforeEach(function() {
        window.objects = [];

        module('myApp');

        inject(function (_myService_) {
            myService = _myService_;
        });
    });

    afterEach(function(){
        myService = undefined;
    });

    it('should exist', function() {
        expect(myService).not.toBeUndefined();
        expect(window.objects).not.toBeUndefined();
    });

    it('should have an add custom object function', function () {
        //arrange
        var key = "foo",
            value = "bar",
            customObject = {};

        customObject[key] = value;

        //act
        myService.addCustomObject(key, value);

        //assert
        expect(window.objects.length).toBeGreaterThan(0);
        expect(window.objects).toContain(customObject);
    });

    it('should have an add defined object function', function () {
        //arrange
        var value = "bar",
            definedObject = {};

        definedObject[value.split('').reverse().join('').toString()] = value;

        //act
        myService.addDefinedObject(value);

        //assert
        expect(window.objects.length).toBeGreaterThan(0);
        expect(window.objects).toContain(definedObject);
    });
});