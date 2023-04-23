// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
        
//     }
//     return true
    
// }
// // console.log(isPrime(1))
// // console.log(isPrime(3))
// // console.log(isPrime(9))

// function isPowerTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(isPowerTwo(1))
// console.log(isPowerTwo(4))
// console.log(isPowerTwo(9))


// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }    
// console.log(linearSearch([1,2,3,4,5],8))


// function binarySearch(arr,t){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         if(arr[middle]===t){
//             return middle
//         }else if(arr[middle]>t){
//             right=middle-1
//         }else if(arr[middle]<t){
//             left=middle+1
//         }
//     }
//     return -1

// }
// // console.log(binarySearch([-1,2,4,9,10,80,92],8))


// function binarySearchRecursion(arr,t){
//     function search(arr,t,leftIndex,rightIndex){
//         if(leftIndex>rightIndex){
//             return -1
//         }
//         let middle=Math.floor((leftIndex+rightIndex)/2)
//         console.log(middle)
//         if(arr[middle]===t){
//             return middle
//         }else if(t>arr[middle]){
//             return search(arr,t,middle+1,rightIndex)
//         }else if(t<arr[middle]){
//             return search(arr,t,leftIndex,middle-1)
//         }
//     }
//     return search(arr,t,0,arr.length-1)
// }


// console.log(binarySearchRecursion([-1,2,4,9,10,80,92],80))


function bubleSort(arr){
    let swapped=true
    let index=0
    do{
        swapped=false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped=true
            }
        }
    }while(swapped)
    return arr
}
console.log(bubleSort([-1,2,4,9,10,92,80]))
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j=i-1
        while(j>=0&& arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j-=1
        }
        arr[j+1]=numberToInsert
    }
    return arr
}
console.log(insertionSort([-1,2,4,9,10,92,80]))
