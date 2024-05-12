<?php
$conn = null;
$conn = checkDbConnection();
$teacher = new Teacher($conn);
if (array_key_exists("teacherid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$teacher->teacher_name = checkIndex($data, "teacher_name");
$teacher->teacher_class = checkIndex($data, "teacher_class");
$teacher->teacher_age = checkIndex($data, "teacher_age");
$teacher->teacher_gender = checkIndex($data, "teacher_gender");
$teacher->teacher_email = checkIndex($data, "teacher_email");
$teacher->teacher_is_active = 1;
$teacher->teacher_created = date("Y-m-d H:i:s");
$teacher->teacher_datetime = date("Y-m-d H:i:s");

// isNameExist($teacher, $teacher->teacher_name);

$query = checkCreate($teacher);
returnSuccess($teacher, "teacher", $query);