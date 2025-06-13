// script.js

document.addEventListener('DOMContentLoaded', () => {
    // تعيين السنة الحالية في التذييل (الفوتر)
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
        console.log('Current year set to:', currentYear); // للتأكد من السنة الصحيحة
    }

    // منطق تبديل اللغة
    const langToggle = document.getElementById('lang-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-ar]');
    const body = document.body;

    // الدالة التي تقوم بتبديل اللغة على مستوى الصفحة
    function setLanguage(lang) {
        elementsToTranslate.forEach(element => {
            // تحديث محتوى النص للعناصر التي تحتوي على سمات data-en و data-ar
            if (element.tagName === 'A' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'P' || element.tagName === 'LI' || element.tagName === 'BUTTON' || element.tagName === 'LABEL' || element.tagName === 'H5' || element.tagName === 'SPAN') {
                if (element.dataset[lang]) {
                    element.textContent = element.dataset[lang];
                }
            }
        });

        // ترجمة عنوان الصفحة
        const titleTag = document.querySelector('title');
        if (titleTag && titleTag.dataset[lang]) {
            document.title = titleTag.dataset[lang];
        }

        // تحديث زر تبديل اللغة ليعرض اللغة المقابلة
        if (langToggle) {
            if (lang === 'en') {
                langToggle.textContent = 'العربية';
                body.classList.remove('ar');
            } else {
                langToggle.textContent = 'English';
                body.classList.add('ar');
            }
            langToggle.dataset.lang = lang;
        }

        // حفظ اللغة المفضلة في التخزين المحلي للمتصفح
        localStorage.setItem('preferredLanguage', lang);
    }

    // إضافة مستمع حدث عند النقر على زر تبديل اللغة
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = langToggle.dataset.lang;
            const newLang = currentLang === 'en' ? 'ar' : 'en'; // تبديل بين 'en' و 'ar'
            setLanguage(newLang); // استدعاء دالة تبديل اللغة
        });

        // تعيين اللغة الأولية عند تحميل الصفحة بناءً على التخزين المحلي أو تفضيلات المتصفح أو الافتراضي للإنجليزية
        const savedLang = localStorage.getItem('preferredLanguage');
        const userLang = savedLang || (navigator.language.startsWith('ar') ? 'ar' : 'en');
        setLanguage(userLang);
    }

    // منطق تبديل الوضع الليلي/النهاري - محسن
    const themeToggle = document.getElementById('theme-toggle');

    // الدالة التي تقوم بتبديل الوضع الليلي/النهاري
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) {
                themeToggle.dataset.theme = 'dark';
                // تغيير أيقونة الزر إلى شمس للوضع الداكن
                const iconElement = themeToggle.querySelector('i');
                if (iconElement) {
                    iconElement.className = 'fas fa-sun';
                }
                themeToggle.setAttribute('aria-label', 'Switch to light mode');
            }
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) {
                themeToggle.dataset.theme = 'light';
                // تغيير أيقونة الزر إلى قمر للوضع الفاتح
                const iconElement = themeToggle.querySelector('i');
                if (iconElement) {
                    iconElement.className = 'fas fa-moon';
                }
                themeToggle.setAttribute('aria-label', 'Switch to dark mode');
            }
        }
        // حفظ الوضع المفضل في التخزين المحلي للمتصفح
        localStorage.setItem('preferredTheme', theme);
        
        // إضافة تأثير انتقالي سلس للتبديل
        document.documentElement.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    }

    // إضافة مستمع حدث عند النقر على زر تبديل الوضع
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // تصحيح: قراءة الوضع الحالي من الزر والتبديل
            const currentTheme = themeToggle.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            
            // إضافة تأثير النقر
            themeToggle.style.transform = 'scale(0.95)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 150);
        });

        // تعيين الوضع الأولي عند تحميل الصفحة بناءً على التخزين المحلي أو تفضيلات المتصفح
        const savedTheme = localStorage.getItem('preferredTheme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // تحديد الوضع المفضل: الوضع المحفوظ أو إعدادات المتصفح
        const initialTheme = savedTheme || (prefersDarkScheme ? 'dark' : 'light');
        
        // تطبيق الوضع فوراً
        setTheme(initialTheme);
        
        // الاستماع لتغييرات نظام التشغيل
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('preferredTheme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // شريط تنقل ثابت عند التمرير لأسفل
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    let isHeaderFixed = false;

    // دالة للتحقق من موضع التمرير وإضافة/إزالة فئة "fixed" للهيدر
    function handleScroll() {
        if (window.scrollY > headerHeight && !isHeaderFixed) {
            header.classList.add('fixed');
            // إضافة تباعد للمحتوى الرئيسي لتجنب القفز المفاجئ
            document.body.style.paddingTop = `${headerHeight}px`;
            isHeaderFixed = true;
        } else if (window.scrollY <= 0 && isHeaderFixed) {
            header.classList.remove('fixed');
            document.body.style.paddingTop = '0';
            isHeaderFixed = false;
        }

        // إظهار/إخفاء زر العودة إلى الأعلى
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }
    }

    // إضافة مستمع حدث للتمرير
    window.addEventListener('scroll', handleScroll);

    // إنشاء زر العودة إلى الأعلى
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '&#8679;'; // رمز سهم لأعلى
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.title = 'Back to top';
    document.body.appendChild(scrollToTopBtn);

    // إضافة مستمع حدث لزر العودة إلى الأعلى
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Intersection Observer لتطبيق تأثيرات التلاشي والتحريك للأعلى على الأقسام والصور
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // العنصر الجذر هو منفذ العرض (viewport)
        rootMargin: '0px',
        threshold: 0.1 // تفعيل التأثير عندما يكون 10% من العنصر مرئياً
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تطبيق رسوم متحركة (fade-in و slide-up) على القسم نفسه
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)'; // التحريك للأعلى إلى الموضع الأصلي

                // تطبيق رسوم متحركة (fade-in و scale) على الصور داخل القسم
                const images = entry.target.querySelectorAll('.section-image');
                images.forEach(image => {
                    image.style.opacity = '1';
                    image.style.transform = 'scale(1)';
                });

                observer.unobserve(entry.target); // التوقف عن مراقبة العنصر بمجرد تطبيق الرسوم المتحركة
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // استبعاد قسم البطل (hero) لأنه يمتلك رسومه المتحركة الأولية المحددة في CSS
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0'; // إخفاء مبدئيًا للرسوم المتحركة
            section.style.transform = 'translateY(20px)'; // الحالة الأولية للتحريك للأعلى
            section.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; // إضافة انتقال للقسم نفسه

            // تعيين الحالة الأولية للصور داخل هذه الأقسام
            const images = section.querySelectorAll('.section-image');
            images.forEach(image => {
                image.style.opacity = '0';
                image.style.transform = 'scale(0.9)';
                image.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            });

            sectionObserver.observe(section); // بدء مراقبة القسم
        }
    });

    // التعامل مع انتقال صورة خلفية قسم البطل عند التحميل إذا لم يتم التعامل معها بالفعل بواسطة CSS
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroBackground = heroSection.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = 'scale(1)'; // ضمان انتقالها إلى المقياس الطبيعي بعد المقياس الأولي 1.05
        }
    }

    // تحسين أداء تحميل الصور (lazy loading)
    const imagesToLazyLoad = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        imagesToLazyLoad.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // التطبيق الاحتياطي للمتصفحات القديمة التي لا تدعم IntersectionObserver
        imagesToLazyLoad.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }

    // إنشاء قسم استطلاع رضا العملاء للصفحة الرئيسية
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        const createFeedbackSection = () => {
            // التحقق مما إذا كان المستخدم قد قدم استطلاعًا بالفعل في آخر 7 أيام
            const lastFeedback = localStorage.getItem('lastFeedbackSubmission');
            const weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
            
            if (lastFeedback && new Date(lastFeedback) > weekAgo) {
                return; // تخطي إنشاء القسم إذا كان المستخدم قد قدم استطلاعًا مؤخرًا
            }

            // إنشاء عنصر div لاستطلاع الرضا
            const feedbackSection = document.createElement('div');
            feedbackSection.id = 'feedback-section';
            feedbackSection.className = 'feedback-container';
            
            // محتوى استطلاع الرضا باللغتين
            const feedbackContent = `
                <h4 data-en="How satisfied are you with our website?" data-ar="ما مدى رضاك عن موقعنا؟">How satisfied are you with our website?</h4>
                <div class="rating-stars">
                    <span class="star" data-rating="1">&#9733;</span>
                    <span class="star" data-rating="2">&#9733;</span>
                    <span class="star" data-rating="3">&#9733;</span>
                    <span class="star" data-rating="4">&#9733;</span>
                    <span class="star" data-rating="5">&#9733;</span>
                </div>
                <button id="feedback-submit" data-en="Submit" data-ar="إرسال">Submit</button>
                <button id="feedback-close" class="close-btn" aria-label="Close">&times;</button>
            `;
            
            feedbackSection.innerHTML = feedbackContent;
            
            // إضافة القسم إلى نهاية المحتوى الرئيسي
            document.querySelector('main').appendChild(feedbackSection);
            
            // تطبيق اللغة الحالية على عناصر القسم الجديد
            const currentLang = langToggle ? langToggle.dataset.lang : 'en';
            const newElements = feedbackSection.querySelectorAll('[data-en], [data-ar]');
            newElements.forEach(element => {
                if (element.dataset[currentLang]) {
                    element.textContent = element.dataset[currentLang];
                }
            });
            
            // إضافة مستمعات الأحداث لتفاعل النجوم
            const stars = feedbackSection.querySelectorAll('.star');
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const rating = parseInt(star.dataset.rating);
                    
                    // إزالة التحديد من جميع النجوم
                    stars.forEach(s => s.classList.remove('selected'));
                    
                    // تحديد النجوم حتى التقييم المختار
                    for (let i = 0; i < rating; i++) {
                        stars[i].classList.add('selected');
                    }
                    
                    // تخزين التقييم المحدد
                    feedbackSection.dataset.selectedRating = rating;
                });
            });
            
            // معالجة إرسال الاستطلاع
            const submitBtn = document.getElementById('feedback-submit');
            if (submitBtn) {
                submitBtn.addEventListener('click', () => {
                    const rating = feedbackSection.dataset.selectedRating;
                    if (rating) {
                        // يمكن إرسال التقييم إلى الخادم هنا في التطبيق الفعلي
                        
                        // تخزين وقت الإرسال لمنع الإرسالات المتكررة
                        localStorage.setItem('lastFeedbackSubmission', new Date().toISOString());
                        
                        // إظهار رسالة شكر
                        const thankYouMessage = currentLang === 'en' ? 
                            'Thank you for your feedback!' : 
                            'شكراً لتقييمك!';
                        
                        feedbackSection.innerHTML = `<p>${thankYouMessage}</p>`;
                        
                        // إخفاء القسم بعد فترة قصيرة
                        setTimeout(() => {
                            feedbackSection.style.opacity = '0';
                            setTimeout(() => {
                                feedbackSection.remove();
                            }, 1000);
                        }, 2000);
                    }
                });
            }
            
            // إغلاق استطلاع الرضا
            const closeBtn = document.getElementById('feedback-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    feedbackSection.remove();
                });
            }
            
            // ظهور استطلاع الرضا بتأثير تلاشي بعد 10 ثواني من تحميل الصفحة
            setTimeout(() => {
                feedbackSection.style.opacity = '1';
            }, 10000);
        };
        
        // إضافة استطلاع الرضا بعد 15 ثانية من تفاعل المستخدم مع الصفحة
        let userInteracted = false;
        const interactions = ['click', 'scroll', 'keydown'];
        
        interactions.forEach(event => {
            window.addEventListener(event, () => {
                if (!userInteracted) {
                    userInteracted = true;
                    setTimeout(createFeedbackSection, 15000);
                }
            }, { once: true });
        });
    }

    // تحسين الـ navbar
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // إضافة كلاس active للصفحة الحالية
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
        
        // إضافة تأثير النقر
        link.addEventListener('click', function(e) {
            // إزالة active من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            // إضافة active للرابط المنقور
            this.classList.add('active');
        });
    });
    
    // منطق القائمة المتجاوبة للموبايل
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenuToggle && navbar) {
        mobileMenuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // تغيير أيقونة الزر
            const icon = mobileMenuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // إغلاق القائمة عند النقر على رابط
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navbar.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // تأثير التمرير للهيدر
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // إضافة كلاس scrolled عند التمرير
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // تحسين تأثيرات hover للروابط
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
            }
        });
    });
    
    // تحسين animations للمعرض
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        // إضافة delay متدرج للعناصر
        galleryItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            
            // إضافة تأثير hover متقدم
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    // تحسين Animation للإحصائيات مع تأثير العد التصاعدي
    const createCountUpAnimation = () => {
        const statNumbers = document.querySelectorAll('.stat-item h4');
        
        const animateValue = (element, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const current = Math.floor(progress * (end - start) + start);
                element.textContent = current + (element.textContent.includes('+') ? '+' : '');
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };
        
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const endValue = parseInt(element.textContent);
                    if (!isNaN(endValue)) {
                        animateValue(element, 0, endValue, 2000);
                        statsObserver.unobserve(element);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => {
            statsObserver.observe(stat);
        });
    };
    
    // تشغيل animation الإحصائيات
    if (document.querySelector('.stats-container')) {
        createCountUpAnimation();
    }

    // Function to handle scroll animations
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Optional: stop observing after animation
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    handleScrollAnimations(); // Initialize scroll animations

    // تفعيل التبديل التفاعلي للصور
    function initializeImageShowcase() {
        const showcaseImage = document.getElementById('showcase-image');
        const showcaseTitle = document.getElementById('showcase-title');
        const showcaseDescription = document.getElementById('showcase-description');
        const controlBtns = document.querySelectorAll('.control-btn');
        
        if (!showcaseImage || !showcaseTitle || !showcaseDescription) return;
        
        // دالة تبديل الصورة والمحتوى
        function switchImage(button) {
            const newImageSrc = button.dataset.image;
            const currentLang = document.documentElement.lang || 'en';
            const titleKey = currentLang === 'ar' ? 'titleAr' : 'titleEn';
            const descKey = currentLang === 'ar' ? 'descAr' : 'descEn';
            
            // إزالة الكلاس النشط من جميع الأزرار
            controlBtns.forEach(btn => btn.classList.remove('active'));
            
            // إضافة الكلاس النشط للزر المحدد
            button.classList.add('active');
            
            // تأثير الانتقال للصورة
            showcaseImage.style.opacity = '0';
            showcaseImage.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                showcaseImage.src = newImageSrc;
                showcaseTitle.textContent = button.dataset[titleKey];
                showcaseDescription.textContent = button.dataset[descKey];
                
                showcaseImage.style.opacity = '1';
                showcaseImage.style.transform = 'scale(1)';
            }, 300);
        }
        
        // إضافة مستمعات الأحداث للأزرار
        controlBtns.forEach(button => {
            button.addEventListener('click', () => switchImage(button));
        });
        
        // تبديل تلقائي كل 8 ثوانٍ
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % controlBtns.length;
            switchImage(controlBtns[currentIndex]);
        }, 8000);
    }

    // تحسينات إضافية للرسوم المتحركة
    function enhanceAnimations() {
        // تأثيرات الدخول للعناصر عند التمرير
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInSlideUp 0.8s ease-out forwards';
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // مراقبة العناصر الجديدة
        document.querySelectorAll('.content-card, .gallery-item, .interactive-showcase').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
        
        // تأثير المرور على البطاقات
        document.querySelectorAll('.content-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.card-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(10deg)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.card-icon i');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
        
        // تأثير خاص للإحصائيات
        const statItems = document.querySelectorAll('.stat-item');
        statItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            
            // تأثير العد التصاعدي للأرقام
            const numberElement = item.querySelector('h4');
            if (numberElement) {
                const finalNumber = parseInt(numberElement.textContent.replace(/\D/g, ''));
                if (finalNumber) {
                    let currentNumber = 0;
                    const increment = finalNumber / 50;
                    const counter = setInterval(() => {
                        currentNumber += increment;
                        if (currentNumber >= finalNumber) {
                            currentNumber = finalNumber;
                            clearInterval(counter);
                        }
                        numberElement.textContent = Math.floor(currentNumber) + '+';
                    }, 30);
                }
            }
        });
    }

    // تحسين الاستجابة للوضع الليلي
    function enhanceDarkModeForNewElements() {
        const body = document.body;
        
        function updateShowcaseElements() {
            const showcaseElements = document.querySelectorAll('.interactive-showcase, .enhanced-content, .content-card');
            
            showcaseElements.forEach(element => {
                if (body.classList.contains('dark-mode')) {
                    if (element.classList.contains('content-card')) {
                        element.style.background = 'linear-gradient(145deg, rgba(45, 45, 45, 0.9), rgba(55, 65, 81, 0.85))';
                        element.style.borderColor = 'rgba(96, 165, 250, 0.25)';
                        element.style.color = '#f9fafb';
                    }
                } else {
                    if (element.classList.contains('content-card')) {
                        element.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 248, 255, 0.9))';
                        element.style.borderColor = 'rgba(55, 146, 172, 0.1)';
                        element.style.color = '';
                    }
                }
            });
        }
        
        // تطبيق التحديث فوراً
        updateShowcaseElements();
        
        // مراقبة تغييرات الوضع الليلي
        const observer = new MutationObserver(updateShowcaseElements);
        observer.observe(body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    // تأثيرات تفاعلية إضافية
    function addInteractiveEffects() {
        // تأثير الجسيمات المتحركة في الخلفية
        function createFloatingParticles() {
            const showcase = document.querySelector('.interactive-showcase');
            if (!showcase) return;
            
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 6 + 2}px;
                    height: ${Math.random() * 6 + 2}px;
                    background: rgba(139, 195, 74, ${Math.random() * 0.3 + 0.1});
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 0;
                    animation: float ${Math.random() * 10 + 10}s infinite linear;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
                showcase.appendChild(particle);
            }
        }
        
        // إضافة CSS للرسوم المتحركة الجديدة
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
            }
            
            .content-card:hover .card-icon i {
                animation: pulse 1s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1) rotate(0deg); }
                50% { transform: scale(1.1) rotate(5deg); }
            }
            
            .control-btn:hover i {
                animation: bounce 0.6s ease;
            }
            
            @keyframes bounce {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
        
        createFloatingParticles();
        
        // تأثير التمرير السلس للأقسام
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-12px) scale(1.05) rotateY(5deg)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            });
        });
    }

    // تحسينات شاملة
    function applyComprehensiveEnhancements() {
        // تحسينات على الصور المتحركة
        const imageElements = document.querySelectorAll('img[data-en], img[data-ar]');
        imageElements.forEach(img => {
            img.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
            });
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });
        
        // تحسينات على الأزرار
        const buttonElements = document.querySelectorAll('button, .btn');
        buttonElements.forEach(btn => {
            btn.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'scale(1.05)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });
        
        // تحسينات على الروابط
        const linkElements = document.querySelectorAll('a');
        linkElements.forEach(link => {
            link.style.transition = 'color 0.3s ease, transform 0.3s ease';
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px)';
            });
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });
    }

    applyComprehensiveEnhancements(); // تطبيق التحسينات الشاملة

    // تفعيل جميع الميزات الجديدة
    initializeImageShowcase();
    enhanceAnimations();
    enhanceDarkModeForNewElements();
    addInteractiveEffects();

    // نظام الصور المتعددة في قسم البطل مع التبديل التلقائي
    function initializeHeroSlider() {
        const heroSlides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const progressBar = document.querySelector('.progress-bar');
        
        if (!heroSlides.length) return;
        
        let currentSlide = 0;
        let isPlaying = true;
        let slideInterval;
        const slideDuration = 6000; // 6 ثوانٍ لكل صورة
        
        // تحديد صورة الخلفية لكل شريحة
        heroSlides.forEach((slide, index) => {
            const bgImage = slide.dataset.bg;
            if (bgImage) {
                slide.style.backgroundImage = `url('${bgImage}')`;
            }
        });
        
        // دالة إظهار الشريحة
        function showSlide(index, direction = 'next') {
            // إزالة الكلاسات النشطة
            heroSlides.forEach(slide => {
                slide.classList.remove('active', 'next', 'prev');
            });
            dots.forEach(dot => dot.classList.remove('active'));
            
            // تحديد الاتجاه
            if (direction === 'next') {
                heroSlides[currentSlide]?.classList.add('prev');
                heroSlides[index]?.classList.add('next');
            } else {
                heroSlides[currentSlide]?.classList.add('next');
                heroSlides[index]?.classList.add('prev');
            }
            
            // تأخير قصير ثم تطبيق الكلاس النشط
            setTimeout(() => {
                heroSlides.forEach(slide => {
                    slide.classList.remove('next', 'prev');
                });
                heroSlides[index]?.classList.add('active');
                dots[index]?.classList.add('active');
            }, 50);
            
            currentSlide = index;
            resetProgressBar();
        }
        
        // دالة الشريحة التالية
        function nextSlide() {
            const next = (currentSlide + 1) % heroSlides.length;
            showSlide(next, 'next');
        }
        
        // دالة الشريحة السابقة
        function prevSlide() {
            const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
            showSlide(prev, 'prev');
        }
        
        // دالة إعادة تعيين شريط التقدم
        function resetProgressBar() {
            if (progressBar) {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.transition = `width ${slideDuration}ms linear`;
                    progressBar.style.width = '100%';
                }, 50);
            }
        }
        
        // دالة بدء التشغيل التلقائي
        function startAutoPlay() {
            if (!isPlaying) return;
            
            slideInterval = setInterval(() => {
                if (isPlaying) {
                    nextSlide();
                }
            }, slideDuration);
            
            resetProgressBar();
        }
        
        // دالة إيقاف التشغيل التلقائي
        function stopAutoPlay() {
            clearInterval(slideInterval);
            if (progressBar) {
                progressBar.style.transition = 'none';
                progressBar.style.width = '0%';
            }
        }
        
        // مستمعات الأحداث للنقاط
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (index !== currentSlide) {
                    const direction = index > currentSlide ? 'next' : 'prev';
                    showSlide(index, direction);
                    stopAutoPlay();
                    startAutoPlay();
                }
            });
        });
        
        // مستمعات الأحداث للأسهم
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            });
        }
        
        // إيقاف التشغيل عند المرور بالماوس
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', () => {
                isPlaying = false;
                stopAutoPlay();
            });
            
            heroSection.addEventListener('mouseleave', () => {
                isPlaying = true;
                startAutoPlay();
            });
        }
        
        // دعم لوحة المفاتيح
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                stopAutoPlay();
                startAutoPlay();
            } else if (e.key === ' ') {
                e.preventDefault();
                isPlaying = !isPlaying;
                if (isPlaying) {
                    startAutoPlay();
                } else {
                    stopAutoPlay();
                }
            }
        });
        
        // دعم اللمس للأجهزة المحمولة
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (heroSection) {
            heroSection.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            heroSection.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
        }
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // التمرير لليسار - الصورة التالية
                    nextSlide();
                } else {
                    // التمرير لليمين - الصورة السابقة
                    prevSlide();
                }
                stopAutoPlay();
                startAutoPlay();
            }
        }
        
        // تأثير Parallax عند التمرير
        function addParallaxEffect() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                
                heroSlides.forEach(slide => {
                    if (slide.classList.contains('active')) {
                        slide.style.transform = `translateY(${parallax}px) scale(1)`;
                    }
                });
            });
        }
        
        // تحسين الأداء مع Intersection Observer
        function optimizePerformance() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startAutoPlay();
                    } else {
                        stopAutoPlay();
                    }
                });
            }, { threshold: 0.1 });
            
            if (heroSection) {
                observer.observe(heroSection);
            }
        }
        
        // تطبيق تأثيرات إضافية
        function addAdvancedEffects() {
            // تأثير Ken Burns للصور
            heroSlides.forEach((slide, index) => {
                if (index % 2 === 0) {
                    slide.classList.add('ken-burns');
                }
            });
            
            // تأثيرات الجسيمات
            createFloatingParticles();
        }
        
        function createFloatingParticles() {
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: rgba(139, 195, 74, ${Math.random() * 0.6 + 0.2});
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 5;
                    animation: floatParticle ${Math.random() * 15 + 10}s infinite linear;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
                
                if (heroSection) {
                    heroSection.appendChild(particle);
                }
            }
        }
        
        // إضافة CSS للجسيمات
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(particleStyle);
        
        // تشغيل النظام
        showSlide(0);
        startAutoPlay();
        addParallaxEffect();
        optimizePerformance();
        addAdvancedEffects();
        
        // تحديث الترجمة عند تغيير اللغة
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                setTimeout(() => {
                    // إعادة تطبيق الترجمة على عناصر قسم البطل
                    const heroElements = heroSection?.querySelectorAll('[data-en], [data-ar]');
                    const currentLang = langToggle.dataset.lang === 'en' ? 'ar' : 'en';
                    
                    heroElements?.forEach(element => {
                        if (element.dataset[currentLang]) {
                            element.textContent = element.dataset[currentLang];
                        }
                    });
                }, 100);
            });
        }
        
        console.log('نظام الصور المتعددة تم تفعيله بنجاح مع', heroSlides.length, 'صور');
    }

    initializeHeroSlider(); // تفعيل نظام الصور المتعددة في قسم البطل

    console.log('جميع الميزات تم تفعيلها بنجاح!');
});
