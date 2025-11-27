// دعم تعدد اللغات
class LanguageManager {
    constructor() {
        this.currentLang = 'ar';
        this.translations = {};
        this.init();
    }
    
    async init() {
        // تحميل ملفات الترجمة
        await this.loadTranslations('ar');
        await this.loadTranslations('en');
        await this.loadTranslations('fr');
        
        // تعيين اللغة الافتراضية
        this.setLanguage(this.currentLang);
        
        // إضافة مستمعي الأحداث لأزرار تغيير اللغة
        this.setupLanguageSwitchers();
    }
    
    async loadTranslations(lang) {
        try {
            // استخدام الترجمات المضمنة
            this.translations[lang] = this.getEmbeddedTranslations(lang);
        } catch (error) {
            console.error(`Failed to load ${lang} translations:`, error);
        }
    }
    
    getEmbeddedTranslations(lang) {
        const translations = {
            'ar': {
                "logo": "WebScraper",
                "home": "الرئيسية",
                "about": "عنّي",
                "services": "الخدمات",
                "pricing": "العروض",
                "portfolio": "الأعمال",
                "contact": "اتصل بي",
                "hero_title": "خدمات استخراج بيانات الويب المتخصصة",
                "hero_subtitle": "أقدم حلول استخراج بيانات دقيقة وفعالة تساعد أعمالك على اتخاذ قرارات أفضل وتحقيق النمو",
                "view_services": "استعرض الخدمات",
                "order_now": "اطلب خدمة الآن",
                "projects_completed": "مشروع مكتمل",
                "satisfied_clients": "عميل راضٍ",
                "years_experience": "سنوات خبرة",
                "scroll_down": "قم بالتمرير لأسفل",
                "about_me": "عنّي",
                "about_text1": "أنا مطور متخصص في استخراج بيانات الويب باستخدام أحدث التقنيات مثل Python وBeautifulSoup وScrapy وSelenium. أمتلك خبرة واسعة في تطوير برامج مخصصة لاستخراج البيانات من مختلف أنواع المواقع.",
                "about_text2": "أتخصص في تحويل البيانات غير المهيكلة على الويب إلى معلومات قابلة للتحليل والاستخدام، مما يساعد الشركات على اتخاذ قرارات مستنيرة بناءً على بيانات دقيقة.",
                "technical_skills": "المهارات التقنية",
                "profile_image": "صورة شخصية",
                "connect_with_me": "تواصل معي",
                "linkedin": "لينكدإن",
                "github": "جيت هاب",
                "email": "البريد الإلكتروني",
                "services_subtitle": "أقدم مجموعة متكاملة من خدمات استخراج بيانات الويب لتلبية احتياجاتك المختلفة",
                "service1_title": "استخراج بيانات المنتجات",
                "service1_desc": "استخراج معلومات المنتجات والأسعار والمراجعات من مواقع التجارة الإلكترونية لمتابعة المنافسين وتحليل السوق.",
                "details": "التفاصيل:",
                "service1_detail1": "استخراج بيانات المنتجات (الاسم، السعر، الوصف)",
                "service1_detail2": "جمع التقييمات والمراجعات",
                "service1_detail3": "متابعة تغيرات الأسعار",
                "service1_detail4": "تحليل المنافسين",
                "service1_detail5": "تصدير البيانات بصيغ متعددة (CSV, JSON, Excel)",
                "execution_time": "مدة التنفيذ:",
                "service1_time": "2-5 أيام عمل حسب حجم المشروع",
                "order_service": "اطلب هذه الخدمة",
                "view_offers": "عرض العروض",
                "service2_title": "استخراج بيانات الوسائط",
                "service2_desc": "جمع الصور ومقاطع الفيديو والمحتوى المرئي من مواقع الويب لمشاريعك البحثية أو التجارية.",
                "service2_detail1": "استخراج الصور بجودات مختلفة",
                "service2_detail2": "تحميل مقاطع الفيديو",
                "service2_detail3": "استخراج البيانات الوصفية للوسائط",
                "service2_detail4": "تنظيم الوسائط في مجلدات",
                "service2_detail5": "ضغط وتصنيف الوسائط المستخرجة",
                "service2_time": "3-7 أيام عمل حسب حجم المشروع",
                "service3_title": "استخراج المحتوى الإخباري",
                "service3_desc": "تجميع المقالات الإخبارية والعناوين والمحتوى الصحفي لتحليلات الرأي العام ومراقبة العلامات التجارية.",
                "service3_detail1": "جمع المقالات الإخبارية من مصادر متعددة",
                "service3_detail2": "استخراج العناوين والتواريخ والمحتوى",
                "service3_detail3": "تحليل المشاعر والرأي العام",
                "service3_detail4": "مراقبة ظهور العلامات التجارية",
                "service3_detail5": "تحديث دوري للبيانات",
                "service3_time": "2-4 أيام عمل حسب عدد المصادر",
                "load_more": "تحميل المزيد من الخدمات",
                "pricing_plans": "عروض الأسعار",
                "pricing_subtitle": "اختر الباقة التي تناسب احتياجاتك وميزانيتك",
                "basic_plan": "الباقة الأساسية",
                "basic_plan_desc": "مناسب للمشاريع الصغيرة والمبتدئين",
                "feature1": "استخراج بيانات من موقع واحد",
                "feature2": "حتى 1000 سجل بيانات",
                "feature3": "تصدير إلى CSV أو Excel",
                "feature4": "تحديث دوري للبيانات",
                "feature5": "دعم فني بعد التسليم",
                "choose_plan": "اختر هذه الباقة",
                "popular": "الأكثر شيوعاً",
                "advanced_plan": "الباقة المتقدمة",
                "advanced_plan_desc": "مناسب للشركات الصغيرة والمتوسطة",
                "feature6": "استخراج بيانات من 3 مواقع",
                "feature7": "حتى 5000 سجل بيانات",
                "feature8": "تصدير إلى CSV, Excel, JSON",
                "feature9": "تحديث أسبوعي للبيانات لمدة شهر",
                "feature10": "دعم فني لمدة أسبوعين",
                "professional_plan": "الباقة الاحترافية",
                "professional_plan_desc": "مناسب للشركات الكبيرة والمشاريع المعقدة",
                "feature11": "استخراج بيانات من 10 مواقع",
                "feature12": "عدد غير محدود من سجلات البيانات",
                "feature13": "جميع صيغ التصدير المتاحة",
                "feature14": "تحديث يومي للبيانات لمدة 3 أشهر",
                "feature15": "دعم فني لمدة شهر كامل",
                "custom_solution": "هل تحتاج إلى حل مخصص؟",
                "custom_solution_desc": "يمكنني تقديم عرض سعر مخصص يناسب متطلبات مشروعك بشكل دقيق",
                "request_custom": "اطلب عرض مخصص",
                "previous_work": "الأعمال السابقة",
                "project_image": "مشروع استخراج بيانات",
                "project1_title": "استخراج بيانات المنتجات من Amazon",
                "project1_desc": "تطوير برنامج لاستخراج معلومات المنتجات والأسعار والتصنيفات من Amazon لمقارنة الأسعار وتحليل المنافسين.",
                "results": "النتائج:",
                "project1_result": "تم استخراج 50,000 منتج مع تحديث أسبوعي للأسعار",
                "project2_title": "جمع البيانات العقارية",
                "project2_desc": "برنامج لجمع قوائم العقارات وأسعارها ومواصفاتها من مواقع العقارات الرئيسية لتحليل سوق العقارات.",
                "project2_result": "تم جمع 20,000 عقار مع تحديث يومي للبيانات",
                "project3_title": "مراقبة أسعار العملات الرقمية",
                "project3_desc": "نظام لمراقبة أسعار العملات الرقمية في الوقت الفعلي من منصات التداول المختلفة مع إشعارات عند تغير الأسعار.",
                "project3_result": "مراقبة 100+ عملة رقمية مع إشعارات فورية",
                "contact_me": "اتصل بي",
                "lets_work_together": "لنعمل معًا",
                "contact_desc": "هل تحتاج إلى استخراج بيانات لعملك أو مشروعك؟ لا تتردد في التواصل معي لمناقشة احتياجاتك.",
                "location": "المدينة، الدولة",
                "name": "الاسم",
                "subject": "الموضوع",
                "select_service": "اختر نوع الخدمة",
                "custom_offer": "عرض مخصص",
                "message": "الرسالة",
                "send_message": "إرسال الرسالة",
                "full_name": "الاسم الكامل",
                "requested_service": "الخدمة المطلوبة",
                "describe_requirements": "صف متطلباتك بالتفصيل...",
                "deadline": "الموعد النهائي المطلوب",
                "budget": "الميزانية المتوقعة",
                "send_request": "إرسال الطلب",
                "all_rights_reserved": "جميع الحقوق محفوظة",
                "portfolio": "بورتفوليو خدمات استخراج بيانات الويب",
                "welcome_title": "مرحباً بك في بورتفوليو خدمات استخراج البيانات!",
                "welcome_message": "يمكنك تصفح خدماتي وعروضي السابقة، وطلب خدمة مخصصة تناسب احتياجاتك.",
                "start_exploring": "ابدأ الاستكشاف",
                "page_title": "بورتفوليو خدمات استخراج بيانات الويب",
                "email_required": "البريد الإلكتروني مطلوب",
                "invalid_email": "يرجى إدخال بريد إلكتروني صحيح",
                "request_received": "شكرًا لك! تم استلام طلبك وسأتواصل معك قريبًا",
                "message_received": "شكرًا لك! تم استلام رسالتك وسأتواصل معك قريبًا",
                "optional": "(اختياري)"
            },
            'en': {
                "logo": "WebScraper",
                "home": "Home",
                "about": "About",
                "services": "Services",
                "pricing": "Pricing",
                "portfolio": "Portfolio",
                "contact": "Contact",
                "hero_title": "Specialized Web Data Extraction Services",
                "hero_subtitle": "I provide accurate and efficient data extraction solutions that help your business make better decisions and achieve growth",
                "view_services": "Browse Services",
                "order_now": "Order Now",
                "projects_completed": "Projects Completed",
                "satisfied_clients": "Satisfied Clients",
                "years_experience": "Years Experience",
                "scroll_down": "Scroll Down",
                "about_me": "About Me",
                "about_text1": "I am a developer specialized in web data extraction using the latest technologies like Python, BeautifulSoup, Scrapy, and Selenium. I have extensive experience in developing custom programs for data extraction from various types of websites.",
                "about_text2": "I specialize in converting unstructured web data into analyzable and usable information, helping companies make informed decisions based on accurate data.",
                "technical_skills": "Technical Skills",
                "profile_image": "Profile Image",
                "connect_with_me": "Connect with me",
                "linkedin": "LinkedIn",
                "github": "GitHub",
                "email": "Email",
                "services_subtitle": "I offer a comprehensive set of web data extraction services to meet your different needs",
                "service1_title": "Product Data Extraction",
                "service1_desc": "Extract product information, prices, and reviews from e-commerce websites to track competitors and analyze the market.",
                "details": "Details:",
                "service1_detail1": "Extract product data (name, price, description)",
                "service1_detail2": "Collect ratings and reviews",
                "service1_detail3": "Track price changes",
                "service1_detail4": "Competitor analysis",
                "service1_detail5": "Export data in multiple formats (CSV, JSON, Excel)",
                "execution_time": "Execution Time:",
                "service1_time": "2-5 working days depending on project size",
                "order_service": "Order This Service",
                "view_offers": "View Offers",
                "service2_title": "Media Data Extraction",
                "service2_desc": "Collect images, videos, and visual content from websites for your research or commercial projects.",
                "service2_detail1": "Extract images in different qualities",
                "service2_detail2": "Download videos",
                "service2_detail3": "Extract media metadata",
                "service2_detail4": "Organize media in folders",
                "service2_detail5": "Compress and classify extracted media",
                "service2_time": "3-7 working days depending on project size",
                "service3_title": "News Content Extraction",
                "service3_desc": "Collect news articles, headlines, and journalistic content for public opinion analysis and brand monitoring.",
                "service3_detail1": "Collect news articles from multiple sources",
                "service3_detail2": "Extract titles, dates, and content",
                "service3_detail3": "Sentiment and public opinion analysis",
                "service3_detail4": "Brand appearance monitoring",
                "service3_detail5": "Periodic data updates",
                "service3_time": "2-4 working days depending on number of sources",
                "load_more": "Load More Services",
                "pricing_plans": "Pricing Plans",
                "pricing_subtitle": "Choose the package that fits your needs and budget",
                "basic_plan": "Basic Plan",
                "basic_plan_desc": "Suitable for small projects and beginners",
                "feature1": "Data extraction from one website",
                "feature2": "Up to 1000 data records",
                "feature3": "Export to CSV or Excel",
                "feature4": "Periodic data updates",
                "feature5": "Technical support after delivery",
                "choose_plan": "Choose This Plan",
                "popular": "Most Popular",
                "advanced_plan": "Advanced Plan",
                "advanced_plan_desc": "Suitable for small and medium businesses",
                "feature6": "Data extraction from 3 websites",
                "feature7": "Up to 5000 data records",
                "feature8": "Export to CSV, Excel, JSON",
                "feature9": "Weekly data updates for one month",
                "feature10": "Technical support for two weeks",
                "professional_plan": "Professional Plan",
                "professional_plan_desc": "Suitable for large companies and complex projects",
                "feature11": "Data extraction from 10 websites",
                "feature12": "Unlimited data records",
                "feature13": "All export formats available",
                "feature14": "Daily data updates for 3 months",
                "feature15": "Technical support for one full month",
                "custom_solution": "Need a custom solution?",
                "custom_solution_desc": "I can provide a custom quote that precisely fits your project requirements",
                "request_custom": "Request Custom Quote",
                "previous_work": "Previous Work",
                "project_image": "Data Extraction Project",
                "project1_title": "Product Data Extraction from Amazon",
                "project1_desc": "Developed a program to extract product information, prices, and ratings from Amazon for price comparison and competitor analysis.",
                "results": "Results:",
                "project1_result": "50,000 products extracted with weekly price updates",
                "project2_title": "Real Estate Data Collection",
                "project2_desc": "Program to collect property listings, prices, and specifications from major real estate websites for market analysis.",
                "project2_result": "20,000 properties collected with daily data updates",
                "project3_title": "Cryptocurrency Price Monitoring",
                "project3_desc": "System for real-time monitoring of cryptocurrency prices from various trading platforms with price change notifications.",
                "project3_result": "Monitoring 100+ cryptocurrencies with instant notifications",
                "contact_me": "Contact Me",
                "lets_work_together": "Let's Work Together",
                "contact_desc": "Do you need data extraction for your business or project? Feel free to contact me to discuss your needs.",
                "location": "City, Country",
                "name": "Name",
                "subject": "Subject",
                "select_service": "Select Service Type",
                "custom_offer": "Custom Offer",
                "message": "Message",
                "send_message": "Send Message",
                "full_name": "Full Name",
                "requested_service": "Requested Service",
                "describe_requirements": "Describe your requirements in detail...",
                "deadline": "Required Deadline",
                "budget": "Expected Budget",
                "send_request": "Send Request",
                "all_rights_reserved": "All Rights Reserved",
                "portfolio": "Web Data Extraction Services Portfolio",
                "welcome_title": "Welcome to Data Extraction Services Portfolio!",
                "welcome_message": "You can browse my services and previous offers, and request a custom service that fits your needs.",
                "start_exploring": "Start Exploring",
                "page_title": "Web Data Extraction Services Portfolio",
                "email_required": "Email is required",
                "invalid_email": "Please enter a valid email address",
                "request_received": "Thank you! Your request has been received and I will contact you soon",
                "message_received": "Thank you! Your message has been received and I will contact you soon",
                "optional": "(optional)"
            },
            'fr': {
                "logo": "WebScraper",
                "home": "Accueil",
                "about": "À propos",
                "services": "Services",
                "pricing": "Tarifs",
                "portfolio": "Portfolio",
                "contact": "Contact",
                "hero_title": "Services spécialisés d'extraction de données Web",
                "hero_subtitle": "Je propose des solutions d'extraction de données précises et efficaces qui aident votre entreprise à prendre de meilleures décisions et à atteindre la croissance",
                "view_services": "Parcourir les services",
                "order_now": "Commander maintenant",
                "projects_completed": "Projets terminés",
                "satisfied_clients": "Clients satisfaits",
                "years_experience": "Années d'expérience",
                "scroll_down": "Faites défiler vers le bas",
                "about_me": "À propos de moi",
                "about_text1": "Je suis un développeur spécialisé dans l'extraction de données Web utilisant les dernières technologies comme Python, BeautifulSoup, Scrapy et Selenium. J'ai une vaste expérience dans le développement de programmes personnalisés pour l'extraction de données à partir de différents types de sites Web.",
                "about_text2": "Je me spécialise dans la conversion de données Web non structurées en informations analysables et utilisables, aidant les entreprises à prendre des décisions éclairées basées sur des données précises.",
                "technical_skills": "Compétences techniques",
                "profile_image": "Image de profil",
                "connect_with_me": "Connectez-vous avec moi",
                "linkedin": "LinkedIn",
                "github": "GitHub",
                "email": "E-mail",
                "services_subtitle": "Je propose un ensemble complet de services d'extraction de données Web pour répondre à vos différents besoins",
                "service1_title": "Extraction de données produits",
                "service1_desc": "Extraire les informations sur les produits, les prix et les avis des sites Web de commerce électronique pour suivre les concurrents et analyser le marché.",
                "details": "Détails:",
                "service1_detail1": "Extraire les données produits (nom, prix, description)",
                "service1_detail2": "Collecter les évaluations et avis",
                "service1_detail3": "Suivre les changements de prix",
                "service1_detail4": "Analyse des concurrents",
                "service1_detail5": "Exporter les données en plusieurs formats (CSV, JSON, Excel)",
                "execution_time": "Délai d'exécution:",
                "service1_time": "2-5 jours ouvrables selon la taille du projet",
                "order_service": "Commander ce service",
                "view_offers": "Voir les offres",
                "service2_title": "Extraction de données médias",
                "service2_desc": "Collecter des images, des vidéos et du contenu visuel à partir de sites Web pour vos projets de recherche ou commerciaux.",
                "service2_detail1": "Extraire des images de différentes qualités",
                "service2_detail2": "Télécharger des vidéos",
                "service2_detail3": "Extraire les métadonnées des médias",
                "service2_detail4": "Organiser les médias dans des dossiers",
                "service2_detail5": "Compresser et classer les médias extraits",
                "service2_time": "3-7 jours ouvrables selon la taille du projet",
                "service3_title": "Extraction de contenu d'actualités",
                "service3_desc": "Collecter des articles de presse, des titres et du contenu journalistique pour l'analyse de l'opinion publique et la surveillance de marque.",
                "service3_detail1": "Collecter des articles de presse de multiples sources",
                "service3_detail2": "Extraire les titres, dates et contenu",
                "service3_detail3": "Analyse des sentiments et de l'opinion publique",
                "service3_detail4": "Surveillance de l'apparition des marques",
                "service3_detail5": "Mises à jour périodiques des données",
                "service3_time": "2-4 jours ouvrables selon le nombre de sources",
                "load_more": "Charger plus de services",
                "pricing_plans": "Plans tarifaires",
                "pricing_subtitle": "Choisissez le forfait qui correspond à vos besoins et à votre budget",
                "basic_plan": "Forfait Basique",
                "basic_plan_desc": "Convient aux petits projets et aux débutants",
                "feature1": "Extraction de données d'un site Web",
                "feature2": "Jusqu'à 1000 enregistrements de données",
                "feature3": "Exportation vers CSV ou Excel",
                "feature4": "Mises à jour périodiques des données",
                "feature5": "Support technique après livraison",
                "choose_plan": "Choisir ce forfait",
                "popular": "Le plus populaire",
                "advanced_plan": "Forfait Avancé",
                "advanced_plan_desc": "Convient aux petites et moyennes entreprises",
                "feature6": "Extraction de données de 3 sites Web",
                "feature7": "Jusqu'à 5000 enregistrements de données",
                "feature8": "Exportation vers CSV, Excel, JSON",
                "feature9": "Mises à jour hebdomadaires des données pendant un mois",
                "feature10": "Support technique pendant deux semaines",
                "professional_plan": "Forfait Professionnel",
                "professional_plan_desc": "Convient aux grandes entreprises et projets complexes",
                "feature11": "Extraction de données de 10 sites Web",
                "feature12": "Nombre illimité d'enregistrements de données",
                "feature13": "Tous les formats d'exportation disponibles",
                "feature14": "Mises à jour quotidiennes des données pendant 3 mois",
                "feature15": "Support technique pendant un mois complet",
                "custom_solution": "Besoin d'une solution personnalisée?",
                "custom_solution_desc": "Je peux fournir un devis personnalisé qui correspond précisément aux exigences de votre projet",
                "request_custom": "Demander un devis personnalisé",
                "previous_work": "Travaux précédents",
                "project_image": "Projet d'extraction de données",
                "project1_title": "Extraction de données produits d'Amazon",
                "project1_desc": "Développement d'un programme pour extraire les informations produits, prix et évaluations d'Amazon pour la comparaison des prix et l'analyse des concurrents.",
                "results": "Résultats:",
                "project1_result": "50 000 produits extraits avec mises à jour hebdomadaires des prix",
                "project2_title": "Collecte de données immobilières",
                "project2_desc": "Programme pour collecter les annonces immobilières, les prix et les spécifications des principaux sites Web immobiliers pour l'analyse du marché.",
                "project2_result": "20 000 propriétés collectées avec mises à jour quotidiennes des données",
                "project3_title": "Surveillance des prix des cryptomonnaies",
                "project3_desc": "Système de surveillance en temps réel des prix des cryptomonnaies depuis diverses plateformes de trading avec notifications de changement de prix.",
                "project3_result": "Surveillance de 100+ cryptomonnaies avec notifications instantanées",
                "contact_me": "Contactez-moi",
                "lets_work_together": "Travaillons ensemble",
                "contact_desc": "Avez-vous besoin d'extraction de données pour votre entreprise ou projet? N'hésitez pas à me contacter pour discuter de vos besoins.",
                "location": "Ville, Pays",
                "name": "Nom",
                "subject": "Sujet",
                "select_service": "Sélectionnez le type de service",
                "custom_offer": "Offre personnalisée",
                "message": "Message",
                "send_message": "Envoyer le message",
                "full_name": "Nom complet",
                "requested_service": "Service demandé",
                "describe_requirements": "Décrivez vos besoins en détail...",
                "deadline": "Délai requis",
                "budget": "Budget prévu",
                "send_request": "Envoyer la demande",
                "all_rights_reserved": "Tous droits réservés",
                "portfolio": "Portfolio de services d'extraction de données Web",
                "welcome_title": "Bienvenue dans le portfolio de services d'extraction de données!",
                "welcome_message": "Vous pouvez parcourir mes services et offres précédentes, et demander un service personnalisé qui correspond à vos besoins.",
                "start_exploring": "Commencer l'exploration",
                "page_title": "Portfolio de services d'extraction de données Web",
                "email_required": "L'email est requis",
                "invalid_email": "Veuillez saisir une adresse email valide",
                "request_received": "Merci! Votre demande a été reçue et je vous contacterai bientôt",
                "message_received": "Merci! Votre message a été reçu et je vous contacterai bientôt",
                "optional": "(optionnel)"
            }
        };
        
        return translations[lang] || {};
    }
    
    setupLanguageSwitchers() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
                
                // تحديث حالة الأزرار النشطة
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }
    
    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Translations for ${lang} not found`);
            return;
        }
        
        this.currentLang = lang;
        
        // تحديث سمة dir في body
        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.body.setAttribute('lang', lang);
        
        // تحديث جميع العناصر التي تحتوي على data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (this.translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', this.translations[lang][key]);
                    }
                } else {
                    element.textContent = this.translations[lang][key];
                }
            }
        });
        
        // تحديث عنوان الصفحة
        document.title = this.translations[lang]['page_title'] || 'Web Scraping Portfolio';
        
        // إعادة تهيئة تأثيرات التمرير بعد تغيير اللغة
        setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 100);
    }
    
    getTranslation(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// تهيئة مدير اللغة
const languageManager = new LanguageManager();