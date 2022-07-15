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

    function ifFunc(input){
        if(input === 5){
            return true
        }
        else if(input === 10){
            return false
        }
        else{
            return "Out of range"
        }
    }

    function switchCase(input){
        let toRet
        switch (input){
            case "Monday":
                toRet = 1;
                break;
            case "Tuesday":
                toRet = 2;
                break;
            default:
                toRet = -1
                break;
            
        }
        return toRet;
    }

    console.log(a, b, c+d, !bool, structAlike["a"], structAlike.b)
    console.log(someArray[0])
    printToConsole("Hello")
    printToConsole(square(53.5))
    console.log(ifFunc(5), ifFunc(10), ifFunc(50))
    console.log(switchCase("Monday"), switchCase("Sunday"))
}
//console.log(a, b) //won`t work because let is enclosed in block