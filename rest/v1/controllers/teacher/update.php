<?php
$conn = null;
$conn = checkDbConnection();
$teacher = new Teacher($conn);
$error = [];
$returnData = [];
if (array_key_exists("teacherid", $_GET)) {
    checkPayload($data);
    $teacher->teacher_aid = $_GET['teacherid'];
    $teacher->teacher_name = checkIndex($data, "teacher_name");
    $teacher->teacher_class = checkIndex($data, "teacher_class");
    $teacher->teacher_age = checkIndex($data, "teacher_age");
    $teacher->teacher_gender = checkIndex($data, "teacher_gender");
    $teacher->teacher_email = checkIndex($data, "teacher_email");
    $teacher->teacher_datetime = date("Y-m-d H:i:s");

    checkId($teacher->teacher_aid);
    // $teacher_name_old = checkIndex($data, "teacher_name_old");
    // compareName($teacher, $teacher_name_old, $teacher->teacher_name);
    $query = checkUpdate($teacher);
    returnSuccess($teacher, "teacher", $query);
}

checkEndpoint();