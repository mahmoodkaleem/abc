for(let i=0;i<4;i++)
{
  for(let j=i;j<3;j++)
  {
    process.stdout.write("  ");
  }
  for(let k=0;k<=i;k++)
  {
    process.stdout.write(k+1+" ");
  }
   for(let l=i;l>=1;l--)
   {
    process.stdout.write(l+" ");
   }
   console.log();
}