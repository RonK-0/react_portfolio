<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skillz($conn);
$error = [];
$returnData = [];
if (array_key_exists("skillid", $_GET)) {
    checkPayload($data);
    $skills->skill_aid = $_GET['skillid'];
    $skills->skill_title = checkIndex($data, "skill_title");
    $skills->skill_image = checkIndex($data, "skill_image");
    $skills->skill_publish_date = checkIndex($data, "skill_publish_date");
    $skills->skill_datetime = date("Y-m-d H:i:s");

    checkId($skills->skill_aid);
    // $skill_name_old = checkIndex($data, "skill_name_old");
    // compareName($skill, $skill_name_old, $skill->skill_name);
    $query = checkUpdate($skills);
    returnSuccess($skills, "skills", $query);
}

checkEndpoint();