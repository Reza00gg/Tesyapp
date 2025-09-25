<?php
// send_sms.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mobile = trim($_POST['mobile']);
    $message = trim($_POST['message']);
    if (!preg_match('/^09\d{9}$/', $mobile) || empty($message)) {
        header('Location: index.php?status=fail&msg=ورودی نامعتبر است');
        exit;
    }
    $username = '';
    $password = '';
    $from = '';
    $to = $mobile;
    $text = $message;
    $url = 'https://rest.payamak-panel.com/api/SendSMS/SendSMS';
    $data = [
        'username' => $username,
        'password' => $password,
        'to' => $to,
        'from' => $from,
        'text' => $text,
    ];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $json = json_decode($response, true);
    if (
        ($httpcode == 200 && is_numeric($response) && intval($response) > 0) ||
        (is_array($json) && isset($json['RetStatus']) && $json['RetStatus'] == 1)
    ) {
        header('Location: index.php?status=success');
        exit;
    } else {
        header('Location: index.php?status=fail&msg=' . urlencode($response));
        exit;
    }
} else {
    header('Location: index.php');
    exit;
} 