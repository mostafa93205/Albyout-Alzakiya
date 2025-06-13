<?php
require_once 'language_handler.php';
?>
<!DOCTYPE html>
<html lang="<?php echo $current_lang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-en="Albyout Alzakiya - Home" data-ar="البيوت الذكية - الرئيسية">Albyout Alzakiya - Home</title>
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
                
                <!-- زر القائمة للموبايل -->
                <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-background" style="background-image: url('https://placehold.co/1200x600/2B5562/FFFFFF?text=Smart+Home+Concept');" onerror="this.src='https://placehold.co/1200x600/2B5562/FFFFFF?text=Fallback+Image';"></div>
            <div class="container">
                <h2 data-en="Building the Future with Smart Solutions" data-ar="نبني المستقبل بحلول ذكية">Building the Future with Smart Solutions</h2>
                <p data-en="Innovative residential and commercial solutions combining luxury, technology, and sustainability." data-ar="حلول سكنية وتجارية مبتكرة تجمع بين الفخامة، التكنولوجيا، والاستدامة.">Innovative residential and commercial solutions combining luxury, technology, and sustainability.</p>
            </div>
        </section>

        <!-- قسم المقدمة في الصفحة الرئيسية -->
        <section id="introduction">
            <div class="container">
                <h3 data-en="Welcome to Albyout Alzakiya" data-ar="مرحباً بكم في البيوت الذكية">Welcome to Albyout Alzakiya</h3>
                
                <!-- قسم الصور الثلاث -->
                <div class="image-gallery">
                    <div class="gallery-item">
                        <img src="https://placehold.co/400x300/3792AC/FFFFFF?text=Smart+Buildings" alt="Smart Buildings" class="gallery-image">
                        <h4 data-en="Smart Buildings" data-ar="المباني الذكية">Smart Buildings</h4>
                        <p data-en="Modern architecture with integrated technology" data-ar="عمارة حديثة مع تقنيات متكاملة">Modern architecture with integrated technology</p>
                    </div>
                    <div class="gallery-item">
                        <img src="https://placehold.co/400x300/2B5562/FFFFFF?text=Luxury+Living" alt="Luxury Living" class="gallery-image">
                        <h4 data-en="Luxury Living" data-ar="الحياة الفاخرة">Luxury Living</h4>
                        <p data-en="Premium residential solutions for comfort" data-ar="حلول سكنية راقية للراحة">Premium residential solutions for comfort</p>
                    </div>
                    <div class="gallery-item">
                        <img src="https://placehold.co/400x300/8BC34A/FFFFFF?text=Sustainable+Design" alt="Sustainable Design" class="gallery-image">
                        <h4 data-en="Sustainable Design" data-ar="التصميم المستدام">Sustainable Design</h4>
                        <p data-en="Eco-friendly solutions for the future" data-ar="حلول صديقة للبيئة للمستقبل">Eco-friendly solutions for the future</p>
                    </div>
                </div>

                <p data-en="Albyout Alzakiya Real Estate Development and Investment Company was founded with an ambitious vision to revolutionize the real estate sector by offering smart residential and commercial solutions that combine luxury, technology, and sustainability. We strive to deliver innovative real estate projects that meet modern market needs and provide a unique living experience." data-ar="تأسست شركة البيوت الذكية للتطوير والاستثمار العقاري برؤية طموحة لإحداث ثورة في قطاع العقارات من خلال تقديم حلول سكنية وتجارية ذكية تجمع بين الفخامة، التكنولوجيا، والاستدامة. نحن نسعى لتقديم مشاريع عقارية مبتكرة تلبي احتياجات السوق الحديثة وتوفر تجربة معيشية فريدة من نوعها."> Albyout Alzakiya Real Estate Development and Investment Company was founded with an ambitious vision to revolutionize the real estate sector by offering smart residential and commercial solutions that combine luxury, technology, and sustainability. We strive to deliver innovative real estate projects that meet modern market needs and provide a unique living experience.</p>
                <p data-en="Our mission is to provide integrated real estate solutions that combine sustainability and modern designs to meet our clients' aspirations and achieve the highest standards of quality and innovation." data-ar="رسالتنا هي تقديم حلول عقارية متكاملة تجمع الاستدامة، والتصاميم العصرية لتلبية تطلعات عملائنا وتحقيق أعلى معايير الجودة والابتكار.">Our mission is to provide integrated real estate solutions that combine sustainability and modern designs to meet our clients' aspirations and achieve the highest standards of quality and innovation.</p>
                <p data-en="Explore our site to learn more about our vision, values, services, and how we are building the future with smart solutions." data-ar="استكشف موقعنا لمعرفة المزيد عن رؤيتنا وقيمنا وخدماتنا، وكيف نبني المستقبل بحلول ذكية.">Explore our site to learn more about our vision, values, services, and how we are building the future with smart solutions.</p>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; <span id="current-year"></span> Albyout Alzakiya. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
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
