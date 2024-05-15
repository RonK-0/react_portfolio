<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skillz($conn);
if (array_key_exists("skillid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$skills->skill_title = checkIndex($data, "skill_title");
$skills->skill_image = checkIndex($data, "skill_image");
$skills->skill_publish_date = checkIndex($data, "skill_publish_date");
$skills->skill_is_active = 1;
$skills->skill_created = date("Y-m-d H:i:s");
$skills->skill_datetime = date("Y-m-d H:i:s");

// isNameExist($skills, $skills->skill_name);

$query = checkCreate($skills);
returnSuccess($skills, "skills", $query);