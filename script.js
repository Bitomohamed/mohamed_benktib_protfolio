// تفعيل القائمة المتنقلة
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// تغيير لون شريط التنقل عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        backToTop.classList.add('visible');
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
        backToTop.classList.remove('visible');
    }
});

// النقل السلس عند النقر على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// زر العودة للأعلى
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// دالة التحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// دالة التحقق من نموذج البريد الإلكتروني
function validateEmailInput(inputElement, errorElement) {
    const email = inputElement.value.trim();
    
    if (email === '') {
        errorElement.textContent = 'البريد الإلكتروني مطلوب';
        inputElement.parentElement.classList.add('invalid');
        inputElement.parentElement.classList.remove('valid');
        return false;
    }
    
    if (!isValidEmail(email)) {
        errorElement.textContent = 'يرجى إدخال بريد إلكتروني صحيح';
        inputElement.parentElement.classList.add('invalid');
        inputElement.parentElement.classList.remove('valid');
        return false;
    }
    
    errorElement.textContent = '';
    inputElement.parentElement.classList.remove('invalid');
    inputElement.parentElement.classList.add('valid');
    return true;
}

// عدادات الإحصائيات
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// تأثيرات التمرير
function checkVisibility() {
    const elements = document.querySelectorAll('.section-title, .section-subtitle, .service-card, .pricing-card, .portfolio-item, .custom-pricing, .about-text p, .skill-item, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('visible');
            
            if (element.classList.contains('skill-item')) {
                const progressBar = element.querySelector('.skill-progress');
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width + '%';
            }
        }
    });
}

// تفعيل العداد عند التمرير إلى قسم الإحصائيات
function checkStatsVisibility() {
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection) return;
    
    const sectionTop = statsSection.getBoundingClientRect().top;
    const isVisible = sectionTop < window.innerHeight - 100;
    
    if (isVisible && !statsSection.classList.contains('animated')) {
        statsSection.classList.add('animated');
        animateCounters();
    }
}

// إدارة طلبات الخدمة
const orderModal = document.getElementById('order-modal');
const closeModal = document.getElementById('close-modal');
const orderForm = document.getElementById('order-form');
const modalTitle = document.getElementById('modal-title');
const orderServiceInput = document.getElementById('order-service');

// فتح نموذج طلب الخدمة من أزرار الخدمات
document.querySelectorAll('.service-order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const serviceName = this.getAttribute('data-service');
        modalTitle.textContent = `طلب خدمة: ${serviceName}`;
        orderServiceInput.value = serviceName;
        orderModal.classList.add('active');
    });
});

// فتح نموذج طلب الخدمة من أزرار الباقات
document.querySelectorAll('.pricing-order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.getAttribute('data-plan');
        modalTitle.textContent = `طلب باقة: ${planName}`;
        orderServiceInput.value = planName;
        orderModal.classList.add('active');
    });
});

// فتح نموذج طلب خدمة مخصصة
document.getElementById('custom-order-btn').addEventListener('click', function() {
    modalTitle.textContent = 'طلب عرض مخصص';
    orderServiceInput.value = 'عرض مخصص';
    orderModal.classList.add('active');
});

// إغلاق النموذج
closeModal.addEventListener('click', function() {
    orderModal.classList.remove('active');
    orderForm.reset();
    document.getElementById('order-email-error').textContent = '';
    document.getElementById('order-email').parentElement.classList.remove('invalid', 'valid');
});

// إغلاق النموذج عند النقر خارج المحتوى
window.addEventListener('click', function(e) {
    if (e.target === orderModal) {
        orderModal.classList.remove('active');
        orderForm.reset();
        document.getElementById('order-email-error').textContent = '';
        document.getElementById('order-email').parentElement.classList.remove('invalid', 'valid');
    }
});

// التحقق من البريد الإلكتروني أثناء الكتابة (نموذج طلب الخدمة)
document.getElementById('order-email').addEventListener('input', function() {
    validateEmailInput(this, document.getElementById('order-email-error'));
});

// التحقق من البريد الإلكتروني أثناء الكتابة (نموذج الاتصال)
document.getElementById('email').addEventListener('input', function() {
    validateEmailInput(this, document.getElementById('email-error'));
});

// إرسال نموذج طلب الخدمة
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('order-email');
        const emailError = document.getElementById('order-email-error');
        
        // التحقق من صحة البريد الإلكتروني فقط
        if (!validateEmailInput(emailInput, emailError)) {
            return;
        }
        
        // إظهار حالة التحميل
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // محاكاة إرسال الطلب
        setTimeout(() => {
            // إخفاء حالة التحميل
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // إظهار رسالة النجاح
            showNotification('success', 'شكرًا لك! تم استلام طلبك وسأتواصل معك قريبًا على البريد الإلكتروني الذي قدمته.');
            
            // إغلاق النموذج وإعادة تعيينه
            orderModal.classList.remove('active');
            this.reset();
            
            // إعادة تعيين حالة الحقول
            document.getElementById('order-email-error').textContent = '';
            emailInput.parentElement.classList.remove('invalid', 'valid');
        }, 2000);
    });
}

