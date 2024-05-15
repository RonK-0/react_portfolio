<?php
$conn = null;
$conn = checkDbConnection();
$projectsImg = new ProjectsImg($conn);
if (array_key_exists("projectimgid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$projectsImg->project_img = checkIndex($data, "project_img");
$projectsImg->project_img_publish_date = checkIndex($data, "project_img_publish_date");
$projectsImg->project_id = checkIndex($data, "project_id");
$projectsImg->project_img_is_active = 1;
$projectsImg->project_img_created = date("Y-m-d H:i:s");
$projectsImg->project_img_datetime = date("Y-m-d H:i:s");

// isNameExist($projectsImg, $projectsImg->project_img_name);

$query = checkCreate($projectsImg);
returnSuccess($projectsImg, "projectsimg", $query);