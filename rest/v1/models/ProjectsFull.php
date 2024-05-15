<?php

Class ProjectsFull {
    public $project_full_aid;
    public $project_full_title;
    public $project_full_year;
    public $project_full_description;
    public $project_full_category;
    public $project_full_img;
    public $project_full_skill;

    public $project_full_search;

    public $connection;
    public $tblProjectsFull;

    public function __construct($db){
        $this->connection = $db;
        $this->tblProjectsFull = "portfolio_projects_full";
    }
    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblProjectsFull} ";
            $sql .= "order by project_aid asc ";
            // $sql .= "order by project_aid asc ";
            $query = $this->connection->query($sql);
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
            $sql .= "from {$this->tblProjectsFull} ";
            $sql .= "where project_title like :project_title ";
            $sql .= "order by project_aid asc, ";
            $sql .= "project_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_title" => "%{$this->project_full_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}