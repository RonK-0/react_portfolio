<?php
$conn = null;
$conn = checkDbConnection();
$certs = new Certs($conn);
$error = [];
$returnData = [];
if (array_key_exists("certid", $_GET)) {
    checkPayload($data);
    $certs->cert_aid = $_GET['certid'];
    $certs->cert_title = checkIndex($data, "cert_title");
    $certs->cert_org = checkIndex($data, "cert_org");
    $certs->cert_image = checkIndex($data, "cert_image");
    $certs->cert_date = checkIndex($data, "cert_date");
    $certs->cert_datetime = date("Y-m-d H:i:s");

    checkId($certs->cert_aid);
    // $cert_name_old = checkIndex($data, "cert_name_old");
    // compareName($cert, $cert_name_old, $cert->cert_name);
    $query = checkUpdate($certs);
    returnSuccess($certs, "certs", $query);
}

checkEndpoint();