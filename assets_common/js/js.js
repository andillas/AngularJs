/**
 * Created by eugenio on 14/03/2017.
 */
function getel(e){
    return document.getElementById(e);
}
function cl(txt){
    console.log(txt);
}
function isString(value) {
    return typeof value === 'string';
}
function isJson(strjson){
    try {
        JSON.parse(strjson);
    } catch (e) {
        return false;
    }
    return true;
}
function logErrorJS(error_msg){
    $.ajax({
        method: "POST",
        url: "controllers/shared/utils_controller.php",
        data: {"action" : "errorlogJS", "msg" : error_msg}
    });
}//end of logErrorJS

function checknumber(input){
    var typed = input.value;
    if(isNaN(typed)){
        input.value = typed.substring(0, typed.length -1);
    }
    console.log(typed);
    return false;
}

$(document).ready(function(){
   //DOES NOTHING BY NOW;
});