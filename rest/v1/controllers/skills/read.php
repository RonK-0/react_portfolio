<?php

$conn = null;
$conn = checkDbConnection();
$skills = new Skillz($conn);
$error = [];
$returnData = [];

if (array_key_exists("skillid", $_GET)) {
    $skills->fee_aid = $_GET['skillid'];
    checkId($skills->skill_aid);
    $query = checkReadById($skills);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($skills);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();