<?php

$conn = null;
$conn = checkDbConnection();
$projectSkill = new ProjectsSkill($conn);
$error = [];
$returnData = [];

// if (array_key_exists("feeid", $_GET)) {
//     $projectSkill->fee_aid = $_GET['feeid'];
//     checkId($projectSkill->fee_aid);
//     $query = checkReadById($projectSkill);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($projectSkill);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();