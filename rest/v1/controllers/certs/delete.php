<?php
$conn = null;
$conn = checkDbConnection();
$certs = new Certs($conn);

$error = [];
$returnData = [];
if (array_key_exists("certid", $_GET)) {
    $certs->cert_aid = $_GET['certid'];
    checkId($certs->cert_aid);

    $query = checkDelete($certs);
    returnSuccess($certs, "certs", $query);
}

checkEndpoint();