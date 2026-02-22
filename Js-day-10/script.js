// console.log('Starting....');
// function doWork(cb){
//   setTimeout(()=>{
//     // console.log('Working....');
//     // return 'working....';
//         cb('Working....'); 
         

//   },3000);
    
// }
// // console.log(doWork());
// doWork((data)=>{
//     console.log(data);
// });
// console.log('Finished');

function login(email,pass,cb){
  setTimeout(()=>{
    cb({userId:email, isloggedIn:true, message:"Login successful"

    });
  },2000);
  
}
function getVideoList(user,cb){
  setTimeout(()=>{
    cb(["video1","video2","video3"]);
  },4000);
}
function getVideoDetails(video,cb){
  setTimeout(()=>{
    cb({title:video, duration:"2mins"});
  },1000);

  
}
login("user@example.com", "password", (userDetails)=>{
   console.log(userDetails);
      getVideoList(userDetails.userId,(videoList)=>{
      console.log(videoList);
         getVideoDetails(videoList[0],(videoDetails)=>{
            console.log(videoDetails)
    }
    )
})});
