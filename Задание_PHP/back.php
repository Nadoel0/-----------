<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER["REQUEST_METHOD"] === 'POST') {
        $nickname = $_POST['nickname'];
        $race = $_POST['race'];
        $characterClass = $_POST['characterClass'];
        $level = $_POST['level'];

        $response = array(
            'status' => 'success',
            'message' => 'Данные получены на сервер',
            'data' => array(
                'nickname' => $nickname,
                'race' => $race,
                'characterClass' => $characterClass,
                'level' => $level
            )
        );

        echo json_encode($response);
    } else {
        http_response_code(400);
    }