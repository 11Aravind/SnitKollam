var menu = [
    { "menuName": "Home", "id":"home", "class": "fa fa-home", "link":"index.html"},
    { "menuName": "Event", "id":"events", "class": "fa fa-calendar", "link":"Event.html"},
    { "menuName": "Property", "id":"product", "class": "fa fa-product-hunt", "link":"productPanel.html"},
    { "menuName": "Career", "id":"career", "class": "fa fa-graduation-cap", "link":"careerPanel.html"},
    { "menuName": "Gallery", "id":"gallery", "class": "fa fa-image", "link":"galleryPanel.html"}
    // { "menuName": "Services", "class":"fa fa-wrench", "link":"serviceDashboard.html"},
]

var menuString = "";
menu.forEach(menuItem => {
    menuString=menuString+"<li><a id={3} href='{2}'><i class='{1}'/>&nbsp;{0}&nbsp;&nbsp;</a></li>".format(menuItem.menuName,menuItem.class,menuItem.link, menuItem.id)  
});


var sideBar = "<div class='sidebar-header'></div><ul class='list-unstyled components'>{0}</ul>".format(menuString);
$("#sidebar").append(sideBar);


var topMenu = "<ul class='nav navbar-nav ml-auto'  id='headlineTop'><div class='btn-group dropleft'><a class='dropdown-toggle' href='#' role='button' data-toggle='dropdown' aria-expanded='false'> <i class='fa fa-user' aria-hidden='true'></i></a><div class='dropdown-menu'>\
<a class='dropdown-item' href='./logout.php'>Logout</a></div></div></ul>";
$("#navbarSupportedContent").append(topMenu);





{/* <li class='active'><a href='#homeSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><i class='fas fa-home'/>Home</a><ul class='collapse list-unstyled' id='homeSubmenu'><li><a href='#'>Home 1</a></li><li><a href='#'>Home 2</a></li><li><a href='#'>Home 3</a></li></ul></li><li><a href='#'><i class='fas fa-briefcase'/>About</a><a href='#pageSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><i class='fas fa-copy'/>Pages</a><ul class='collapse list-unstyled' id='pageSubmenu'><li><a href='#'>Page 1</a></li><li><a href='#'>Page 2</a></li><li><a href='#'>Page 3</a></li></ul></li><li><a href='#'><i class='fas fa-image'/>Portfolio</a></li><li><a href='#'><i class='fas fa-question'/>FAQ</a></li> */ }