<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Teacher.php';

$conn = null;
$conn = checkDbConnection();

$teacher = new Teacher($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("teacherid", $_GET)) {

        checkPayload($data);
        $teacher->teacher_aid = $_GET['teacherid'];
        $teacher->teacher_is_active = trim($data["isActive"]);
        $teacher->teacher_datetime = date("Y-m-d H:i:s");
        checkId($teacher->teacher_aid);
        $query = checkActive($teacher);
        http_response_code(200);
        returnSuccess($teacher, "teacher", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();