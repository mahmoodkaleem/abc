let n=13;
for(i=1; i<=n; i++){
    let z=1;
if(i%2!=0){
    for(j=n; j>=1; j--){
        if(j<=i){
            process.stdout.write(String(Math.abs((j-z)/2))+' ');
            z++;
        }else{
            process.stdout.write(' ');  
        }
    }
    console.log();
}
}