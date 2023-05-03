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
function API(url, data, successCallback) {
    $.ajax({
        url: apiBaseUrl + url,
        type: "POST",
        data: data,
        success: function (response) {
            successCallback(response)

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