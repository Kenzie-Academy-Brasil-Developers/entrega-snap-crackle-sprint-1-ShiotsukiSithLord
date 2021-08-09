function snapCrackle(maxv) {
    let numero = [];
    let vazio =  "snap";
    let vazio2 = "Crackle";
    let teste =  ", ";
    
    for( i = 1; i < maxv; i++) {
       numero += teste;
        if(i%2 !== 0){
           numero += " " + vazio;
         
        }
        if( i%5 == 0){
            numero += vazio2;
        }
        if(i%2 !== 0 & i%5 == 0){
             vazio + vazio2;
            
        }
        if(i%2 == 0 & i%10 !== 0) {
        numero += i;
        }
        
       
        
        
    }
    return numero

console.log
}
snapCrackle()