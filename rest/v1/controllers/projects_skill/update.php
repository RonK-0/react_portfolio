<?php
$conn = null;
$conn = checkDbConnection();
$projectSkill = new ProjectsSkill($conn);
$error = [];
$returnData = [];
if (array_key_exists("projskillid", $_GET)) {
    checkPayload($data);
    $projectSkill->project_skill_aid = $_GET['projskillid'];
    $projectSkill->project_skill = checkIndex($data, "project_skill");
    $projectSkill->project_skill_label = checkIndex($data, "project_skill_label");
    $projectSkill->project_skill_publish_date = checkIndex($data, "project_skill_publish_date");
    $projectSkill->project_skill_datetime = date("Y-m-d H:i:s");
    $projectSkill->project_id = checkIndex($data, "project_id");

    checkId($projectSkill->project_skill_aid);
    // $projectSkill_name_old = checkIndex($data, "projectsskill_name_old");
    // compareName($projectSkill, $projectSkill_name_old, $projectskill->projectsskill_name);
    $query = checkUpdate($projectSkill);
    returnSuccess($projectSkill, "projectsskill", $query);
}

checkEndpoint();