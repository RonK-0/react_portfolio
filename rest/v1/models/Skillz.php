<?php

Class Skillz {
    public $skill_aid;
    public $skill_title;
    public $skill_image;
    public $skill_is_active;
    public $skill_publish_date;
    public $skill_created;
    public $skill_datetime;
    public $lastInsertedId;

    public $skill_search;

    public $connection;
    public $tblSkills;

    public function __construct($db){
        $this->connection = $db;
        $this->tblSkills = "portfolio_skills";
    }

    public function create() {
        try{
            $sql = "insert into {$this->tblSkills} (";
            $sql .= "skill_title, ";
            $sql .= "skill_image, ";
            $sql .= "skill_is_active, ";
            $sql .= "skill_publish_date, ";
            $sql .= "skill_created, ";
            $sql .= "skill_datetime ";
            $sql .= " ) values ( ";
            $sql .= ":skill_title, ";
            $sql .= ":skill_image, ";
            $sql .= ":skill_is_active, ";
            $sql .= ":skill_publish_date, ";
            $sql .= ":skill_created, ";
            $sql .= ":skill_datetime ";
            $sql .= ")";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "skill_title" => $this->skill_title,
                "skill_image" => $this->skill_image,
                "skill_is_active" => $this->skill_is_active,
                "skill_publish_date" => $this->skill_publish_date,
                "skill_created" => $this->skill_created,
                "skill_datetime" => $this->skill_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex){
            $query = false;
        }

        
        return $query;
    }

	public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblSkills} ";
            $sql .= "order by skill_aid asc ";
            // $sql .= "order by project_aid asc ";
			$query = $this->connection->prepare($sql);
            $query->execute([
                "skill_aid" => $this->skill_aid,
            ]);
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
	
    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblSkills} ";
            $sql .= "order by skill_aid asc ";
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
            $sql = "delete from {$this->tblSkills} ";
            $sql .= "where skill_aid = :skill_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skill_aid" => $this->skill_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "skill_title = :skill_title, ";
            $sql .= "skill_image = :skill_image, ";
            $sql .= "skill_publish_date = :skill_publish_date, ";
            $sql .= "skill_datetime = :skill_datetime ";
            $sql .= "where skill_aid  = :skill_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skill_title" => $this->skill_title,
                "skill_image" => $this->skill_image,
                "skill_publish_date" => $this->skill_publish_date,
                "skill_datetime" => $this->skill_datetime,
                "skill_aid" => $this->skill_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "skill_is_active = :skill_is_active, ";
            $sql .= "skill_datetime = :skill_datetime ";
            $sql .= "where skill_aid  = :skill_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skill_is_active" => $this->skill_is_active,
                "skill_datetime" => $this->skill_datetime,
                "skill_aid" => $this->skill_aid,
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
            $sql .= "from {$this->tblSkills} ";
            $sql .= "where skill_title like :skill_title ";
            $sql .= "order by skill_aid asc, ";
            $sql .= "skill_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skill_title" => "%{$this->skill_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}