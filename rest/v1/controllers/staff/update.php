<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);
$error = [];
$returnData = [];
if (array_key_exists("staffid", $_GET)) {
    checkPayload($data);
    $staff->staff_aid = $_GET['staffid'];
    $staff->staff_name = checkIndex($data, "staff_name");
    $staff->staff_class = checkIndex($data, "staff_class");
    $staff->staff_age = checkIndex($data, "staff_age");
    $staff->staff_gender = checkIndex($data, "staff_gender");
    $staff->staff_email = checkIndex($data, "staff_email");
    $staff->staff_datetime = date("Y-m-d H:i:s");

    checkId($staff->staff_aid);
    // $staff_name_old = checkIndex($data, "staff_name_old");
    // compareName($staff, $staff_name_old, $staff->staff_name);
    $query = checkUpdate($staff);
    returnSuccess($staff, "staff", $query);
}

checkEndpoint();