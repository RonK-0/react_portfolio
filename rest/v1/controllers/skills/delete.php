<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skillz($conn);

$error = [];
$returnData = [];
if (array_key_exists("skillid", $_GET)) {
    $skills->skill_aid = $_GET['skillid'];
    checkId($skills->skill_aid);

    $query = checkDelete($skills);
    returnSuccess($skills, "skills", $query);
}

checkEndpoint();