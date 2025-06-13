<?php
session_start();

$supported_languages = ['en', 'ar'];

$default_lang = 'en';

if (isset($_GET['lang']) && in_array($_GET['lang'], $supported_languages)) {
    $_SESSION['lang'] = $_GET['lang'];
}

if (isset($_SESSION['lang'])) {
    $current_lang = $_SESSION['lang'];
} else {
    $browser_lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    if (in_array($browser_lang, $supported_languages)) {
        $current_lang = $browser_lang;
    } else {
        $current_lang = $default_lang;
    }
    $_SESSION['lang'] = $current_lang;
}
?>