// نموذج الاتصال
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        
        // التحقق من صحة البريد الإلكتروني فقط
        if (!validateEmailInput(emailInput, emailError)) {
            return;
        }
        
        // إظهار حالة التحميل
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // محاكاة إرسال النموذج
        setTimeout(() => {
            // إخفاء حالة التحميل
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // إظهار رسالة النجاح
            showNotification('success', 'شكرًا لك! تم استلام رسالتك وسأتواصل معك قريبًا على البريد الإلكتروني الذي قدمته.');
            
            // إعادة تعيين النموذج
            this.reset();
            
            // إعادة تعيين حالة الحقول
            emailError.textContent = '';
            emailInput.parentElement.classList.remove('invalid', 'valid');
        }, 2000);
    });
}

// تحميل المزيد من الخدمات
document.getElementById('load-more-services')?.addEventListener('click', function() {
    const servicesGrid = document.querySelector('.services-grid');
    
    // إنشاء خدمة جديدة كمثال
    const newService = document.createElement('div');
    newService.className = 'service-card';
    newService.innerHTML = `
        <div class="service-icon">
            <i class="fas fa-database"></i>
        </div>
        <h3 data-key="service4_title">استخراج البيانات من قواعد البيانات</h3>
        <p data-key="service4_desc">استخراج وتنظيم البيانات من قواعد البيانات المختلفة وتحويلها إلى صيغ قابلة للتحليل.</p>
        
        <div class="service-details">
            <h4 data-key="details">التفاصيل:</h4>
            <ul>
                <li data-key="service4_detail1">استخراج البيانات من قواعد SQL وNoSQL</li>
                <li data-key="service4_detail2">تنقية البيانات وتنظيمها</li>
                <li data-key="service4_detail3">تحويل البيانات إلى صيغ متعددة</li>
                <li data-key="service4_detail4">إنشاء تقارير وتحليلات</li>
                <li data-key="service4_detail5">دمج البيانات من مصادر متعددة</li>
            </ul>
            
            <h4 data-key="execution_time">مدة التنفيذ:</h4>
            <p data-key="service4_time">3-6 أيام عمل حسب حجم البيانات</p>
            
            <div class="service-actions">
                <button class="btn service-order-btn" data-service="استخراج البيانات من قواعد البيانات" data-key="order_service">اطلب هذه الخدمة</button>
                <a href="#pricing" class="btn-link" data-key="view_offers">عرض العروض</a>
            </div>
        </div>
    `;
    
    servicesGrid.appendChild(newService);
    
    // إعادة ربط حدث النقر للخدمة الجديدة
    newService.querySelector('.service-order-btn').addEventListener('click', function() {
        const serviceName = this.getAttribute('data-service');
        modalTitle.textContent = `طلب خدمة: ${serviceName}`;
        orderServiceInput.value = serviceName;
        orderModal.classList.add('active');
    });
    
    // إخفاء زر "تحميل المزيد" بعد النقر
    this.style.display = 'none';
    
    // إشعار المستخدم
    showNotification('info', 'تم تحميل المزيد من الخدمات بنجاح!');
});

// عرض الإشعارات
function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        .notification.success {
            border-left: 4px solid var(--success-color);
        }
        .notification.error {
            border-left: 4px solid #e74c3c;
        }
        .notification.info {
            border-left: 4px solid var(--secondary-color);
        }
        .notification.show {
            transform: translateX(0);
        }
        .notification-content {
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
        }
        .notification-close {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            margin-right: 10px;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 300);
        }
    }, 5000);
}

// رسالة الترحيب
const welcomeNotification = document.getElementById('welcome-notification');
const closeNotification = document.getElementById('close-notification');
const startExploring = document.getElementById('start-exploring');

window.addEventListener('load', () => {
    setTimeout(() => {
        welcomeNotification.classList.add('active');
    }, 1000);
});

closeNotification.addEventListener('click', () => {
    welcomeNotification.classList.remove('active');
});

startExploring.addEventListener('click', () => {
    welcomeNotification.classList.remove('active');
});

// تعيين الحد الأدنى لتاريخ الموعد النهائي ليوم الغد
const deadlineInput = document.getElementById('order-deadline');
if (deadlineInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    deadlineInput.setAttribute('min', tomorrowFormatted);
}

// إضافة مستمعي الأحداث للتمرير
window.addEventListener('scroll', () => {
    checkVisibility();
    checkStatsVisibility();
});

// تفعيل التأثيرات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    checkVisibility();
    
    setTimeout(() => {
        document.querySelectorAll('.section-title').forEach(title => {
            title.classList.add('visible');
        });
        
        document.querySelectorAll('.section-subtitle').forEach(subtitle => {
            subtitle.classList.add('visible');
        });
    }, 500);
});