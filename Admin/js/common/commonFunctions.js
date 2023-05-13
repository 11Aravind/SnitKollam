let commonFunctions=(msg)=>{
    $("#responseMsg").text(msg);
    setTimeout(()=>{
        $("#responseMsg").text("");        
    },3000);
}
$("#categoryTable").hide();
$("#showCategory").click(()=>{
    if($("#showCategory").text()=="Show List")
    {
    $("#categoryTable").show();
    $("#showCategory").text("Hide List");
    }
    else{
        $("#categoryTable").hide();
        $("#showCategory").text("Show List");   
    }
});
$(document).ready( function () {
    $('#eventTable').DataTable();
} );