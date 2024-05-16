<?php

Class ProjectsFullCount {
    public $project_full_aid;
    public $project_full_title;
    public $project_full_year;
    public $project_full_description;
    public $project_full_category;
    public $project_full_imgs_count;
    public $project_full_skills_count;

    public $project_full_search;

    public $connection;
    public $tblProjectsFullCount;

    public function __construct($db){
        $this->connection = $db;
        $this->tblProjectsFullCount = "portfolio_projects_full_count";
    }
    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblProjectsFullCount} ";
            $sql .= "order by project_aid asc ";
            // $sql .= "order by project_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}