<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Skillz.php';

$conn = null;
$conn = checkDbConnection();

$skills = new Skillz($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("skillid", $_GET)) {

        checkPayload($data);
        $skills->skill_aid = $_GET['skillid'];
        $skills->skill_is_active = trim($data["isActive"]);
        $skills->skill_datetime = date("Y-m-d H:i:s");
        checkId($skills->skill_aid);
        $query = checkActive($skills);
        http_response_code(200);
        returnSuccess($skills, "skills", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();