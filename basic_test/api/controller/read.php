<?php
include_once "../model/product.php";
include_once "../utils/utils.php";

$post_data = json_decode(file_get_contents("php://input"));

$product = new product();

if(isset($post_data->id) && $post_data->id != ""){
    $info_product = $product->getInfoProduct($post_data->id);
}else{
    $info_product = $product->getInfoAllProducts();
}

echo json_encode(array("prod"=>$info_product));
//utils::prn($info_product);

