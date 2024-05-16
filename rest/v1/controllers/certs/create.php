<?php
$conn = null;
$conn = checkDbConnection();
$certs = new Certs($conn);
if (array_key_exists("certid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$certs->cert_title = checkIndex($data, "cert_title");
$certs->cert_org = checkIndex($data, "cert_org");
$certs->cert_image = checkIndex($data, "cert_image");
$certs->cert_date = checkIndex($data, "cert_date");
$certs->cert_is_active = 1;
$certs->cert_created = date("Y-m-d H:i:s");
$certs->cert_datetime = date("Y-m-d H:i:s");

// isNameExist($certs, $certs->cert_name);

$query = checkCreate($certs);
returnSuccess($certs, "certs", $query);