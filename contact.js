// contact.js - ملف JavaScript لنموذج الاتصال

document.addEventListener('DOMContentLoaded', () => {
    // تعريف متغيرات النموذج
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    
    // التحقق مما إذا كان النموذج موجوداً في الصفحة
    if (!contactForm) return;
    
    // الحصول على اللغة الحالية من زر تبديل اللغة
    const getLang = () => {
        const langToggle = document.getElementById('lang-toggle');
        return langToggle ? langToggle.dataset.lang : 'en';
    };
    
    // نصوص الخطأ والتأكيد بلغات متعددة
    const messages = {
        required: {
            en: 'This field is required',
            ar: 'هذا الحقل مطلوب'
        },
        invalidEmail: {
            en: 'Please enter a valid email address',
            ar: 'يرجى إدخال عنوان بريد إلكتروني صالح'
        },
        invalidPhone: {
            en: 'Please enter a valid phone number',
            ar: 'يرجى إدخال رقم هاتف صالح'
        },
        success: {
            en: 'Your message has been sent successfully! We will get back to you soon.',
            ar: 'تم إرسال رسالتك بنجاح! سنرد عليك قريباً.'
        },
        error: {
            en: 'There was a problem sending your message. Please try again later.',
            ar: 'حدثت مشكلة أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقاً.'
        },
        sending: {
            en: 'Sending...',
            ar: 'جارٍ الإرسال...'
        }
    };
    
    // الحصول على رسالة الخطأ المناسبة
    const getMessage = (messageKey) => {
        const currentLang = getLang();
        return messages[messageKey][currentLang];
    };
    
    // التحقق من صحة الإدخال للحقل
    const validateField = (field) => {
        const errorElement = field.nextElementSibling;
        let isValid = true;
        let errorMessage = '';
        
        // التحقق من الحقول المطلوبة
        if (field.required && field.value.trim() === '') {
            isValid = false;
            errorMessage = getMessage('required');
        } 
        // التحقق من صحة البريد الإلكتروني
        else if (field.type === 'email' && field.value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value.trim())) {
                isValid = false;
                errorMessage = getMessage('invalidEmail');
            }
        } 
        // التحقق من صحة رقم الهاتف (إذا تم إدخاله)
        else if (field.type === 'tel' && field.value.trim() !== '') {
            const phoneRegex = /^\+?\d{10,15}$/;
            if (!phoneRegex.test(field.value.replace(/\s|-/g, ''))) {
                isValid = false;
                errorMessage = getMessage('invalidPhone');
            }
        }
        
        // عرض/إخفاء رسالة الخطأ
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = errorMessage;
            
            // إضافة أو إزالة فئة الخطأ للتنسيق
            if (!isValid) {
                field.classList.add('invalid');
            } else {
                field.classList.remove('invalid');
            }
        }
        
        return isValid;
    };
    
    // التحقق من صحة النموذج بالكامل
    const validateForm = () => {
        const formFields = contactForm.querySelectorAll('input[required], textarea[required]');
        let formIsValid = true;
        
        formFields.forEach(field => {
            const fieldIsValid = validateField(field);
            if (!fieldIsValid) {
                formIsValid = false;
            }
        });
        
        return formIsValid;
    };
    
    // إضافة مستمعات الأحداث للتحقق من الإدخال عند الخروج من الحقل
    const formFields = contactForm.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', () => {
            validateField(field);
        });
        
        field.addEventListener('input', () => {
            // إعادة التحقق عند الكتابة إذا كان هناك خطأ سابق
            if (field.classList.contains('invalid')) {
                validateField(field);
            }
        });
    });
    
    // معالجة إرسال النموذج
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // التحقق من صحة النموذج قبل الإرسال
        if (!validateForm()) {
            // التمرير إلى أول حقل غير صالح
            const firstInvalidField = contactForm.querySelector('.invalid');
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
            return;
        }
        
        // تغيير نص الزر إلى "جارٍ الإرسال..."
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = getMessage('sending');
        submitBtn.disabled = true;
        
        // إنشاء FormData
        const formData = new FormData(contactForm);
        
        // إرسال النموذج باستخدام Fetch API
        fetch(contactForm.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // إظهار رسالة نجاح
                formStatus.textContent = getMessage('success');
                formStatus.className = 'form-status success';
                
                // إعادة تعيين النموذج
                contactForm.reset();
                
                // إخفاء رسالة النجاح بعد 5 ثوانٍ
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            } else {
                // إظهار رسالة خطأ
                formStatus.textContent = data.message || getMessage('error');
                formStatus.className = 'form-status error';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            
            // إظهار رسالة خطأ
            formStatus.textContent = getMessage('error');
            formStatus.className = 'form-status error';
        })
        .finally(() => {
            // إعادة تعيين نص الزر وتمكينه
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
    });
    
    // تأثير تلاشي خفيف عند التركيز على حقول النموذج
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', () => {
            if (field.value.trim() === '') {
                field.parentElement.classList.remove('focused');
            }
        });
        
        // تطبيق الفئة 'focused' مبدئياً للحقول التي تحتوي على قيمة
        if (field.value.trim() !== '') {
            field.parentElement.classList.add('focused');
        }
    });
});