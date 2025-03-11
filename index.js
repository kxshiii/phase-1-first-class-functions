function receivesAFunction(Spy) {
  Spy();
}
function add(){}
function returnsANamedFunction (){
    return add
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log("I am a anonymous function!")
    }
}
    