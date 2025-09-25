<?php
// index.php
?>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>ارسال پیامک با ملی پیامک</title>
    <link rel="stylesheet" href="style.css">
    <script>
    function showLoading() {
        var btn = document.getElementById('sendBtn');
        btn.disabled = true;
        btn.innerHTML = '<span class="loader"></span> در حال ارسال...';
    }
    </script>
    <style>
    .loader {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 3px solid #fff;
        border-radius: 50%;
        border-top: 3px solid #4f8cff;
        animation: spin 1s linear infinite;
        vertical-align: middle;
        margin-left: 8px;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    </style>
</head>
<body>
<div class="container">
    <h2>ارسال پیامک</h2>
    <form method="post" action="send_sms.php" onsubmit="showLoading()">
        <label for="mobile">شماره موبایل:</label>
        <input type="text" id="mobile" name="mobile" placeholder="مثلاً 09123456789" required>
        <label for="message">متن پیامک:</label>
        <textarea id="message" name="message" rows="4" placeholder="متن پیامک را وارد کنید..." required></textarea>
        <button type="submit" id="sendBtn">ارسال پیامک</button>
    </form>
    <?php
    if (isset($_GET['status'])) {
        $status = $_GET['status'];
        $msg = isset($_GET['msg']) ? urldecode($_GET['msg']) : '';
        if ($status === 'success') {
            echo '<div class="status">پیامک با موفقیت ارسال شد.</div>';
        } else {
            echo '<div class="status">ارسال پیامک با خطا مواجه شد!';
            if ($msg) echo '<br><span style="font-size:13px;color:#ffb4b4">' . htmlspecialchars($msg) . '</span>';
            echo '</div>';
        }
    }
    ?>
</div>
</body>
</html> 