<?php
$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

$error = [];
$returnData = [];
if (array_key_exists("studentid", $_GET)) {
    $student->student_aid = $_GET['studentid'];
    checkId($student->student_aid);

    $query = checkDelete($student);
    returnSuccess($student, "student", $query);
}

checkEndpoint();