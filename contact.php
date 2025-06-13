<?php
require_once 'language_handler.php';
?>
<html lang="<?php echo $current_lang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-en="Albyout Alzakiya - Contact Us" data-ar="البيوت الذكية - اتصل بنا">Albyout Alzakiya - Contact Us</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Cairo:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <!-- لوجو الشركة -->
            <div class="logo-container">
                <img src="logo.png" alt="البيوت الذكية - Albyout Alzakiya" class="logo">
            </div>
            
            <!-- قائمة التنقل -->
            <div class="navbar">
                <nav>
                    <ul>
                        <li><a href="index.php" data-en="Home" data-ar="الرئيسية">Home</a></li>
                        <li><a href="about.php" data-en="About Us" data-ar="من نحن">About Us</a></li>
                        <li><a href="services.php" data-en="Services" data-ar="خدماتنا">Services</a></li>
                        <li><a href="contact.php" data-en="Contact" data-ar="اتصل بنا">Contact</a></li>
                    </ul>
                </nav>
            </div>
            
            <!-- منطقة الأزرار -->
            <div class="header-actions">
                <div class="lang-switcher">
                    <button id="lang-toggle" data-lang="<?php echo $current_lang; ?>">
                        <span class="lang-icon">🌐</span>
                        <span><?php echo ($current_lang === 'en') ? 'العربية' : 'English'; ?></span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="hero-background" style="background-image: url('https://placehold.co/1200x600/A0B4C2/FFFFFF?text=Contact+Us');" onerror="this.src='https://placehold.co/1200x600/A0B4C2/FFFFFF?text=Fallback+Image';"></div>
            <div class="container">
                <h2 data-en="Get In Touch With Us" data-ar="تواصل معنا">Get In Touch With Us</h2>
                <p data-en="We'd love to hear from you. Reach out to us for any inquiries or collaboration opportunities." data-ar="يسعدنا سماع آرائكم. تواصلوا معنا لأي استفسارات أو فرص تعاون.">We'd love to hear from you. Reach out to us for any inquiries or collaboration opportunities.</p>
            </div>
        </section>

        <section id="contact-content">
            <div class="container">
                <h3 data-en="Contact Us" data-ar="اتصل بنا">Contact Us</h3>

                <div class="contact-wrapper">
                    <div class="contact-info">
                        <h4 data-en="Our Contact Information" data-ar="معلومات الاتصال بنا">Our Contact Information</h4>
                        
                        <div class="contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <div>
                                <h5 data-en="Phone" data-ar="الهاتف">Phone</h5>
                                <p>+966 12 622 2272 <span data-en="Ext." data-ar="تحويلة">Ext.</span> 108</p>
                                <p>+966 54 644 9669</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h5 data-en="Email" data-ar="البريد الإلكتروني">Email</h5>
                                <p><a href="mailto:info@albyout.com">info@albyout.com</a></p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h5 data-en="Address" data-ar="العنوان">Address</h5>
                                <p data-en="Kingdom of Saudi Arabia, Jeddah - Al Rawdah Dist. - Al Imam Malik Str., Al Attar Center 1st Floor, Office 7" data-ar="المملكة العربية السعودية، جدة - حي الروضة - شارع الإمام مالك، مركز العطار الدور الأول، مكتب 7">Kingdom of Saudi Arabia, Jeddah - Al Rawdah Dist. - Al Imam Malik Str., Al Attar Center 1st Floor, Office 7</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                <h5 data-en="Working Hours" data-ar="ساعات العمل">Working Hours</h5>
                                <p data-en="Sunday to Thursday: 9:00 AM - 5:00 PM" data-ar="الأحد إلى الخميس: 9:00 صباحاً - 5:00 مساءً">Sunday to Thursday: 9:00 AM - 5:00 PM</p>
                                <p data-en="Friday & Saturday: Closed" data-ar="الجمعة والسبت: مغلق">Friday & Saturday: Closed</p>
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <h5 data-en="Follow Us" data-ar="تابعنا">Follow Us</h5>
                            <div class="social-icons">
                                <a href="#" aria-label="Facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="Twitter" title="Twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" aria-label="Instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" aria-label="LinkedIn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form">
                        <h4 data-en="Send Us a Message" data-ar="أرسل لنا رسالة">Send Us a Message</h4>
                        <form id="contactForm" action="process_contact.php" method="POST" novalidate>
                            <div class="form-group">
                                <label for="name" data-en="Your Name *" data-ar="الاسم *">Your Name *</label>
                                <input type="text" id="name" name="name" required>
                                <span class="error-message"></span>
                            </div>
                            
                            <div class="form-group">
                                <label for="email" data-en="Email Address *" data-ar="البريد الإلكتروني *">Email Address *</label>
                                <input type="email" id="email" name="email" required>
                                <span class="error-message"></span>
                            </div>
                            
                            <div class="form-group">
                                <label for="phone" data-en="Phone Number" data-ar="رقم الهاتف">Phone Number</label>
                                <input type="tel" id="phone" name="phone">
                                <span class="error-message"></span>
                            </div>
                            
                            <div class="form-group">
                                <label for="subject" data-en="Subject *" data-ar="الموضوع *">Subject *</label>
                                <input type="text" id="subject" name="subject" required>
                                <span class="error-message"></span>
                            </div>
                            
                            <div class="form-group">
                                <label for="message" data-en="Your Message *" data-ar="رسالتك *">Your Message *</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                                <span class="error-message"></span>
                            </div>
                            
                            <div class="form-group">
                                <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                            </div>
                            
                            <button type="submit" id="submit-btn" data-en="Send Message" data-ar="إرسال الرسالة">Send Message</button>
                            
                            <div id="form-status" class="form-status"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="location-map">
            <div class="container">
                <h3 data-en="Our Location" data-ar="موقعنا">Our Location</h3>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14850.991520500251!2d39.17757871961251!3d21.54375072172199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sAr%20Rawdah%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1623242414321!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; <span id="current-year"></span> Albyout Alzakiya. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script src="script.js"></script>
    <script src="contact.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const langToggle = document.getElementById('lang-toggle');
            if (langToggle) {
                langToggle.dataset.lang = "<?php echo $current_lang; ?>";
                if (typeof setLanguage === 'function') {
                    setLanguage("<?php echo $current_lang; ?>");
                }
                langToggle.removeEventListener('click', langToggleClickListener);
                langToggle.addEventListener('click', langToggleClickListener = () => {
                    const currentPath = window.location.pathname.split('/').pop();
                    const newLang = langToggle.dataset.lang === 'en' ? 'ar' : 'en';
                    window.location.href = `${currentPath}?lang=${newLang}`;
                });
            }
        });
    </script>
</body>
</html>
