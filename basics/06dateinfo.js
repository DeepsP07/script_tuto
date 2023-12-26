let mydate =new Date()

// console.log(mydate.getFullYear().toString());
// console.log(mydate.getMonth()+1);
// console.log(mydate.getUTCDay);
// console.log(Math.round(Date.now()/10000));
mydate.toLocaleString('default',{
  weekday:"long"
});
