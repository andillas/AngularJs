<?php
include "../config/database.php";
/**
 * Created by PhpStorm.
 * User: eugenio
 * Date: 22/02/2017
 * Time: 17:42
 */
class product
{
    private $id_prod;
    private $db_conn;

    public function __construct()
    {
        $db = new database_dd();
        $this->db_conn = $db->getDbConn();
    }

    public function getInfoProduct($id){
        $QYgetInfoProduct = "SELECT * FROM products WHERE id = :id";
        $getInfoProduct = $this->db_conn->prepare($QYgetInfoProduct);

        $getInfoProduct->bindParam(':id', $id);
        $getInfoProduct->execute();
        return $infoProduct = $getInfoProduct->fetch(PDO::FETCH_ASSOC);
    }
    public function getInfoAllProducts(){
        $QY_get_all_products = "SELECT * FROM products WHERE 1";
        $get_all_products = $this->db_conn->prepare($QY_get_all_products);
        $get_all_products->execute();

        $arr_all_products = array();
        while($product = $get_all_products->fetch(PDO::FETCH_ASSOC)){
            $arr_all_products[] = $product;
        }
        return $arr_all_products;
    }
}