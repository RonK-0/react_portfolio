<?php
$conn = null;
$conn = checkDbConnection();
$projectSkill = new ProjectsSkill($conn);
if (array_key_exists("projskillid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$projectSkill->project_skill = checkIndex($data, "project_skill");
$projectSkill->project_skill_label = checkIndex($data, "project_skill_label");
$projectSkill->project_skill_publish_date = checkIndex($data, "project_skill_publish_date");
$projectSkill->project_id = checkIndex($data, "project_id");
$projectSkill->project_skill_is_active = 1;
$projectSkill->project_skill_created = date("Y-m-d H:i:s");
$projectSkill->project_skill_datetime = date("Y-m-d H:i:s");

// isNameExist($projectSkill, $projectSkill->project_skill_name);

$query = checkCreate($projectSkill);
returnSuccess($projectSkill, "projectsskill", $query);