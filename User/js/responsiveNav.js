var responsivwNav='<div class="btn" style="border:none">\
<span class="fas fa-bars"></span>\
</div>\
<nav class="sidebar">\
<div class="text">\
</div>\
<ul style="margin-top: 46px;">\
  <li class="active"><a href="#">Home</a></li>\
  <li>\
    <a href="#" class="feat-btn">Institution \
      <span class="fa fa-chevron-down first" aria-hidden="true" ></span>\
    </a>\
    <ul class="feat-show">\
      <li><a href="#">About Snit</a></li>\
      <li><a href="#">Faculty</a></li>\
      <li><a href="#">Vission & Mission</a></li>\
      <li><a class="dropdown-item" href="./images/pdf/mandatory_disclosure_ANNEXURE_2022.pdf">Mandatory disclosure</a></li>\
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
    <a href="#" class="serv-btn">Admission\
      <span class="fa fa-chevron-down second"></span>\
    </a>\
    <ul class="serv-show">\
      <li><a href="#">Admission Procedure</a></li>\
      <li> <a class="dropdown-item" href="./images/pdf/prospectus.pdf">Prospectus</a></li>\
      <li><a href="#">Scholarship</a></li>\
    </ul>\
  </li>\
  <li>\
    <a href="#" class="serv-btn">Amenities\
      <span class="fa fa-chevron-down second"></span>\
    </a>\
    <ul class="serv-show">\
      <li><a href="#">Library</a></li>\
      <li> <a class="dropdown-item" href="#">Computer Lab</a></li>\
    </ul>\
  </li>\
  <li>\
    <a href="#" class="serv-btn">Student Life\
      <span class="fa fa-chevron-down second"></span>\
    </a>\
    <ul class="serv-show">\
      <li><a href="#">Student Union</a></li>\
      <li> <a class="dropdown-item" href="#">Club</a></li>\
      <li> <a class="dropdown-item" href="#">College Magazine</a></li>\
      <li> <a class="dropdown-item" href="#">Placement</a></li>\
    </ul>\
  </li>\
  <li><a href="#">Announcement</a></li>\
  \
  <li>\
    <a href="#" class="serv-btn" id="">Gallery\
      <span class="fa fa-chevron-down second"></span>\
    </a>\
    <ul class="serv-show" id="">\
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