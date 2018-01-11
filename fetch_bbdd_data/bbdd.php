<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$arr_result = array("records"=>array("Name"=>"elnombre", "Cognome"=>"el cognome", "E-mail"=>"El email"));
$arr_result = json_encode($arr_result);
echo $arr_result;
exit;
/*

include "conn_data.php";

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

$result = $conn->query("SELECT usuario, passw, email FROM usuarios");
//$result = $conn->query("SELECT iduser, mail, pass, nombre, apellido, centro, especialidad FROM user");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["usuario"] . '",';
    $outp .= '"Cognome":"'   . $rs["passw"]        . '",';
    $outp .= '"E-mail":"'. $rs["email"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
*/