<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/ProjectsSkill.php';

$conn = null;
$conn = checkDbConnection();

$projectSkill = new ProjectsSkill($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("projskillid", $_GET)) {

        checkPayload($data);
        $projectSkill->project_skill_aid = $_GET['projskillid'];
        $projectSkill->project_skill_is_active = trim($data["isActive"]);
        $projectSkill->project_skill_datetime = date("Y-m-d H:i:s");
        checkId($projectSkill->project_skill_aid);
        $query = checkActive($projectSkill);
        http_response_code(200);
        returnSuccess($projectSkill, "projectsskill", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();