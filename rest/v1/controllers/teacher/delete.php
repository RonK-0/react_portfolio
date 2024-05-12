<?php
$conn = null;
$conn = checkDbConnection();
$teacher = new Teacher($conn);

$error = [];
$returnData = [];
if (array_key_exists("teacherid", $_GET)) {
    $teacher->teacher_aid = $_GET['teacherid'];
    checkId($teacher->teacher_aid);

    $query = checkDelete($teacher);
    returnSuccess($teacher, "teacher", $query);
}

checkEndpoint();