for(i=5; i>0; i--){
    z=5
    for(j=5; j>0; j--){
        if(i>=j){
            process.stdout.write(String(z-4)+ ' ')
            z++

        }else{
            process.stdout.write('  ') 
        }
    }
    console.log();
}