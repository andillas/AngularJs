<?php
/**
 * Created by PhpStorm.
 * User: eugenio
 * Date: 22/02/2017
 * Time: 17:37
 */
class database_dd
{
    private $host = "localhost";
    private $db_name = "zroducts";
    private $username = "UserGeneral";
    private $password = "4tlGeneralDb";
    public $conn;

    public function __construct()
    {
        $this->conn = null;

        $dsn = "mysql:host={$this->host};dbname={$this->db_name}";

        try{
            $this->conn = new PDO($dsn, $this->username, $this->password);
        }catch (PDOException $exception){
            echo "Connection error: {$exception->getMessage()}";
        }
    }
    public function getDbConn(){
        return $this->conn;
    }
}