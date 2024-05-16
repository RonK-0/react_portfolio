<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/ProjectsFullCount.php';

$body = file_get_contents('php://input');
$data = json_decode($body, true);

if(isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
}

http_response_code(200);
checkAccess();