<?php

$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);
$error = [];
$returnData = [];

// if (array_key_exists("feeid", $_GET)) {
//     $student->fee_aid = $_GET['feeid'];
//     checkId($student->fee_aid);
//     $query = checkReadById($student);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($student);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();