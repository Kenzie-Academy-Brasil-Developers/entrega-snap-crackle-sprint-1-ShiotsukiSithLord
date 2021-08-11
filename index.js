function snapCrackle(maxv) {
    let numero = "";
    let vazio =  "snap";
    let vazio2 = "Crackle";
    let teste =  " ";
    
    for( i = 1; i < maxv; i++) {
        
       
        if(i%2 !== 0){
           numero +=  vazio;
         
        }
        if( i%5 == 0){
            numero += vazio2;
        }
        if(i%2 !== 0 & i%5 == 0){
             vazio + vazio2;
            
        }
        if(i%2 == 0 & i%10 !== 0) {
        numero += i ;
        }
        if( i < maxv - 1){
            numero = numero + "," + teste;
        }
       
        
        
    }
    return numero


}
console.log(snapCrackle(21))


