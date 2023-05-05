
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
       $("#categoryOptionSelection").append("<a class='dropdown-item' href='#' selected>ALL</a>");
        response.forEach((element,index) => {
            $("#categoryOptionSelection").append("<a class='dropdown-item' href='#'>"+element.eventName+"</a>");
            console.log(element.eventName);
        });
         });
}
$(document).ready(function () {
    $('#galleryDropdown').on('click', function () {
        getCategory();
    });
   });
