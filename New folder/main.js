"use strict"
// isrinkti skaicius kurie neina is eiles
let sarasas = [1,2,3,4,6,7,8]; 


for (let s=0; s<=sarasas.length; s++) {
    if(s !== sarasas[s-1] ){
        console.log(sarasas[s])
    }
}

