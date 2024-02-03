//var a=25;
//console.log(a);
//for(let i=1;i<=10;i++)
//{
//    console.log(i);
//}
/*let a=parseInt(prompt("Enter the number1:"));
let b=parseInt(prompt("Enter the number2:"));
let c=parseInt(prompt("Enter the number3:"));
if((a>b) && (a>c)){
    console.log(a+" is greater ");
}
else if (b>c) {
    console.log(b+" is greater ");
}
else{
    console.log(c+"is greater");
}
function armstrong() {
   let remainder=0;
   let sum=0;
   let input=parseInt(prompt("Enter the number:"));
   let n=input;
   while(n!=0){
      remainder=n%10;
         sum=(sum+(remainder**3));
         n=parseInt(n/10);
    }
    if(input==sum)    {
        console.log(input,"is an armstrong number");
    }
    else{
        console.log(input,"is  not an armstrong number");
    }


}
function reverse(){
    let input=parseInt(prompt("Enter the number:"));
    let reverse=0;
    let remainder=0;
    let quotient=0;
    let n=input;
    while(n!=0){
        remainder=parseInt(n%10);
        reverse=reverse*10+remainder;
        n=parseInt(n/10);
    }
    console.log(reverse);
}
let a=confirm("yes or no:");
console.log(confirm);
let val=1;
while(val<=10){
    console.log(val);
    val++;
}
do{
console.log(val);
val++;
}while(val<10);
const courses={
    firstCourse:"JavaScript",
    secondCourse:"React",
    thirdCourse:"Angular",
};
let value=" ";
for(let item in courses){
    value=value+courses[item]+ " ";
}
console.log(value);
const numbers=[1,2,4,5,6];
for (let number of numbers){
    console.log(number);
}
let fruits=" Apple, Banana, Kiwi";
console.log(fruits.substring(1,11));*/
let sample="HELLO THERE!";
//console.log(sample.charAt(0));
let a="1,2,3,4,5,6";
const myArray1=a.split(",");
let b="Elango";
const myArray2=b.split("");
console.log(myArray2);

