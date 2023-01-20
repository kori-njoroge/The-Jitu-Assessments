// alert("ssup")

function findLargest(num1, num2, num3, num4, num5){
    let largest = 0;
    if((num1 > num2) && (num1 >num3) && (num1 > num4) && (num1 > num5)){
        largest = num1
    }else if((num2 > num1) && (num2 >num3) && (num2 > num4) && (num2 > num5)){
        largest = num2
    }else if((num3 > num1) && (num3 >num2) && (num3 > num4) && (num3 > num5)){
        largest = num3
    }else if((num4 > num1) && (num4 >num2) && (num4 > num3) && (num4 > num5)){
        largest = num4
    }
    else if((num5 > num1) && (num5 >num2) && (num5 > num3) && (num5 > num4)){
        largest = num5
    }else{
        largest = 0
    }

    console.log("The largest is : ", largest)
}

findLargest(-1,-5,-4,-9,0)