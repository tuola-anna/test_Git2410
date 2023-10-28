function task1()
{
    let arr=[4,16,36,25];
    let summa=arr.reduce(function(sum,elem){
        if (elem%2==0) sum+=Math.sqrt(elem);
        return sum;
    },0);
    alert(summa);
}


function task2()
{
    //Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
    let arr = Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    
    //Выбираем в массиа newArr все элементы массива, которые удовлетворяют условию >0 && <10
    let newArr=arr.filter(elem=>elem>0 && elem<10);
    newArr=newArr.reduce((sum,elem)=>sum+elem,0);
    console.log(sum);
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