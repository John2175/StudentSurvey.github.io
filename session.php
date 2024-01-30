<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    console.log($_SESSION['user_id']);
    // Redirect to login page or perform other actions
    header('Location: login.php');
    exit();
}
// Rest of your code for the protected page

