$(".openBar").click(function(){
    $("#Menu").animate({width: "25%"},1000)
    
})

$(".closebtn").click(function(){
    $("#Menu").animate({width:"0%"},1000)
})



$("#Singer h3").click(function(){
    $("#Singer p").slideUp(1000);
    $(this).next().slideDown(1000);
 })

//  $(".Singer_number2").click(function(){
//   $ (".Singer_information2").slideToggle(1000);
// })
// $(".Singer_number3").click(function(){
//   $ (".Singer_information3").slideToggle(1000);
// })
// $(".Singer_number4").click(function(){
//   $ (".Singer_information4").slideToggle(1000);
// })






let maxLength=100;
$(".text-message").keyup(function(){
  let length = $(".text-message").val().length
  let number =maxLength-length
  if (number<=0) {
    $(".number-text").text("Unavailable")
    
  }else{
    $(".number-text").text(number)
  }
})





function getCountDown() {
  setInterval(function(){
    let laterTime = new Date("31 jan 2024 00:00:00");
    laterTime = (laterTime.getTime()/1000);
    let nowTime = new Date();
    nowTime = (nowTime.getTime()/1000);
    
    timeDifference = (laterTime- nowTime);
    
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
  
  
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`);
  }, 1000);
}

getCountDown()