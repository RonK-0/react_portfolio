<?php

Class ProjectsFull {
    public $project_full_aid;
    public $project_full_title;
    public $project_full_year;
    public $project_full_description;
    public $project_full_category;
    public $project_full_imgs;
    public $project_full_skills;

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
}