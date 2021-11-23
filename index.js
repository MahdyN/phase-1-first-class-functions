function receivesAFunction (callback) {
    return callback();
}
receivesAFunction(function() {console.log('I am a callback function')})



function returnsANamedFunction() {
    return function namedFunction() {
        console.log('I am a named function');
    }
}
returnsANamedFunction();


function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am a named function');
    }
}
returnsAnAnonymousFunction();