for(i=5; i>0; i--){
    for(j=5; j>0; j--){
        if(i>=j){
            process.stdout.write(String.fromCharCode(64+i)+' ');
        }else{
            process.stdout.write('  ') 
        }
    }
    console.log();
}