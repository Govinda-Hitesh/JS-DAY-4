//bitwise operator






//ternary operators
//conditon : ture or false
// ture: statement 1 will  be executed
// false : statement 2 wil be executed
//syntax : (condition)? statement 1 : statement 2

2>3 ? console.log('correct') : console.log('wrong');//wrong

a = 5;
b = 8;
a<b ? console.log('correct') : console.log('wrong');
a>b ? a++ : a--;
console.log(a)//4
a>b ? b++ : b--;
console.log(b)//7

//if else block
//if else  if and else blocks

let g = 3;

if (g>4) {
    console.log(g);
}
else{
    console.log('wrong');

}

///////////////////////////////////////////////////////////////////////////

let age = 62;
 if (age < 18){
     console.log('i am one')

 }
///////////
let number = 2;
switch(number) {
    case 1:
        console.log('i am one')
        break;
    case 2 : 
        console.log('i m two')
        break;
    case ture:
        console.log('i am ture')
        break;    
    default:
        console.log('i m final')
        break;

}


