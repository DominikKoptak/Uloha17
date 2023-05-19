
for(let i = 1990; i <= 2030; i++){
    if ((i % 100 === 0 && i % 400 === 0)||(i % 4 === 0 && i % 100 !== 0)){
        if(i % 10 === 0){console.log("OP " + i);}
        else {console.log("P " + i)}
    }
    else  if (i % 10 === 0){console.log("O " + i);
        }
    else if (i === 2001){console.log("N " + i);
        }
    else {console.log(i);}

}

