    //First Program

    for(let i=1; i<=100; i++)
    {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }

    //Second Program

    function palindrome(x){
        let reverse = x.toString().split('').reverse().join('');
        if(x === reverse){
            console.log("Palindrome");
        }
        else{
            console.log("Not a Palindrome");
        }
    }
    palindrome("madam");

    //third program

    function largest_num(x){
        let num = x[0];
        for(let i=0; i<x.length; i++){
            if(x[i] > num){
                num = x[i];
            }
        }
        console.log(num);    
    }
    let arr = [7,4,5,3,8,2,6,1,4];
    largest_num(arr);

    //fifth program

    function largest_word(str){
        let word = str[0];
        for(let i=0; i<str.length; i++){
            if(str[i].length > word.length){
                word = str[i];
            }
        }
        console.log(word);
    }
    let str = ["The" , "race" , "to" , "space"];
    largest_word(str);

    //sixth program

    function factorial(x){
        let fact = 1;
        for(let i=1; i<=x; i++){
            fact *= i;
        }
        console.log(fact);
    }
    factorial(5);

    //seventh program

    function celsius_to_fahrenheit(x){
        let fahrenheit = (x * 9/5) + 32;
        console.log(fahrenheit);
    }
    celsius_to_fahrenheit(34);