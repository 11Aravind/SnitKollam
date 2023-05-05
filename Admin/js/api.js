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
        else
            console.log(result)
    })
});
$("#addCategoryBtn").click(function(e){
e.preventDefault();
API('Admindb/Addcategory.php',$("#addCategory").serialize(),(response)=>{
    $("#category").val("");
    humenReadmsg(response)
})
});
const getCategory=()=>{
    APIJSON('Admindb/getCategory.php',true,(response)=>{
        // console.log(response[0])
        $("#categoryOption").empty();
       $("#categoryOption").append("<option selected>--Select--</option>");
        response.forEach((element,index) => {
            $("#categoryOption").append("<option>"+element.eventName+"</option>");
            console.log(element.eventName);
        });
         });
}
$(document).ready(function () {
    $('#addEventBtn').on('click', function () {
        getCategory();

    });
   
});



