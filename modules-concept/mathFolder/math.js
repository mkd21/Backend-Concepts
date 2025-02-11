
function add(a , b)
{
    return a + b;
}

function mul(a , b)
{
    return a * b;
}

function subs(a , b)
{
    return a - b;
}

function div(a , b)
{
    return a / b;
}

// module.exports = add;    // syntax of common js


// export default add       // syntax of ES module


module.exports = {add , mul , div , subs}