// function API(url, data, successCallBack) {
//     $.ajax({
//         type: "POST",
//         url: apiBaseUrl + url,
//         data: data,
//         processData: false,
//         contentType: false,
//         // dataType: "multipart/form-data",
//         success: function (response) {
//             successCallBack(JSON.parse(response))
//         },
//     });
// }
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
const APIJSON=(url,data,successCallBack)=>{
    $.ajax({
        url:apiBaseUrl+url,
        datatype:'json',
        type:'POST',
        data:data,
        processData: false,
        contentType: false,
       success: (response)=>{
        successCallBack(JSON.parse(response))
       }
    });
}
$("#checkAuthentication").click(function (e) {
    e.preventDefault();
    API('Admindb/login.php', $("#admin-authentication").serialize(), (result) => {
        if (result == "success")
            window.location = "./index.html"
        // else
        //     console.log(result)
    })
});
$("#addCategoryBtn").click(function(e){
e.preventDefault();
if($("#category").val()=='')
{
alert("Enter Category Name");
}
else{
    API('Admindb/Addcategory.php',$("#addCategory").serialize(),(response)=>{
        $("#category").val("");
        alert(JSON.parse(response))
    })
}
});
const getCategory=()=>{
    APIJSON('Admindb/getCategory.php',true,(response)=>{
        // console.log(response[0])
        $("#categoryOption").empty();
       $("#categoryOption").append("<option selected>--Select--</option>");
       $("#eventCategory").empty();
        response.forEach((element,index) => {
            $("#categoryOption").append("<option value='{0}'>{1}</option>".format(element.event_id,element.eventName));
            // console.log(element.eventName);
          
            $("#eventCategory").append("<tr><th scope='row'>{0}</th><td>{1}</td><td><button class='btn btn-primary'>edit</button></td></tr>".format(element.event_id,element.eventName))
        });
         });
}
$(document).ready(function () {
    // getEventGallery();
    $('#addEventBtn').on('click', function () {
        getCategory();
        
    });
   });
   $("#addEventPhoto").click(function(){
    var formData = new FormData($("#addEvent")[0]);
    // console.log(formData);
    $("#popupCloseBtn").click();
    APIJSON('Admindb/addEvent.php',formData,(response)=>{    
    $("#callbackMsg").addClass(response.class);
    $("#callbackMsg").html(response.result);
    setTimeout(() => {
        $("#callbackMsg").removeClass(response.class);
        $("#callbackMsg").html("");      
    }, 4000);
})
   });
const getEventGallery=()=>{
    APIJSON('Admindb/getEventGallery.php',true,(response)=>{
        console.log(response);
    })
}


