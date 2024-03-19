// Bai 01: switch case
// var x = 5;
// switch(x) {
//     case 2: 
//         console.log("Thu Hai");
//         break;
//     case 3:
//         console.log("Thu Ba");
//         break;
//     case 4:
//         console.log("Thu Tu")
//         break;
//     case 5:
//         console.log("Thu Nam")
//         break;
//     default:
//         console.log("Thu Sau")
//         break;
// }


//Bai 02: String case array
// var x = 2;
// var y = ["Thu hai", "Thu Ba", "Thu Tu", "Thu Nam", "Thu Sau", "Thu Bay", "Chu Nhat"]
// switch(y) {
//     case 2: 
//         console.log(y[x-2]);
//         break;
//     case 3:
//         console.log("Thu Ba");
//         break;
//     case 4:
//         console.log("Thu Tu")
//         break;
//     case 5:
//         console.log("Thu Nam")
//         break;
//     default:
//         console.log("Thu Sau")
//         break;
// }



// Bai 03: Ham Ktra so nguyen to 


// var x = 3;
// var count = 0;

// for(var i = 0; i < x - 2; i++) {
//     if(x % i == 0) {
//         console.log("Uoc so khac: " ,i);
//         count++;
//         break;
//     }
// }
// if(count == 0) {
//     console.log("Day la so nguyen to")
// }else {
//     console.log("Day khong phai la so nguyen to")
// }

//Bai 04: Ma tran 2 chieu 3x3
var a = [[1,2,3],[1,2,3],[2,3,4]];
for(var i=0; i<3; i++){
    for(var j=0;j<3;j++){
        document.write(a[i][j] + " ");
    }
   document.write("<br/>");
}
