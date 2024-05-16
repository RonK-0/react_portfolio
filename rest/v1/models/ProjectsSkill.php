<?php

Class ProjectsSkill {
    public $project_skill_aid;
    public $project_skill;
    public $project_skill_label;
    public $project_skill_is_active;
    public $project_skill_publish_date;
    public $project_skill_created;
    public $project_skill_datetime;
    public $project_id;
    public $lastInsertedId;

    public $project_skill_search;

    public $connection;
    public $tblProjects;
    public $tblProjectsSkill;

    public function __construct($db){
        $this->connection = $db;
        $this->tblProjects = "portfolio_projects";
        $this->tblProjectsSkill = "portfolio_projects_skill";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblProjectsSkill} (";
            $sql .= "project_skill, ";
            $sql .= "project_skill_label, ";
            $sql .= "project_skill_is_active, ";
            $sql .= "project_skill_publish_date, ";
            $sql .= "project_skill_created, ";
            $sql .= "project_skill_datetime, ";
            $sql .= "project_id ";
            $sql .= " ) values ( ";
            $sql .= ":project_skill, ";
            $sql .= ":project_skill_label, ";
            $sql .= ":project_skill_is_active, ";
            $sql .= ":project_skill_publish_date, ";
            $sql .= ":project_skill_created, ";
            $sql .= ":project_skill_datetime, ";
            $sql .= ":project_id ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_skill" => $this->project_skill,
                "project_skill_label" => $this->project_skill_label,
                "project_skill_is_active" => $this->project_skill_is_active,
                "project_skill_publish_date" => $this->project_skill_publish_date,
                "project_skill_created" => $this->project_skill_created,
                "project_skill_datetime" => $this->project_skill_datetime,
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
            $sql = "select  ";
            // $sql .= " * from {$this->tblProjectsSkill} ";
            $sql .= "{$this->tblProjects}.project_aid, ";
            $sql .= "{$this->tblProjects}.project_title, ";
            $sql .= "{$this->tblProjectsSkill}.* ";
            $sql .= "from {$this->tblProjectsSkill} ";
            $sql .= "inner join {$this->tblProjects} ";
            $sql .= "where {$this->tblProjectsSkill}.project_id={$this->tblProjects}.project_aid ";
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
            $sql = "delete from {$this->tblProjectsSkill} ";
            $sql .= "where project_skill_aid = :project_skill_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_skill_aid" => $this->project_skill_aid,
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
            $sql = "update {$this->tblProjectsSkill} set ";
            $sql .= "project_skill = :project_skill, ";
            $sql .= "project_skill_label = :project_skill_label, ";
            $sql .= "project_skill_publish_date = :project_skill_publish_date, ";
            $sql .= "project_skill_datetime = :project_skill_datetime, ";
            $sql .= "project_id = :project_id ";
            $sql .= "where project_skill_aid = :project_skill_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_skill" => $this->project_skill,
                "project_skill_label" => $this->project_skill_label,
                "project_skill_publish_date" => $this->project_skill_publish_date,
                "project_skill_datetime" => $this->project_skill_datetime,
                "project_id" => $this->project_id,
                "project_skill_aid" => $this->project_skill_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblProjectsSkill} set ";
            $sql .= "project_skill_is_active = :project_skill_is_active, ";
            $sql .= "project_skill_datetime = :project_skill_datetime ";
            $sql .= "where project_skill_aid  = :project_skill_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_skill_is_active" => $this->project_skill_is_active,
                "project_skill_datetime" => $this->project_skill_datetime,
                "project_skill_aid" => $this->project_skill_aid
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
            $sql .= "from {$this->tblProjectsSkill} ";
            $sql .= "where project_skill like :project_skill ";
            $sql .= "order by project_skill_aid asc, ";
            $sql .= "project_skill asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "project_skill" => "%{$this->project_skill_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}