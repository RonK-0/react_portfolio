<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Staff.php';

$conn = null;
$conn = checkDbConnection();

$staff = new Staff($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("staffid", $_GET)) {

        checkPayload($data);
        $staff->staff_aid = $_GET['staffid'];
        $staff->staff_is_active = trim($data["isActive"]);
        $staff->staff_datetime = date("Y-m-d H:i:s");
        checkId($staff->staff_aid);
        $query = checkActive($staff);
        http_response_code(200);
        returnSuccess($staff, "staff", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();