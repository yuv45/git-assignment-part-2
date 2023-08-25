function check_prime(number){
  let count = 0;
  for(let i=0;i<=number;i++){
    if(number%i==0){
      count++
    }
    
  }
    (count==2)?console.log("The no.is prime"):console.log("The no.is not prime")
}
check_prime(13);	