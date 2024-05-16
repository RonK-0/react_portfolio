<?php

$conn = null;
$conn = checkDbConnection();
$certs = new Certs($conn);
$error = [];
$returnData = [];

// if (array_key_exists("certid", $_GET)) {
//     $certs->certs_aid = $_GET['feeid'];
//     checkId($certs->cert_aid);
//     $query = checkReadById($certs);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($certs);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();