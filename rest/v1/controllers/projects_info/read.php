<?php

$conn = null;
$conn = checkDbConnection();
$projects = new ProjectsInfo($conn);
$error = [];
$returnData = [];

// if (array_key_exists("feeid", $_GET)) {
//     $projects->fee_aid = $_GET['feeid'];
//     checkId($projects->fee_aid);
//     $query = checkReadById($projects);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($projects);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();