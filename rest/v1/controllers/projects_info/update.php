<?php
$conn = null;
$conn = checkDbConnection();
$projects = new ProjectsInfo($conn);
$error = [];
$returnData = [];
if (array_key_exists("projectid", $_GET)) {
    checkPayload($data);
    $projects->project_aid = $_GET['projectid'];
    $projects->project_title = checkIndex($data, "project_title");
    $projects->project_year = checkIndex($data, "project_year");
    $projects->project_description = checkIndex($data, "project_description");
    $projects->project_category = checkIndex($data, "project_category");
    $projects->project_publish_date = checkIndex($data, "project_publish_date");
    $projects->project_datetime = date("Y-m-d H:i:s");

    checkId($projects->project_aid);
    // $project_name_old = checkIndex($data, "project_name_old");
    // compareName($project, $project_name_old, $project->project_name);
    $query = checkUpdate($projects);
    returnSuccess($projects, "projects", $query);
}

checkEndpoint();