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

    console.log(a, b, c+d, !bool, structAlike["a"], structAlike.b)
}
//console.log(a, b) //won`t work because let is enclosed in block