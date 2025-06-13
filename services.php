<?php
require_once 'language_handler.php';
?>
<html lang="<?php echo $current_lang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-en="Albyout Alzakiya - Services" data-ar="البيوت الذكية - خدماتنا">Albyout Alzakiya - Services</title>
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
        <section id="services-content">
            <div class="container">
                <h3 data-en="Our Services" data-ar="خدماتنا">Our Services</h3>
                <img src="https://placehold.co/800x450/8BC34A/FFFFFF?text=Smart+Real+Estate+Solutions" alt="[Image of Smart Real Estate Solutions]" class="section-image" onerror="this.src='https://placehold.co/800x450/8BC34A/FFFFFF?text=Fallback+Image';">

                <div class="service-grid">
                    <div class="content-block">
                        <h4 data-en="Real Estate Project Development" data-ar="تطوير المشاريع العقارية">Real Estate Project Development</h4>
                        <ul>
                            <li data-en="Strategic planning and feasibility studies." data-ar="دراسة الجدوى والتخطيط الاستراتيجي.">Strategic planning and feasibility studies.</li>
                            <li data-en="Architectural and engineering design." data-ar="التصميم المعماري والهندسي.">Architectural and engineering design.</li>
                            <li data-en="Project management and execution with quality assurance." data-ar="إدارة وتنفيذ المشاريع مع ضمان الجودة.">Project management and execution with quality assurance.</li>
                            <li data-en="Marketing and sales, including virtual tours." data-ar="التسويق وإدارة المبيعات، بما في ذلك الجولات الافتراضية.">Marketing and sales, including virtual tours.</li>
                            <li data-en="Post-sales property management and customer service." data-ar="إدارة العقارات وخدمات ما بعد البيع.">Post-sales property management and customer service.</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Real Estate Investment" data-ar="الاستثمار العقاري">Real Estate Investment</h4>
                        <ul>
                            <li data-en="In-depth market analysis and risk assessment." data-ar="تحليل ودراسة السوق العقاري وتقدير المخاطر.">In-depth market analysis and risk assessment.</li>
                            <li data-en="Development of tailored investment strategies." data-ar="تطوير استراتيجيات استثمار مخصصة.">Development of tailored investment strategies.</li>
                            <li data-en="Professional investment management and oversight." data-ar="إدارة الاستثمارات العقارية بفعالية.">Professional investment management and oversight.</li>
                            <li data-en="Marketing and resale services for optimal returns." data-ar="تسويق وإعادة بيع العقارات لتحقيق أفضل العوائد.">Marketing and resale services for optimal returns.</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Property Management" data-ar="إدارة العقارات">Property Management</h4>
                        <ul>
                            <li data-en="Comprehensive operations and maintenance services." data-ar="خدمات تشغيل وصيانة شاملة.">Comprehensive operations and maintenance services.</li>
                            <li data-en="Smart systems for energy and water management." data-ar="إدارة الأنظمة الذكية للطاقة والمياه.">Smart systems for energy and water management.</li>
                            <li data-en="Financial management for investors and tenants." data-ar="إدارة العوائد المالية للمستثمرين.">Financial management for investors and tenants.</li>
                            <li data-en="Leasing and tenant management with flexible solutions." data-ar="إدارة الإيجارات والتأجير بحلول مرنة.">Leasing and tenant management with flexible solutions.</li>
                            <li data-en="Dedicated customer service and ongoing support." data-ar="خدمة العملاء والدعم المستمر.">Dedicated customer service and ongoing support.</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4 data-en="Real Estate Marketing" data-ar="التسويق العقاري">Real Estate Marketing</h4>
                        <ul>
                            <li data-en="Digital marketing strategies and online campaigns." data-ar="استراتيجيات التسويق الرقمي والحملات عبر الإنترنت.">Digital marketing strategies and online campaigns.</li>
                            <li data-en="Content marketing and public relations to enhance brand image." data-ar="التسويق بالمحتوى والعلاقات العامة لتعزيز الصورة.">Content marketing and public relations to enhance brand image.</li>
                            <li data-en="Market analysis and target audience identification." data-ar="تحليل السوق والجمهور المستهدف.">Market analysis and target audience identification.</li>
                            <li data-en="Promotional strategies and special offers for clients." data-ar="استراتيجيات الترويج والعروض الخاصة.">Promotional strategies and special offers for clients.</li>
                            <li data-en="Sales and customer management for a seamless experience." data-ar="إدارة المبيعات والمستأجرين لتجربة سلسة.">Sales and customer management for a seamless experience.</li>
                        </ul>
                    </div>
                </div>
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
