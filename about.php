<?php
require_once 'language_handler.php';
?>
<html lang="<?php echo $current_lang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-en="Albyout Alzakiya - About Us" data-ar="البيوت الذكية - من نحن">Albyout Alzakiya - About Us</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Cairo:wght@400;700&display=swap" rel="stylesheet">
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
        <section id="about-us-content">
            <div class="container">
                <h3 data-en="About Us" data-ar="من نحن">About Us</h3>
                <img src="https://placehold.co/800x450/2B5562/FFFFFF?text=Our+Team+Working" alt="[Image of Our Team Working]" class="section-image" onerror="this.src='https://placehold.co/800x450/2B5562/FFFFFF?text=Fallback+Image';">

                <div class="content-block">
                    <h4 data-en="Who We Are" data-ar="من نحن؟">Who We Are</h4>
                    <p data-en="Albyout Alzakiya Real Estate Development and Investment Company was founded with an ambitious vision to revolutionize the real estate sector by offering smart residential and commercial solutions that combine luxury, technology, and sustainability. We strive to deliver innovative real estate projects that meet modern market needs and provide a unique living experience." data-ar="تأسست شركة البيوت الذكية للتطوير والاستثمار العقاري برؤية طموحة لإحداث ثورة في قطاع العقارات من خلال تقديم حلول سكنية وتجارية ذكية تجمع بين الفخامة، التكنولوجيا، والاستدامة. نحن نسعى لتقديم مشاريع عقارية مبتكرة تلبي احتياجات السوق الحديثة وتوفر تجربة معيشية فريدة من نوعها."> Albyout Alzakiya Real Estate Development and Investment Company was founded with an ambitious vision to revolutionize the real estate sector by offering smart residential and commercial solutions that combine luxury, technology, and sustainability. We strive to deliver innovative real estate projects that meet modern market needs and provide a unique living experience.</p>
                </div>
                <div class="content-block">
                    <h4 data-en="Our Vision" data-ar="رؤيتنا">Our Vision</h4>
                    <p data-en="We aspire to be the leading company in developing smart and sustainable real estate, designing integrated communities that rely on the latest technologies to provide unprecedented comfort and safety." data-ar="نطمح لأن نكون الشركة الرائدة في تطوير العقارات الذكية والمستدامة، حيث نصمم مجتمعات متكاملة تعتمد على أحدث التقنيات لتوفير راحة وأمان غير مسبوقين."> We aspire to be the leading company in developing smart and sustainable real estate, designing integrated communities that rely on the latest technologies to provide unprecedented comfort and safety.</p>
                </div>
                <div class="content-block">
                    <h4 data-en="Our Mission" data-ar="رسالتنا">Our Mission</h4>
                    <p data-en="To provide integrated real estate solutions that combine sustainability and modern designs to meet our clients' aspirations and achieve the highest standards of quality and innovation." data-ar="تقديم حلول عقارية متكاملة تجمع الاستدامة، والتصاميم العصرية لتلبية تطلعات عملائنا وتحقيق أعلى معايير الجودة والابتكار."> To provide integrated real estate solutions that combine sustainability and modern designs to meet our clients' aspirations and achieve the highest standards of quality and innovation.</p>
                </div>

                <h3 data-en="Our Values" data-ar="قيمنا">Our Values</h3>
                <div class="value-grid">
                    <div class="content-block">
                        <h4 data-en="Innovation" data-ar="الابتكار">
                            <i class="fas fa-lightbulb value-icon" aria-hidden="true"></i>
                            <span data-en="Innovation" data-ar="الابتكار">Innovation</span>
                        </h4>
                        <p data-en="We believe technology is the key to the future and apply it in all our projects. We constantly seek innovative solutions that combine modern technology with practical needs." data-ar="نؤمن بأن التكنولوجيا هي مفتاح المستقبل ونطبقها في جميع مشاريعنا. نسعى باستمرار للحلول المبتكرة التي تجمع بين التكنولوجيا الحديثة والاحتياجات العملية."> We believe technology is the key to the future and apply it in all our projects. We constantly seek innovative solutions that combine modern technology with practical needs.</p>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Customer Satisfaction" data-ar="رضا العملاء">
                            <i class="fas fa-heart value-icon" aria-hidden="true"></i>
                            <span data-en="Customer Satisfaction" data-ar="رضا العملاء">Customer Satisfaction</span>
                        </h4>
                        <p data-en="We put our customers at the heart of every decision we make. Their satisfaction is our ultimate goal, and we strive to exceed their expectations in every project." data-ar="نضع عملاءنا في قلب كل قرار نتخذه. رضاهم هو هدفنا الأسمى، ونسعى لتجاوز توقعاتهم في كل مشروع."> We put our customers at the heart of every decision we make. Their satisfaction is our ultimate goal, and we strive to exceed their expectations in every project.</p>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Quality" data-ar="الجودة">
                            <i class="fas fa-award value-icon" aria-hidden="true"></i>
                            <span data-en="Quality" data-ar="الجودة">Quality</span>
                        </h4>
                        <p data-en="We adhere to the highest standards of construction and design. Quality is not just a promise but a commitment we deliver in every detail of our work." data-ar="نلتزم بأعلى معايير البناء والتصميم. الجودة ليست مجرد وعد بل التزام نقدمه في كل تفصيلة من أعمالنا."> We adhere to the highest standards of construction and design. Quality is not just a promise but a commitment we deliver in every detail of our work.</p>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Sustainability" data-ar="الاستدامة">
                            <i class="fas fa-leaf value-icon" aria-hidden="true"></i>
                            <span data-en="Sustainability" data-ar="الاستدامة">Sustainability</span>
                        </h4>
                        <p data-en="Our projects rely on environmentally friendly solutions. We are committed to building a sustainable future for the next generations through green technologies." data-ar="مشاريعنا تعتمد على الحلول الصديقة للبيئة. نحن ملتزمون ببناء مستقبل مستدام للأجيال القادمة من خلال التقنيات الخضراء."> Our projects rely on environmentally friendly solutions. We are committed to building a sustainable future for the next generations through green technologies.</p>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Transparency" data-ar="الشفافية">
                            <i class="fas fa-eye value-icon" aria-hidden="true"></i>
                            <span data-en="Transparency" data-ar="الشفافية">Transparency</span>
                        </h4>
                        <p data-en="We provide our clients with clear and accurate information about our projects. Transparency builds trust, and trust builds lasting relationships." data-ar="نوفر لعملائنا معلومات واضحة ودقيقة عن مشاريعنا. الشفافية تبني الثقة، والثقة تبني علاقات دائمة."> We provide our clients with clear and accurate information about our projects. Transparency builds trust, and trust builds lasting relationships.</p>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Excellence" data-ar="التميز">
                            <i class="fas fa-star value-icon" aria-hidden="true"></i>
                            <span data-en="Excellence" data-ar="التميز">Excellence</span>
                        </h4>
                        <p data-en="We strive for excellence in every aspect of our work, from initial planning to final delivery. Excellence is not a destination but a continuous journey." data-ar="نسعى للتميز في كل جانب من جوانب عملنا، من التخطيط الأولي إلى التسليم النهائي. التميز ليس وجهة بل رحلة مستمرة."> We strive for excellence in every aspect of our work, from initial planning to final delivery. Excellence is not a destination but a continuous journey.</p>
                    </div>
                </div>

                <!-- إضافة قسم جديد للإحصائيات -->
                <section class="about-stats">
                    <h3 data-en="Our Journey in Numbers" data-ar="رحلتنا بالأرقام">Our Journey in Numbers</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number" data-en="15+" data-ar="15+">15+</div>
                            <div class="stat-label" data-en="Years of Experience" data-ar="سنة خبرة">Years of Experience</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" data-en="200+" data-ar="200+">200+</div>
                            <div class="stat-label" data-en="Completed Projects" data-ar="مشروع مكتمل">Completed Projects</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" data-en="5000+" data-ar="5000+">5000+</div>
                            <div class="stat-label" data-en="Happy Families" data-ar="أسرة سعيدة">Happy Families</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" data-en="50+" data-ar="50+">50+</div>
                            <div class="stat-label" data-en="Team Members" data-ar="عضو فريق">Team Members</div>
                        </div>
                    </div>
                </section>

                <!-- قسم رؤية المستقبل -->
                <section class="future-vision">
                    <div class="content-block vision-block">
                        <h4 data-en="Our Vision for the Future" data-ar="رؤيتنا للمستقبل">
                            <i class="fas fa-rocket vision-icon" aria-hidden="true"></i>
                            <span data-en="Our Vision for the Future" data-ar="رؤيتنا للمستقبل">Our Vision for the Future</span>
                        </h4>
                        <p data-en="We envision a future where smart homes are not just a luxury but a standard. A future where technology seamlessly integrates with daily life to create living spaces that are intelligent, efficient, and sustainable. We are committed to leading this transformation and making smart living accessible to everyone." data-ar="نتصور مستقبلاً حيث البيوت الذكية ليست مجرد رفاهية بل معيار. مستقبل حيث التكنولوجيا تتكامل بسلاسة مع الحياة اليومية لخلق مساحات معيشية ذكية وفعالة ومستدامة. نحن ملتزمون بقيادة هذا التحول وجعل الحياة الذكية متاحة للجميع."> We envision a future where smart homes are not just a luxury but a standard. A future where technology seamlessly integrates with daily life to create living spaces that are intelligent, efficient, and sustainable. We are committed to leading this transformation and making smart living accessible to everyone.</p>
                        <div class="cta-buttons">
                            <a href="services.php" class="btn btn-primary" data-en="Explore Our Services" data-ar="استكشف خدماتنا">Explore Our Services</a>
                            <a href="contact.php" class="btn btn-secondary" data-en="Contact Us" data-ar="تواصل معنا">Contact Us</a>
                        </div>
                    </div>
                </section>
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
