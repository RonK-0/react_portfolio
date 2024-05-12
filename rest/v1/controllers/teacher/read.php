<?php

$conn = null;
$conn = checkDbConnection();
$teacher = new Teacher($conn);
$error = [];
$returnData = [];

// if (array_key_exists("feeid", $_GET)) {
//     $teacher->fee_aid = $_GET['feeid'];
//     checkId($teacher->fee_aid);
//     $query = checkReadById($teacher);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($teacher);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();