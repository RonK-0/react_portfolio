<?php
$conn = null;
$conn = checkDbConnection();
$projects = new Projects($conn);

$error = [];
$returnData = [];
if (array_key_exists("projectid", $_GET)) {
    $projects->project_aid = $_GET['projectid'];
    checkId($projects->project_aid);

    $query = checkDelete($projects);
    returnSuccess($projects, "project", $query);
}

checkEndpoint();