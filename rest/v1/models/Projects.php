<?php

Class Projects {
    public $project_aid;
    public $project_title;
    public $project_year;
    public $project_description;
    public $project_category;
    public $project_is_active;
    public $project_publish_date;
    public $project_created;
    public $project_datetime;
    public $lastInsertedId;

    public $project_search;

    public $connection;
    public $tblProjects;

    public function __construct($db){
        $this->connection = $db;
        $this->tblProjects = "portfolio_projects";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblProjects} (";
            $sql .= "project_title, ";
            $sql .= "project_year, ";
            $sql .= "project_description, ";
            $sql .= "project_category, ";
            $sql .= "project_is_active, ";
            $sql .= "project_publish_date, ";
            $sql .= "project_created, ";
            $sql .= "project_datetime ";
            $sql .= " ) values ( ";
            $sql .= ":project_title, ";
            $sql .= ":project_year, ";
            $sql .= ":project_description, ";
            $sql .= ":project_category, ";
            $sql .= ":project_is_active, ";
            $sql .= ":project_publish_date, ";
            $sql .= ":project_created, ";
            $sql .= ":project_datetime ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_title" => $this->project_title,
                "project_year" => $this->project_year,
                "project_description" => $this->project_description,
                "project_category" => $this->project_category,
                "project_publish_date" => $this->project_publish_date,
                "project_is_active" => $this->project_is_active,
                "project_created" => $this->project_created,
                "project_datetime" => $this->project_datetime,
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
            $sql .= "from {$this->tblProjects} ";
            $sql .= "order by project_aid desc ";
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
            $sql = "delete from {$this->tblProjects} ";
            $sql .= "where project_aid = :project_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_aid" => $this->project_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblProjects} set ";
            $sql .= "project_title = :project_title, ";
            $sql .= "project_year = :project_year, ";
            $sql .= "project_description = :project_description, ";
            $sql .= "project_category = :project_category, ";
            $sql .= "project_description = :project_description, ";
            $sql .= "project_publish_date = :project_publish_date, ";
            $sql .= "project_datetime = :project_datetime ";
            $sql .= "where project_aid  = :project_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_title" => $this->project_title,
                "project_year" => $this->project_year,
                "project_description" => $this->project_description,
                "project_category" => $this->project_category,
                "project_description" => $this->project_description,
                "project_publish_date" => $this->project_publish_date,
                "project_datetime" => $this->project_datetime,
                "project_aid" => $this->project_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblProjects} set ";
            $sql .= "project_is_active = :project_is_active, ";
            $sql .= "project_datetime = :project_datetime ";
            $sql .= "where project_aid  = :project_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_is_active" => $this->project_is_active,
                "project_datetime" => $this->project_datetime,
                "project_aid" => $this->project_aid,
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
            $sql .= "from {$this->tblProjects} ";
            $sql .= "where project_title like :project_title ";
            $sql .= "order by project_aid desc, ";
            $sql .= "project_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_title" => "%{$this->project_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}