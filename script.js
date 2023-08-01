//reservation functionality

$(".btn").click(function () {
  $(".book-background").css("display", "flex");
  clearInput();
});

$(".cancel-btn").click(function () {
  $(".book-background").fadeOut(600);
});

let valuee = $(".first-input").val();
let valueee = $(".input-small").val();
$("#bookBtn").click(function () {
  if ($("#inputFirst").val() === "" && $("#inputSecond")) {
    $("#inputFirst").attr("placeholder", "please fill in the details");
    $("#inputFirst").css("borderColor", "red");
    $("#inputSecond").attr("placeholder", "please fill in the details");
    $("#inputSecond").css("borderColor", "red");
    $(".input-small").css("borderColor", "red");
    $(".people").css("borderColor", "red");
  } else {
    $(".book-background").slideUp();
  }

  //   console.log($("#inputFirst").val());
  //   //     $(".book-background").slideUp();
});
function clearInput() {
  $("#inputFirst").val("");
  $("#inputSecond").val("");
  $("#inputFirst").attr("placeholder", "Name");
  $("#inputFirst").css("borderColor", "black");
  $("#inputSecond").attr("placeholder", "Email");
  $("#inputSecond").css("borderColor", "black");
  $(".input-small").css("borderColor", "black");
  $(".people").css("borderColor", "black");
}

//events functionality
$("#social").click(function () {
  $(".high-light-para").text(
    `We derive immense pleasure from welcoming everyone, 
    allowing you to bring your friends and loved ones for a special meal together. 
    Our commitment is to curate  an unforgettable experience that will hold a cherished
     place in your memories.`
  );
  $("#event-heading").text("Social Events");
  $(".fam").attr("src", "assets/images/friends2.jpg");
});

$("#family").click(function () {
  $(
    ".high-light-para"
  ).text(`We take great joy in accommodating your entire family, so feel
    free to bring everyone along for a special meal with your loved
    ones. We promise to create a memorable experience that you all
    will cherish.`);
  $("#event-heading").text("Family Gathering");
  $(".fam").attr("src", "assets/images/resturant2.jpg");
});

$("#special").click(function () {
  $(
    ".high-light-para"
  ).text(`We take pride in catering to your needs during special events, 
  such as birthdays, wedding receptions, and business gatherings.
   Our skilled chefs craft and serve the perfect meals tailored to these occasions, 
  ensuring a delightful dining experience for you and your guests.`);
  $("#event-heading").text("Special Events");

  $(".fam").attr("src", "assets/images/resturant1.jpg");
});

//

$(".category-para").click(function () {
  // Remove the 'clickedButton' class from all buttons
  $(".category-para").removeClass("greyy");
  // Add the 'clickedButton' class to the clicked button
  $(this).addClass("greyy");
});

//scroll animation functionality
//

//text fadeIn functionality

$(window).scroll(function () {
  var scrollPosition = $(this).scrollTop();
  var sectionOffset = $(".div-shift2").offset().top;
  var windowHeight = $(window).height();

  if (scrollPosition > sectionOffset - windowHeight + 100) {
    $(".div-shift2").css("opacity", "1");
  }
});

$(window).scroll(function () {
  var scrollPosition = $(this).scrollTop();
  var sectionOffset = $(".enjoyable-div").offset().top;
  var windowHeight = $(window).height();

  if (scrollPosition > sectionOffset - windowHeight + 200) {
    $(".enjoyable-div").css("opacity", "1");
  }
});

$(window).scroll(function () {
  var scrollPosition = $(this).scrollTop();
  var sectionOffset = $(".div-fam").offset().top;
  var windowHeight = $(window).height();

  if (scrollPosition > sectionOffset - windowHeight + 330) {
    $(".div-fam").css("opacity", "1");
  }
});
