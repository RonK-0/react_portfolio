<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/ProjectsImg.php';

$conn = null;
$conn = checkDbConnection();

$projectsImg = new ProjectsImg($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("projectsimgid", $_GET)) {

        checkPayload($data);
        $projectsImg->project_img_aid = $_GET['projectsimgid'];
        $projectsImg->project_img_is_active = trim($data["isActive"]);
        $projectsImg->project_img_datetime = date("Y-m-d H:i:s");
        checkId($projectsImg->project_img_aid);
        $query = checkActive($projectsImg);
        http_response_code(200);
        returnSuccess($projectsImg, "projectsimg", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();