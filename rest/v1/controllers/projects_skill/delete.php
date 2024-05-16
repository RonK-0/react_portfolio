<?php
$conn = null;
$conn = checkDbConnection();
$projectSkill = new ProjectsSkill($conn);

$error = [];
$returnData = [];
if (array_key_exists("projskillid", $_GET)) {
    $projectSkill->project_skill_aid = $_GET['projskillid'];
    checkId($projectSkill->project_skill_aid);

    $query = checkDelete($projectSkill);
    returnSuccess($projectSkill, "projectsskill", $query);
}

checkEndpoint();