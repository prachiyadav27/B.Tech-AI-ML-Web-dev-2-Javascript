let myPromise = new Promise((res,rej)=>{
    let data = "";
    if(data){
        res(data);
    }else{
        rej("error: no data found");
    }
});
// console.log(myPromise);
myPromise.then((d)=>{
    console.log(d);
})
.catch((err)=>{
    console.log(err);

});