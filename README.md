<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlexFit Gym</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');

        /* Fade-in animation */
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        body {
            background: url('gymbg.jpg') center / cover no-repeat fixed;
            color: #fff;
            font-family: 'Roboto Condensed', sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overflow-x: hidden;
            animation: fadeIn 4s ease-in-out; /* Apply 4-sec fade-in */
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #222;
            box-shadow: 0 0 15px 5px #FFD700;
        }

        .navbar .logo img {
            width: 50px;
            height: 50px;
        }

        .navbar a {
            color: #FFD700;
            text-decoration: none;
            margin: 0 15px;
            padding: 10px;
            border-radius: 5px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .navbar a:hover {
            background-color: #FFD700;
            color: #000;
            box-shadow: 0 0 10px #FFD700;
        }

        .hero-section {
            text-align: center;
            padding: 80px 20px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #FFD700;
            animation: fadeIn 3s ease-in-out;
        }

        .hero-section h1 {
            font-size: 3.5em;
            margin-bottom: 10px;
        }

        .hero-section p {
            font-size: 1.5em;
            margin-bottom: 30px;
        }

        .hero-section .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .hero-section .cta-buttons a {
            padding: 15px 30px;
            background-color: #FFD700;
            color: #000;
            text-decoration: none;
            font-size: 1.2em;
            border-radius: 5px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-section .cta-buttons a:hover {
            background-color: #000;
            color: #FFD700;
            box-shadow: 0 0 15px 5px #FFD700;
        }

        .features-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 40px 20px;
            background-color: rgba(0, 0, 0, 0.9);
        }

        .feature-card {
            background: #222;
            border-radius: 10px;
            overflow: hidden;
            width: 280px;
            margin: 20px;
            box-shadow: 0 0 15px 5px rgba(255, 215, 0, 0.5);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }

        .feature-card-content {
            padding: 15px;
            text-align: center;
        }

        .feature-card-content h3 {
            color: #FFD700;
        }

        .feature-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px 10px rgba(255, 215, 0, 0.6);
        }

        .find-us {
            padding: 40px 20px;
            text-align: center;
            background-color: #111;
            color: #FFD700;
            box-shadow: 0 0 15px 5px #FFD700;
        }

        .find-us h2 {
            margin-bottom: 20px;
        }

        .find-us p {
            margin: 10px 0;
        }

        .social-icons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }

        .social-icons a img {
            width: 40px;
            height: 40px;
            transition: transform 0.3s ease;
        }

        .social-icons a img:hover {
            transform: scale(1.2);
        }

        .footer {
            background-color: #222;
            color: #fff;
            padding: 20px;
            text-align: center;
            box-shadow: 0 0 15px 5px #FFD700;
        }

        .footer a {
            color: #FFD700;
            text-decoration: none;
            margin: 0 10px;
        }

        .footer a:hover {
            color: #fff;
        }

        .about-flexfit {
            padding: 40px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #111;
            color: #FFD700;
        }

        .about-box {
            background-color: #212121;
            padding: 30px;
            border-radius: 10px;
            max-width: 800px;
            width: 100%;
            box-shadow: 0 0 15px 5px #FFD700;
            text-align: center;
        }

        .about-box h2 {
            font-size: 2em;
            margin-bottom: 15px;
        }

        .about-box p {
            font-size: 1.1em;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">
            <img src="logo.png" alt="FlexFit Gym Logo">
        </div>
        <div>
            <a href="about.html">About us</a>
            <a href="center.html">Center</a>
            <a href="support.html">Support</a>
        </div>
    </nav>

    <section class="hero-section">
        <h1>WELCOME TO FLEXFIT</h1>
        <p>GET INTO GOOD ADDICTION</p>
        <div class="cta-buttons">
            <a href="explore.html">Explore</a>
            <a href="newjoin.html">Join</a>
        </div>
    </section>

    <section class="about-flexfit">
        <div class="about-box">
            <h2>About FlexFit</h2>
            <p>At Flex Fit, we believe that everyone has the potential to transform their body and their life.
                Our primary focus is to help individuals achieve their dream physique, whatever that may be.
                Whether you're aiming to lose fat, gain muscle, improve your strength, or compete at the
                highest level in bodybuilding, we have the tools and expertise to make it happen.</p>
        </div>
    </section>

    <section class="features-section">
        <div class="feature-card">
            <img src="gym1.jpg" alt="Strength Training">
            <div class="feature-card-content">
                <h3>Strength Training</h3>
                <p>Build muscle and gain strength with our comprehensive strength training programs.</p>
            </div>
        </div>
        <div class="feature-card">
            <img src="gym2.jpg" alt="Cardio Workouts">
            <div class="feature-card-content">
                <h3>Cardio Workouts</h3>
                <p>Get your heart pumping with high-energy cardio sessions designed for all levels.</p>
            </div>
        </div>
        <div class="feature-card">
            <img src="gym3.jpg" alt="Personal Training">
            <div class="feature-card-content">
                <h3>Personal Training</h3>
                <p>Work one-on-one with our certified trainers to achieve your personal fitness goals.</p>
            </div>
        </div>
    </section>

    <section class="find-us">
        <h2>Find Us</h2>
        <p>Plot no 5, First Floor, Muthusamy Main Road, Muthusamy Nagar, Chrompet, Chennai 600044</p>
        <div class="social-icons">
            <p>Contact us And Follow Us Through:</p>
            <a href="https://www.instagram.com/https://www.instagram.com/flex._.fit_?igsh=MWg3dnhjeWIxaTQ5MA==" target="_blank">
                <img src="ins.png.jpg" alt="Instagram">
            </a>
            <a href="https://www.facebook.com/your_facebook_profile" target="_blank">
                <img src="face.png.jpg" alt="Facebook">
            </a>
            <a href="https://twitter.com/your_twitter_handle" target="_blank">
                <img src="X.jpg.png" alt="X">
            </a>
            <a href="https://api.whatsapp.com/send?phone= +91 99408 46719" target="_blank">
                <img src="whats.jpg" alt="WhatsApp">
            </a>
            <a href="mailto:sanjayraja344@gmail.com" target="_blank">
            <img src="mail.jpg.webp" alt="Email"> </a>
    </div>
</section>

<footer class="footer">
    <p>&copy; 2024 FlexFit Gym. All rights reserved. <a href="privacy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a></p>
</footer>
</body>
</html>
