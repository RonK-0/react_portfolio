<?php

$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);
$error = [];
$returnData = [];

// if (array_key_exists("feeid", $_GET)) {
//     $staff->fee_aid = $_GET['feeid'];
//     checkId($staff->fee_aid);
//     $query = checkReadById($staff);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($staff);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();