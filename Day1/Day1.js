// Most Basic Programs

const fib = (n) => {
    if (n <= 1)
    {
        return 0;
    }
    if (n == 2)
    {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
try{
    const num = Number(prompt('Enter a number : '));
    const result = fib(num)
    alert("The result is : " + result);
}catch(e){
    alert("Please Enter a Number")
}