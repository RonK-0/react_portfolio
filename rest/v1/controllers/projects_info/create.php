<?php
$conn = null;
$conn = checkDbConnection();
$projects = new ProjectsInfo($conn);
if (array_key_exists("projectid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$projects->project_title = checkIndex($data, "project_title");
$projects->project_year = checkIndex($data, "project_year");
$projects->project_description = checkIndex($data, "project_description");
$projects->project_category = checkIndex($data, "project_category");
$projects->project_publish_date = checkIndex($data, "project_publish_date");
$projects->project_is_active = 1;
$projects->project_created = date("Y-m-d H:i:s");
$projects->project_datetime = date("Y-m-d H:i:s");

// isNameExist($projects, $project->project_name);

$query = checkCreate($projects);
returnSuccess($projects, "projects", $query);