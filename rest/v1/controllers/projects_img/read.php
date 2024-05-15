<?php

$conn = null;
$conn = checkDbConnection();
$projectsImg = new ProjectsImg($conn);
$error = [];
$returnData = [];

// if (array_key_exists("feeid", $_GET)) {
//     $projectsImg->fee_aid = $_GET['feeid'];
//     checkId($projectsImg->fee_aid);
//     $query = checkReadById($projectsImg);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($projectsImg);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();