<?php
// language_handler.php - معالج اللغات للموقع

session_start();

// اللغات المدعومة
$supported_languages = ['en', 'ar'];

// اللغة الافتراضية
$default_lang = 'en';

// التحقق من معامل اللغة في الرابط
if (isset($_GET['lang']) && in_array($_GET['lang'], $supported_languages)) {
    $_SESSION['lang'] = $_GET['lang'];
}

// تحديد اللغة الحالية
if (isset($_SESSION['lang'])) {
    $current_lang = $_SESSION['lang'];
} else {
    // محاولة تحديد اللغة من إعدادات المتصفح
    $browser_lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    if (in_array($browser_lang, $supported_languages)) {
        $current_lang = $browser_lang;
    } else {
        $current_lang = $default_lang;
    }
    $_SESSION['lang'] = $current_lang;
}

// إعداد encoding للغة العربية
if ($current_lang === 'ar') {
    header('Content-Type: text/html; charset=UTF-8');
}
?>