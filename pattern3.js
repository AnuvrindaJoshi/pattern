//pattern 23
let n=5;
let str23 ='';
for (let row=1;row<=n;row++){
    let totalColsInARow= n-row+1;
for (let col=1;col<=totalColsInARow;col++){
    let x =String.fromCharCode(70-col);
        str23 += x;
}
str23 +='\n';
}
console.log(str23);

//pattern 24
let str24='';
for (let row = 0; row < n ; row ++){
    let totalColsInRow = n - row
    let spacesInEachRow = n - row;
    for(let j = 0; j < spacesInEachRow; j ++){
        str24 += " "
    }
    for(let col = 0; col <=row; col ++){
       str24 += "*"
    }
    str24 += "\n"
}

console.log(str24)

//pattern 25
let str25 = "";

for (let row = 0; row < n ; row ++){
    
    let spacesInEachRow = n - row;
    for(let j = 0; j < spacesInEachRow; j ++){
        str25 += " "
    }
    for(let col = 0; col <=row; col ++){
       str25 += row + 1
    }
    str25 += "\n"
}
console.log(str25)

//pattern 26
let str26 = "";
for (let row = 0; row < n ; row ++){
     let spacesInEachRow = n - row;
    for(let j = 0; j < spacesInEachRow; j ++){
        str26 += " "
    }
    for(let col = 0; col <=row; col ++){
       str26 += col + 1
    }
    str26 += "\n"
}
console.log(str26)

//pattern 27
let str27 = "";
for (let row = 0; row < n ; row ++){
    
    let spacesInEachRow = n - row;
    for(let j = 0; j < spacesInEachRow; j ++){
        str27 += " "
    }
    for(let col = 0; col <=row; col ++){
        let x =String.fromCharCode(65+row);
        str27 += x;
    }
    str27 += "\n"
}
console.log(str27)

//pattern 28
let str28 = "";
for (let row = 0; row < n ; row ++){
    let spacesInEachRow = n - row;
    for(let j = 0; j < spacesInEachRow; j ++){
        str28 += " "
    }
    for(let col = 0; col <=row; col ++){
        let x =String.fromCharCode(65+col);
        str28 += x;
    }
    str28 += "\n"
}
console.log(str28);

//pattern 29 and 30 in next file
