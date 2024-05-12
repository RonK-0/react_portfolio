<?php

Class Teacher {
    public $teacher_aid;
    public $teacher_name;
    public $teacher_class;
    public $teacher_age;
    public $teacher_gender;
    public $teacher_email;
    public $teacher_is_active;
    public $teacher_created;
    public $teacher_datetime;
    public $lastInsertedId;

    public $connection;
    public $tblTeacher;

    public function __construct($db){
        $this->connection = $db;
        $this->tblTeacher = "react_school_teacher";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblTeacher} (";
            $sql .= "teacher_name, ";
            $sql .= "teacher_class, ";
            $sql .= "teacher_age, ";
            $sql .= "teacher_gender, ";
            $sql .= "teacher_email, ";
            $sql .= "teacher_is_active, ";
            $sql .= "teacher_created, ";
            $sql .= "teacher_datetime ";
            $sql .= " ) values ( ";
            $sql .= ":teacher_name, ";
            $sql .= ":teacher_class, ";
            $sql .= ":teacher_age, ";
            $sql .= ":teacher_gender, ";
            $sql .= ":teacher_email, ";
            $sql .= ":teacher_is_active, ";
            $sql .= ":teacher_created, ";
            $sql .= ":teacher_datetime ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "teacher_name" => $this->teacher_name,
                "teacher_age" => $this->teacher_age,
                "teacher_class" => $this->teacher_class,
                "teacher_gender" => $this->teacher_gender,
                "teacher_email" => $this->teacher_email,
                "teacher_is_active" => $this->teacher_is_active,
                "teacher_created" => $this->teacher_created,
                "teacher_datetime" => $this->teacher_datetime,
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
            $sql .= "from {$this->tblTeacher} ";
            $sql .= "order by teacher_is_active desc ";
            // $sql .= "order by teacher_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblTeacher} ";
            $sql .= "where teacher_aid = :teacher_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teacher_aid" => $this->teacher_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblTeacher} set ";
            $sql .= "teacher_name = :teacher_name, ";
            $sql .= "teacher_age = :teacher_age, ";
            $sql .= "teacher_class = :teacher_class, ";
            $sql .= "teacher_gender = :teacher_gender, ";
            $sql .= "teacher_email = :teacher_email, ";
            $sql .= "teacher_datetime = :teacher_datetime ";
            $sql .= "where teacher_aid  = :teacher_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teacher_name" => $this->teacher_name,
                "teacher_age" => $this->teacher_age,
                "teacher_class" => $this->teacher_class,
                "teacher_gender" => $this->teacher_gender,
                "teacher_email" => $this->teacher_email,
                "teacher_datetime" => $this->teacher_datetime,
                "teacher_aid" => $this->teacher_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblTeacher} set ";
            $sql .= "teacher_is_active = :teacher_is_active, ";
            $sql .= "teacher_datetime = :teacher_datetime ";
            $sql .= "where teacher_aid  = :teacher_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teacher_is_active" => $this->teacher_is_active,
                "teacher_datetime" => $this->teacher_datetime,
                "teacher_aid" => $this->teacher_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}