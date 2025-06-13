<?php
// process_contact.php - معالج نموذج الاتصال

// منع الوصول المباشر للملف
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 403 Forbidden');
    exit('لا يمكن الوصول مباشرة إلى هذا الملف');
}

// تهيئة متغير للرد
$response = [
    'success' => false,
    'message' => 'حدث خطأ في معالجة النموذج'
];

// التحقق من تعبئة الحقول المطلوبة
if (
    empty($_POST['name']) || 
    empty($_POST['email']) || 
    empty($_POST['subject']) || 
    empty($_POST['message'])
) {
    $response['message'] = 'يرجى تعبئة جميع الحقول المطلوبة';
    echo json_encode($response);
    exit;
}

// تنظيف وتحقق من البيانات المدخلة
$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$phone = !empty($_POST['phone']) ? filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING) : 'غير متوفر';
$subject = filter_var(trim($_POST['subject']), FILTER_SANITIZE_STRING);
$message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

// التحقق من صحة البريد الإلكتروني
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'يرجى إدخال عنوان بريد إلكتروني صالح';
    echo json_encode($response);
    exit;
}

// التحقق من reCAPTCHA (في الإصدار الحقيقي)
/*
if (empty($_POST['g-recaptcha-response'])) {
    $response['message'] = 'يرجى إكمال التحقق من reCAPTCHA';
    echo json_encode($response);
    exit;
}

$recaptchaSecret = 'YOUR_RECAPTCHA_SECRET_KEY';
$recaptchaResponse = $_POST['g-recaptcha-response'];
$verifyURL = "https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}";

$recaptchaResult = json_decode(file_get_contents($verifyURL));
if (!$recaptchaResult->success) {
    $response['message'] = 'فشل التحقق من reCAPTCHA. يرجى المحاولة مرة أخرى';
    echo json_encode($response);
    exit;
}
*/

// بناء نص البريد الإلكتروني
$emailSubject = "رسالة جديدة من موقع البيوت الذكية: {$subject}";

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .container { padding: 20px; border: 1px solid #e4e4e4; border-radius: 5px; }
        h2 { color: #3792AC; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2B5562; }
        .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>رسالة جديدة من موقع البيوت الذكية</h2>
        <div class='field'>
            <p class='label'>الاسم:</p>
            <p>{$name}</p>
        </div>
        <div class='field'>
            <p class='label'>البريد الإلكتروني:</p>
            <p>{$email}</p>
        </div>
        <div class='field'>
            <p class='label'>رقم الهاتف:</p>
            <p>{$phone}</p>
        </div>
        <div class='field'>
            <p class='label'>الموضوع:</p>
            <p>{$subject}</p>
        </div>
        <div class='field'>
            <p class='label'>الرسالة:</p>
            <p>{$message}</p>
        </div>
        <div class='footer'>
            <p>تم إرسال هذه الرسالة من نموذج الاتصال على موقع شركة البيوت الذكية للتطوير والاستثمار العقاري.</p>
        </div>
    </div>
</body>
</html>
";

// تكوين رؤوس البريد الإلكتروني
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$name} <{$email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// عنوان البريد الإلكتروني للمستلم (يجب تغييره)
$to = "info@albyout.com";

// في بيئة الإنتاج الحقيقية، نرسل البريد الإلكتروني
// mail($to, $emailSubject, $emailBody, $headers);

// تخزين الرسالة في قاعدة البيانات (يمكن تنفيذها في الإصدار الكامل)
// saveToDatabase($name, $email, $phone, $subject, $message);

// إرسال رسالة تأكيد إلى المرسل (اختياري)
// sendConfirmationEmail($email, $name);

// في هذا المثال التوضيحي، سنفترض نجاح الإرسال دائماً
$response['success'] = true;
$response['message'] = 'تم إرسال رسالتك بنجاح! سنرد عليك قريباً.';

// الرد بتنسيق JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
