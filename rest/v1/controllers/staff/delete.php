<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);

$error = [];
$returnData = [];
if (array_key_exists("staffid", $_GET)) {
    $staff->staff_aid = $_GET['staffid'];
    checkId($staff->staff_aid);

    $query = checkDelete($staff);
    returnSuccess($staff, "staff", $query);
}

checkEndpoint();