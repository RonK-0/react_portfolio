<?php
$conn = null;
$conn = checkDbConnection();
$projectsImg = new ProjectsImg($conn);
$error = [];
$returnData = [];
if (array_key_exists("projectsimgid", $_GET)) {
    checkPayload($data);
    $projectsImg->project_img_aid = $_GET['projectsimgid'];
    $projectsImg->project_img = checkIndex($data, "project_img");
    $projectsImg->project_img_publish_date = checkIndex($data, "project_img_publish_date");
    $projectsImg->project_img_datetime = date("Y-m-d H:i:s");
    $projectsImg->project_id = checkIndex($data, "project_id");

    checkId($projectsImg->project_img_aid);
    // $projectsImg_name_old = checkIndex($data, "projectsImg_name_old");
    // compareName($projectsImg, $projectsImg_name_old, $projectImg->projectsImg_name);
    $query = checkUpdate($projectsImg);
    returnSuccess($projectsImg, "projectsimg", $query);
}

checkEndpoint();