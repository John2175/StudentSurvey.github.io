<?php
// index.php

// Include the session.php file
require_once('session.php');
console.log("here");
?>


<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Student Survey Sphere</title>
        <link rel="stylesheet" href="style.css">
    </head>


    <!-- HEADER / MENU -->
    <header>
    <div class="menu-icon" onclick="toggleMenu()" display="">☰</div>
    <div><img class="profile_pic" src=""></div>
    <h1> Student Survey Sphere </h1>
    </header>

    <!-- SIDE MENU -->
    <div class="menu" id="myMenu">
        <a href="home.html">Home</a>
        <a href="account.html">Account</a>
    </div>

    <!-- SCRIPTS -->
    <script src="script.js"></script>
    <script src="https://accounts.google.com/gsi/client" async></script>


    <!-- BODY -->
    <body>

        <main onclick="onFocusMain()">

            <div id="g_id_onload"
                data-client_id="890705592007-767mqpnqd9u80dslp2g5hab1jj58krlp.apps.googleusercontent.com"
                data-auto_prompt="true"
                data-callback="handleCredentialResponse">
            </div>
            <div class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="filled_blue"
                data-text="sign_in_with"
                data-shape="pill"
                data-logo_alignment="left"
                data-width="100"
                style="padding-top: 20px; padding-left: 40%;">
            </div>

            <h2>Profile Name:</h2>
            <p class="profile_name"></p>

        </main>
    </body>
</html>

