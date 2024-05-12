<?php
$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);
if (array_key_exists("studentid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$student->student_name = checkIndex($data, "student_name");
$student->student_class = checkIndex($data, "student_class");
$student->student_age = checkIndex($data, "student_age");
$student->student_gender = checkIndex($data, "student_gender");
$student->student_email = checkIndex($data, "student_email");
$student->student_is_active = 1;
$student->student_created = date("Y-m-d H:i:s");
$student->student_datetime = date("Y-m-d H:i:s");

// isNameExist($student, $student->student_name);

$query = checkCreate($student);
returnSuccess($student, "student", $query);