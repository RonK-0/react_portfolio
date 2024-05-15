<?php

Class ProjectsImg {
    public $project_img_aid;
    public $project_img;
    public $project_img_is_active;
    public $project_img_publish_date;
    public $project_img_created;
    public $project_img_datetime;
    public $project_id;
    public $lastInsertedId;

    public $project_img_search;

    public $connection;
    public $tblProjects;
    public $tblProjectsImg;

    public function __construct($db){
        $this->connection = $db;
        $this->tblProjectsImg = "portfolio_projects_img";
        $this->tblProjects = "portfolio_projects";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblProjectsImg} (";
            $sql .= "project_img, ";
            $sql .= "project_img_is_active, ";
            $sql .= "project_img_publish_date, ";
            $sql .= "project_img_created, ";
            $sql .= "project_img_datetime, ";
            $sql .= "project_id ";
            $sql .= " ) values ( ";
            $sql .= ":project_img, ";
            $sql .= ":project_img_is_active, ";
            $sql .= ":project_img_publish_date, ";
            $sql .= ":project_img_created, ";
            $sql .= ":project_img_datetime, ";
            $sql .= ":project_id ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_img" => $this->project_img,
                "project_img_is_active" => $this->project_img_is_active,
                "project_img_publish_date" => $this->project_img_publish_date,
                "project_img_created" => $this->project_img_created,
                "project_img_datetime" => $this->project_img_datetime,
                "project_id" => $this->project_id,
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
            // $sql = "select * ";
            // $sql .= "from {$this->tblProjectsImg} ";
            $sql = "select ";
            $sql .= "{$this->tblProjects}.project_aid, ";
            $sql .= "{$this->tblProjects}.project_title, ";
            $sql .= "{$this->tblProjectsImg}.* ";
            $sql .= "from {$this->tblProjectsImg} ";
            $sql .= "inner join {$this->tblProjects} ";
            $sql .= "where {$this->tblProjectsImg}.project_id={$this->tblProjects}.project_aid ";
            $sql .= "order by project_id asc ";
            // $sql .= "order by project_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    #broken
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblProjectsImg} ";
            $sql .= "where project_img_aid = :project_img_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_img_aid" => $this->project_img_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    #broken
    public function update()
    {
        try {
            $sql = "update {$this->tblProjectsImg} set ";
            $sql .= "project_img = :project_img, ";
            $sql .= "project_img_publish_date = :project_img_publish_date, ";
            $sql .= "project_img_datetime = :project_img_datetime, ";
            $sql .= "project_id = :project_id ";
            $sql .= "where project_img_aid = :project_img_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_img" => $this->project_img,
                "project_img_publish_date" => $this->project_img_publish_date,
                "project_img_datetime" => $this->project_img_datetime,
                "project_id" => $this->project_id,
                "project_img_aid" => $this->project_img_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblProjectsImg} set ";
            $sql .= "project_img_is_active = :project_img_is_active, ";
            $sql .= "project_img_datetime = :project_img_datetime ";
            $sql .= "where project_img_aid  = :project_img_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_img_is_active" => $this->project_img_is_active,
                "project_img_datetime" => $this->project_img_datetime,
                "project_img_aid" => $this->project_img_aid
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
            $sql .= "from {$this->tblProjectsImg} ";
            $sql .= "where project_img like :project_img ";
            $sql .= "order by project_img_aid asc, ";
            $sql .= "project_img asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_img" => "%{$this->project_img_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}