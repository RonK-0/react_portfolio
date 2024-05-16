<?php

Class Certs {
    public $cert_aid;
    public $cert_title;
    public $cert_org;
    public $cert_date;
    public $cert_image;
    public $cert_is_active;
    public $cert_created;
    public $cert_datetime;
    public $lastInsertedId;

    public $cert_search;

    public $connection;
    public $tblCerts;

    public function __construct($db){
        $this->connection = $db;
        $this->tblCerts = "portfolio_cert";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblCerts} (";
            $sql .= "cert_title, ";
            $sql .= "cert_org, ";
            $sql .= "cert_date, ";
            $sql .= "cert_image, ";
            $sql .= "cert_is_active, ";
            $sql .= "cert_created, ";
            $sql .= "cert_datetime ";
            $sql .= " ) values ( ";
            $sql .= ":cert_title, ";
            $sql .= ":cert_org, ";
            $sql .= ":cert_date, ";
            $sql .= ":cert_image, ";
            $sql .= ":cert_is_active, ";
            $sql .= ":cert_created, ";
            $sql .= ":cert_datetime ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "cert_title" => $this->cert_title,
                "cert_org" => $this->cert_org,
                "cert_date" => $this->cert_date,
                "cert_image" => $this->cert_image,
                "cert_is_active" => $this->cert_is_active,
                "cert_created" => $this->cert_created,
                "cert_datetime" => $this->cert_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex){
            $query = false;
        }

        
        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblCerts} ";
            $sql .= "order by cert_aid asc ";
            // $sql .= "order by project_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblCerts} ";
            $sql .= "where cert_aid = :cert_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cert_aid" => $this->cert_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblCerts} set ";
            $sql .= "cert_title = :cert_title, ";
            $sql .= "cert_org = :cert_org, ";
            $sql .= "cert_date = :cert_date, ";
            $sql .= "cert_image = :cert_image, ";
            $sql .= "cert_datetime = :cert_datetime ";
            $sql .= "where cert_aid  = :cert_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cert_title" => $this->cert_title,
                "cert_org" => $this->cert_org,
                "cert_date" => $this->cert_date,
                "cert_image" => $this->cert_image,
                "cert_datetime" => $this->cert_datetime,
                "cert_aid" => $this->cert_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblCerts} set ";
            $sql .= "cert_is_active = :cert_is_active, ";
            $sql .= "cert_datetime = :cert_datetime ";
            $sql .= "where cert_aid  = :cert_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cert_is_active" => $this->cert_is_active,
                "cert_datetime" => $this->cert_datetime,
                "cert_aid" => $this->cert_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblCerts} ";
            $sql .= "where cert_title like :cert_title ";
            $sql .= "order by cert_aid asc, ";
            $sql .= "cert_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cert_title" => "%{$this->cert_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}