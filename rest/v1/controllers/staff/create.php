<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);
if (array_key_exists("staffid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$staff->staff_name = checkIndex($data, "staff_name");
$staff->staff_class = checkIndex($data, "staff_class");
$staff->staff_age = checkIndex($data, "staff_age");
$staff->staff_gender = checkIndex($data, "staff_gender");
$staff->staff_email = checkIndex($data, "staff_email");
$staff->staff_is_active = 1;
$staff->staff_created = date("Y-m-d H:i:s");
$staff->staff_datetime = date("Y-m-d H:i:s");

// isNameExist($staff, $staff->staff_name);

$query = checkCreate($staff);
returnSuccess($staff, "staff", $query);