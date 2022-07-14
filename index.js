console.log("Hello world!");
{
    var a = "Hello";
    let b = "World!";
    let c = 5;
    let d = 5;
    let bool = false;

    let structAlike = {
        a: 1,
        b: 2,
    }

    let someArray = ["red", "green", "blue", 5, true]

    function printToConsole(input){
        console.log(input)
    }
    
    function square(input){
        return input*input
    }

    console.log(a, b, c+d, !bool, structAlike["a"], structAlike.b)
    console.log(someArray[0])
    printToConsole("Hello")
    printToConsole(square(53.5))
}
//console.log(a, b) //won`t work because let is enclosed in block