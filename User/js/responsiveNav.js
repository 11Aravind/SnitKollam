var responsivwNav='<div class="btn" style="border:none">\
<span class="fas fa-bars"></span>\
</div>\
<nav class="sidebar">\
<div class="text">\
</div>\
<ul style="margin-top: 46px;">\
  <li class="active"><a href="index.html">Home</a></li>\
  <li>\
    <a href="#" class="feat-btn">Institution \
      <span class="fa fa-chevron-down first" aria-hidden="true" ></span>\
    </a>\
    <ul class="feat-show">\
      <li><a href="#aboutSnit">About Snit</a></li>\
      <li><a href="#faculty">Faculty</a></li>\
      <li><a href="#">Vission & Mission</a></li>\
      <li><a  href="./images/pdf/mandatory_disclosure_ANNEXURE_2022.pdf">Mandatory disclosure</a></li>\
    </ul>\
  </li>\
  <li>\
    <a href="#" class="serv-btn">Academics\
      <span class="fa fa-chevron-down second"></span>\
    </a>\
    <ul class="serv-show">\
      <li><a href="#">MCA</a></li>\
      <li><a href="#">Syllabus</a></li>\
      <li><a href="#">PTA</a></li>\
      <li><a href="#">Academics Calender</a></li>\
    </ul>\
  </li>\
  <li>\
    <a href="#" class="serv-btn1">Admission\
      <span class="fa fa-chevron-down three"></span>\
    </a>\
    <ul class="serv-show1">\
      <li><a href="#">Admission Procedure</a></li>\
      <li> <a  href="./images/pdf/prospectus.pdf">Prospectus</a></li>\
      <li><a href="#">Scholarship</a></li>\
    </ul>\
  </li>\
  <li>\
    <a href="#" class="serv-btn2">Amenities\
      <span class="fa fa-chevron-down four"></span>\
    </a>\
    <ul class="serv-show2">\
      <li><a href="#">Library</a></li>\
      <li> <a  href="#">Computer Lab</a></li>\
    </ul>\
  </li>\
  <li>\
    <a href="#" class="serv-btn3">Student Life\
      <span class="fa fa-chevron-down five"></span>\
    </a>\
    <ul class="serv-show3">\
      <li><a href="#">Student Union</a></li>\
      <li> <a  href="#club">Club</a></li>\
      <li> <a  href="#">College Magazine</a></li>\
      <li> <a  href="#">Placement</a></li>\
    </ul>\
  </li>\
  <li><a href="#">Announcement</a></li>\
  <li>\
    <a href="#" class="serv-btn4" >Gallery\
      <span class="fa fa-chevron-down six"></span>\
    </a>\
    <ul class="serv-show4" id="rescategoryOptionSelection">\
    </ul>\
  </li>\
  <li><a href="#">Feedback</a></li>\
</ul>\
</nav>';
$("#responsiveMenu").append(responsivwNav);

$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });
  $('.feat-btn').click(function(){
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
  });
  $('.serv-btn').click(function(){
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
  });
  $('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
  // my code 
  $('.serv-btn1').click(function(){
    $('nav ul .serv-show1').toggleClass("show1");
    $('nav ul .three').toggleClass("rotate");
  });
  $('.serv-btn2').click(function(){
    $('nav ul .serv-show2').toggleClass("show1");
    $('nav ul .four').toggleClass("rotate");
  });
  $('.serv-btn3').click(function(){
    $('nav ul .serv-show3').toggleClass("show1");
    $('nav ul .five').toggleClass("rotate");
  });
  $('.serv-btn4').click(function(){
    $('nav ul .serv-show4').toggleClass("show1");
    $('nav ul .six').toggleClass("rotate");
  });
  // my code end