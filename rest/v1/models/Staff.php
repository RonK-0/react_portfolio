<?php

Class Staff {
    public $staff_aid;
    public $staff_name;
    public $staff_class;
    public $staff_age;
    public $staff_is_active;
    public $staff_created;
    public $staff_datetime;
    public $lastInsertedId;

    public $connection;
    public $tblStaff;

    public function __construct($db){
        $this->connection = $db;
        $this->tblStaff = "react_school_staff";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblStaff} (";
            $sql .= "staff_name, ";
            $sql .= "staff_class, ";
            $sql .= "staff_age, ";
            $sql .= "staff_gender, ";
            $sql .= "staff_email, ";
            $sql .= "staff_is_active, ";
            $sql .= "staff_created, ";
            $sql .= "staff_datetime ";
            $sql .= " ) values ( ";
            $sql .= ":staff_name, ";
            $sql .= ":staff_class, ";
            $sql .= ":staff_age, ";
            $sql .= ":staff_gender, ";
            $sql .= ":staff_email, ";
            $sql .= ":staff_is_active, ";
            $sql .= ":staff_created, ";
            $sql .= ":staff_datetime ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_name" => $this->staff_name,
                "staff_age" => $this->staff_age,
                "staff_class" => $this->staff_class,
                "staff_gender" => $this->staff_gender,
                "staff_email" => $this->staff_email,
                "staff_is_active" => $this->staff_is_active,
                "staff_created" => $this->staff_created,
                "staff_datetime" => $this->staff_datetime,
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
            $sql .= "from {$this->tblStaff} ";
            $sql .= "order by staff_is_active desc ";
            // $sql .= "order by staff_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblStaff} ";
            $sql .= "where staff_aid = :staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_aid" => $this->staff_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblStaff} set ";
            $sql .= "staff_name = :staff_name, ";
            $sql .= "staff_age = :staff_age, ";
            $sql .= "staff_class = :staff_class, ";
            $sql .= "staff_gender = :staff_gender, ";
            $sql .= "staff_email = :staff_email, ";
            $sql .= "staff_datetime = :staff_datetime ";
            $sql .= "where staff_aid  = :staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_name" => $this->staff_name,
                "staff_age" => $this->staff_age,
                "staff_class" => $this->staff_class,
                "staff_gender" => $this->staff_gender,
                "staff_email" => $this->staff_email,
                "staff_datetime" => $this->staff_datetime,
                "staff_aid" => $this->staff_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblStaff} set ";
            $sql .= "staff_is_active = :staff_is_active, ";
            $sql .= "staff_datetime = :staff_datetime ";
            $sql .= "where staff_aid  = :staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_is_active" => $this->staff_is_active,
                "staff_datetime" => $this->staff_datetime,
                "staff_aid" => $this->staff_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}