let n=9;
for(i=1; i<=n; i++){
if(i%2!=0){
    for(j=n; j>=1; j--){
        if(j<=i){
            process.stdout.write(String.fromCharCode(64+j)+' ');
        }else{
            process.stdout.write(' ');  
        }
    }
    console.log();
}
}