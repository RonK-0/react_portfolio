<?php
$conn = null;
$conn = checkDbConnection();
$projectsImg = new ProjectsImg($conn);

$error = [];
$returnData = [];
if (array_key_exists("projectsimgid", $_GET)) {
    $projectsImg->project_img_aid = $_GET['projectsimgid'];
    checkId($projectsImg->project_img_aid);

    $query = checkDelete($projectsImg);
    returnSuccess($projectsImg, "projectsimg", $query);
}

checkEndpoint();