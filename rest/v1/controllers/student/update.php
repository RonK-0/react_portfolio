<?php
$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);
$error = [];
$returnData = [];
if (array_key_exists("studentid", $_GET)) {
    checkPayload($data);
    $student->student_aid = $_GET['studentid'];
    $student->student_name = checkIndex($data, "student_name");
    $student->student_class = checkIndex($data, "student_class");
    $student->student_age = checkIndex($data, "student_age");
    $student->student_gender = checkIndex($data, "student_gender");
    $student->student_email = checkIndex($data, "student_email");
    $student->student_datetime = date("Y-m-d H:i:s");

    checkId($student->student_aid);
    // $student_name_old = checkIndex($data, "student_name_old");
    // compareName($student, $student_name_old, $student->student_name);
    $query = checkUpdate($student);
    returnSuccess($student, "student", $query);
}

checkEndpoint();