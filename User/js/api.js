
var apiBaseUrl = "http://localhost/SnitKollam/Database/";
 const API=(url, data, successCallback)=> {
    $.ajax({
        url: apiBaseUrl + url,
        type: "POST",
        data: data,
        success: (response)=> {
            successCallback(response)
        }
    });
}
const API_JSON=(url,data,successCallBack)=>{
    $.ajax({
        url:apiBaseUrl+url,
        datatype:'json',
        type:'POST',
        data:data,
       success: (response)=>{
        successCallBack(JSON.parse(response))
       }
    });
}
const getCategory=()=>{
    API_JSON('Admindb/getCategory.php',true,(response)=>{
        // console.log(response[0])
        $("#categoryOptionSelection").empty();
        $("#rescategoryOptionSelection").empty();
       $("#categoryOptionSelection").append("<a href='Gallery.html?id=-1' class='dropdown-item selectGallery' id='-1' selected>ALL</a>");
        response.forEach((element,index) => {

            $("#categoryOptionSelection").append("<a href='Gallery.html?id="+element.event_id+" 'class='dropdown-item selectGallery' id="+element.event_id+"  >"+element.eventName+"</a>");
            $("#rescategoryOptionSelection").append("<li><a href='Gallery.html?id="+element.event_id+" 'class='' id="+element.event_id+"  >"+element.eventName+"</a></li>");
            // console.log(element.eventName);
            // $("#rescategoryOptionSelection").append("<li> <a  href='Gallery.html?id="+element.event_id+" id="+element.event_id+">"+element.eventName+"</a></li>")
        });
         });
}
const loadGallery=()=>{
    let url=window.location.search;
    let param=new URLSearchParams(url);
    cid=param.get('id');
                // $("#desableInput").val(e.target.id);
            API_JSON('Userdb/getOnecategory.php',{'id':cid},(response)=>{
                // console.log(response.categoryName);
                $("#categoryHeadding").html("<h3 class='text-md-start'>"+response.categoryName.eventName+"</h3>");
                $("#gallery").empty();
                response.result.forEach((element,index)=>{
                    $("#gallery").append("<img src='../Database/"+element.eventPic+"' class='img-responsive'>");
                })
                // gallery
            })
}
// $.get('Gallery.html',  // url
//       function (data, textStatus, jqXHR) {  // success callback
//           alert('status: ' + textStatus + ', data:' + data);
//     });
// $("#galleryDropdown").click(()=>{
//     window.location.href="Gallery.html";
// })
const placedStuddet=()=>{
    
}
$(document).ready(function () {
    // $('#galleryDropdown').on('click', function () {
        getCategory();
    // });
   });
