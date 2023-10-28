function task1()
{
    let arr=[4,16,36,25];
    let summa=arr.reduce(function(sum,elem){
        if (elem%2==0) sum+=Math.sqrt(elem);
        return sum;
    },0);
    alert(summa);
}

function task6()
{
    //Написать функцию, которая принимает массив чисел и переносит первый элемент массива в конец.
    let arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let elem=arr.shift();
    arr.push(elem);
    console.log(arr.toString()); 
}