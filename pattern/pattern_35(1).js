let n=11;
for(let i=0; i<n; i++)
{
    for(j=-(n-1); j<=n-1; j++){
    if(-i<=j && j<=i){
        process.stdout.write(String(i+1));
    }
    else{
        process.stdout.write(' ');
    }
    }
    console.log();
}