document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR
    ===================================================== */
    (() => {
        const menuIcon = document.querySelector("#menu_icon");
        const navbar = document.querySelector(".navbar");
        const navbg = document.querySelector(".nav_bg");

        if (!menuIcon || !navbar || !navbg) return;

        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("fa-xmark");
            navbar.classList.toggle("active");
            navbg.classList.toggle("active");
        });
    })();


    /* =====================================================
       READ MORE TOGGLE
    ===================================================== */
    (() => {
        const para = document.querySelector(".para");
        const btn = document.querySelector(".togglebutton");

        if (!para || !btn) return;

        let isShow = false;

        btn.addEventListener("click", () => {
            isShow = !isShow;
            para.style.display = isShow ? "block" : "none";
            btn.textContent = isShow ? "Read Less" : "Read More";
        });
    })();


    /* =====================================================
       TYPED TEXT
    ===================================================== */
    (() => {
        if (typeof Typed === "undefined") return;

        const typedText = {
            english: ["an Ophthalmologist", "a Glaucoma Specialist", "a Phaco Surgeon"],
            bangla: ["চক্ষু বিশেষজ্ঞ", "গ্লুকোমা বিশেষজ্ঞ", "ফ্যাকো সার্জন"],
            hindi: ["नेत्र रोग विशेषज्ञ", "ग्लूकोमा विशेषज्ञ", "फैको सर्जन"],
            urdu: ["ماہرِ امراضِ چشم", "گلوکوما اسپیشلسٹ", "فیکو سرجن"]
        };

        let typed;
        const textEl = document.querySelector(".text");
        const langSelect = document.querySelector(".sdropdown");

        function startTyped(lang) {
            if (!typedText[lang] || !textEl) return;

            if (typed) {
                typed.destroy();
                textEl.textContent = "";
            }

            typed = new Typed(".text", {
                strings: typedText[lang],
                typeSpeed: 100,
                backSpeed: 60,
                backDelay: 1000,
                loop: true
            });
        }

        startTyped("english");

        if (langSelect) {
            langSelect.addEventListener("change", function () {
                startTyped(this.value);
            });
        }
    })();


    /* =====================================================
       ABOUT SECTION ANIMATION
    ===================================================== */
    (() => {
        const section = document.querySelector(".about");
        const img = document.querySelector(".about_img");
        const text = document.querySelector(".about_text");

        if (!section || !img || !text) return;

        const animate = () => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                img.classList.add("active");
                text.classList.add("active");
                window.removeEventListener("scroll", animate);
            }
        };

        window.addEventListener("scroll", animate);
        animate();
    })();


    /* =====================================================
       SERVICES ANIMATION
    ===================================================== */
    (() => {
        const services = document.querySelector("#services");
        const boxes = document.querySelectorAll(".services_list div");
        const title = document.querySelector(".sub_1");

        if (!services || !boxes.length || !title) return;

        const animate = () => {
            if (services.getBoundingClientRect().top < window.innerHeight - 100) {
                title.classList.add("active");
                boxes.forEach((box, i) => {
                    setTimeout(() => box.classList.add("active"), i * 200);
                });
                window.removeEventListener("scroll", animate);
            }
        };

        window.addEventListener("scroll", animate);
        animate();
    })();


    /* =====================================================
       IMAGE SLIDER
    ===================================================== */
    (() => {
        const next = document.querySelector(".next");
        const prev = document.querySelector(".prev");
        const slide = document.querySelector(".slide");

        if (!next || !prev || !slide) return;

        next.addEventListener("click", () => {
            const items = document.querySelectorAll(".item");
            if (items.length) slide.appendChild(items[0]);
        });

        prev.addEventListener("click", () => {
            const items = document.querySelectorAll(".item");
            if (items.length) slide.prepend(items[items.length - 1]);
        });
    })();


    /* =====================================================
       VIDEO MODAL
    ===================================================== */
    (() => {
        const modal = document.querySelector(".video_modal");
        const modalVideo = modal?.querySelector("video");
        const closeBtn = modal?.querySelector(".close");
        const videos = document.querySelectorAll(".video_container video");

        if (!modal || !modalVideo || !closeBtn || !videos.length) return;

        videos.forEach(video => {
            video.addEventListener("click", () => {
                modal.style.display = "flex";
                modalVideo.src = video.src;
                modalVideo.play();
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
            modalVideo.pause();
            modalVideo.currentTime = 0;
        });
    })();

});
// video animation
document.addEventListener("DOMContentLoaded", function () {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.25 
    });

    document.querySelectorAll(".dream").forEach(el => {
        observer.observe(el);
    });
    document.querySelectorAll(".v_video_items").forEach(el => {
        observer.observe(el);
    });
    const title = document.querySelector(".sub_title_1");
    if (title) observer.observe(title);

});
// ===== VIDEO GALLERY SCROLL ANIMATION FIXED =====
document.addEventListener("DOMContentLoaded", function() {
    const videoSection = document.querySelector("#video");
    const heading = document.querySelector(".sub_3");
    const videos = document.querySelectorAll(".video_container .video");
    const button = document.querySelector(".button_1");

    function animateVideosOnScroll() {
        const rect = videoSection.getBoundingClientRect();
        const triggerPoint = window.innerHeight - 150;

        if (rect.top <= triggerPoint) {
            heading.style.opacity = 0;
            heading.style.transform = "translateY(-40px)";
            heading.style.transition = "all 0.8s ease";
            setTimeout(() => {
                heading.style.opacity = 1;
                heading.style.transform = "translateY(0)";
            }, 100);

           videos.forEach((video, index) => {
                setTimeout(() => {
                    video.style.transition = "transform 2s ease, opacity 2s ease";
                    video.style.transform = "scale(1)";
                    video.style.opacity = "1";
                }, index * 200);
            });
            button.style.opacity = 0;
            button.style.transform = "translateX(100px)";
            button.style.transition = "transform 2s ease, opacity 2s ease";
            setTimeout(() => {
                button.style.opacity = 1;
                button.style.transform = "translateX(0)";
            }, videos.length * 200 + 200);
            window.removeEventListener("scroll", animateVideosOnScroll);
        }
    }
    window.addEventListener("scroll", animateVideosOnScroll);
});

// ===== GALLERY SCROLL ANIMATION (ONE TIME ONLY) =====
document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.querySelector("#gallery");
    const heading = document.querySelector(".sub_2");
    let hasAnimated = false;

    function animateGalleryOnScroll() {
        if (hasAnimated) return;

        const rect = gallery.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.75;

        if (rect.top <= triggerPoint) {
            gallery.classList.add("gallery-animate");
            heading.classList.add("gallery-animate");

            hasAnimated = true;
            window.removeEventListener("scroll", animateGalleryOnScroll);
        }
    }

    window.addEventListener("scroll", animateGalleryOnScroll);
});
// ===== EDUCATION TIMELINE SCROLL ANIMATION =====
document.addEventListener("DOMContentLoaded", function () {
    const educationSection = document.querySelector("#education");

    function animateEducationOnScroll() {
        const rect = educationSection.getBoundingClientRect();
        const triggerPoint = window.innerHeight - 120;

        if (rect.top <= triggerPoint) {
            educationSection.classList.add("education-animate");
            window.removeEventListener("scroll", animateEducationOnScroll);
        }
    }

    window.addEventListener("scroll", animateEducationOnScroll);
});

/* =====================================================
   location
   ===================================================== */
document.addEventListener("DOMContentLoaded", function () {

    const section4 = document.querySelector("#section_4");
    const heading4 = document.querySelector(".sub_4");
    const container4 = document.querySelector(".container_4");

    function animateSection4OnScroll() {
        const rect = section4.getBoundingClientRect();
        const triggerPoint = window.innerHeight - 120;

        if (rect.top <= triggerPoint) {
            requestAnimationFrame(() => {
                heading4.classList.add("section4-animate");
                container4.classList.add("section4-animate");
            });
            window.removeEventListener("scroll", animateSection4OnScroll);
        }
    }
    window.addEventListener("scroll", animateSection4OnScroll);
});
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const aboutSection = document.querySelector(".about_abo");
        if (!aboutSection) return;
        if (aboutSection.dataset.animated === "true") return;
        aboutSection.dataset.animated = "true";
        requestAnimationFrame(() => {
            aboutSection.classList.add("animate-about");
        });
    });
})();
// gallery section
(function() {
    'use strict'; // strict mode, safer

    window.addEventListener("load", () => {
        // LightGallery
        const gallery = document.querySelector('.gall_box');
        if (gallery) {
            lightGallery(gallery, {
                selector: 'a',
                controls: true,
                loop: true,
                zoom: true,
                thumbnail: true,
                download: false,
                closeOnTap: true
            });
        }

        // Intersection Observer
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            }, { threshold: 0.2 });

            const elements = document.querySelectorAll(".dream, .sub_title_1");
            elements.forEach(el => observer.observe(el));
        }
    });
})();

/* =====================================================
   LANGUAGE SWITCHER
   ===================================================== */

const languageData = {
    english: {
        // background slide
        home: "Home",
        about:"About Me",
        service: "Services",
        gallery: "Gallery",
        video: "Videos",
        contact:"Contact",
        hello: "Hello! It's me.",
        name: "Prof. Dr. Iftekhar Md. Munir",
        role: "And I'm a",
        appointment: "Get Appointment",
        original: "Dr. Iftekhar Md Munir, is an energetic & enthusiastic Glaucoma Specialist & Phaco surgeon of          Bangladesh Eye Hospital, Malibagh branch. He was working as Professor of Glaucoma at National Institute of ophthalmology (NIO) which is a 250 bed eye subspecialty based apex hospital in public sector, at Dhaka, Bangladesh. He utilizes the latest techniques and equipment to ensure that he brings the highest standards of care. He is one of the leading cataract and glaucoma surgeon of Bangladesh.",
        para: "Dr. Iftekhar Md Munir is also active in research & published more than 30 papers in local & foreign journals. He regularly attends/presents at various eye conferences at home & abroad. <br> Dr. Iftekhar Md Munir received Professor Mubarak Ali Awardas recognition of his works on glaucoma by Ophthalmological Society of Bangladesh (OSB) in 2013.",
        read_more: "Read More",
        // about image
        con: "Consultant Glaucoma & Phaco Specialist",
        about_me: "Dr. Iftekhar Md Munir, is an energetic & enthusiastic Glaucoma Specialist & Phaco surgeon of Bangladesh Eye Hospital, Malibagh branch. He was working as Professor of Glaucoma at National Institute of ophthalmology (NIO) which is a 250 bed eye subspecialty based apex hospital in public sector, at Dhaka, Bangladesh. He utilizes the latest techniques and equipment to ensure that he brings the highest standards of care. He is one of the leading cataract and glaucoma surgeon of Bangladesh. Doing phacoemulsification from 2000 in the country and has performed high volume Phaco Surgeries with excellent results. He is the pioneer of glaucoma surgery -Trabeculectomy with MMC and Ologen, Ahmed Glaucoma Valve and other GDD implants in Bangladesh. He also perform laser glaucoma surgery-LPI, SLT.",
        // services
        ser_h: "My Services",
        gla_ser: "Glaucoma Services",
        gla_ser_1: "Phaco Surgery",
        // photo gallery
        photo_gallery: "Photo Gallery",
        // education
        education: "Educational Qualification",
        edu: "MBBS from Sylhet MAG Osmani Medical College in 1988",
        edu_1: "FCPS in Ophthalmology from BCPS",
        edu_2: "Fellowship on glaucoma at Venu Eye Hospital & Institute, New Delhi, India in 2011 ",
        edu_3: "Fellowship on glaucoma Al Shifa Trust eye Hospital & Institute, Rawalpindi, Pakistan in 2010",
        // video
        video_h: "Video Gallery",
        video_1: "What is the cost of cataract surgery?",
        video_2: "What problems can happen in future if you keep eye filter in your eyes?",
        video_3: "Which lens is best for cataract operation?",
        video_4: "Diagnosis of Glaucoma & Glaucoma profile patient at Bangladesh Eye Hospital Malibagh",
        video_5: "What is cataract?",
        video_6: "What problems can be caused in the future if the cataract is kept?",
        video_7: "What to do before cataract surgery?",
        video_8: "Complications of surgery in diabetic patient",
        video_9: "How to understand if you have cataracts?",
        more_video: "More Video",
        // location
        location: "My Location",
        // about_me page
        paragraph_1: "is an energetic & enthusiastic Glaucoma Specialist & Phaco surgeon of Bangladesh Eye Hospital, Malibagh branch. He was working as Professor of Glaucoma at National Institute of ophthalmology (NIO) which is a 250 bed eye subspecialty based apex hospital in public sector, at Dhaka, Bangladesh. He utilizes the latest techniques and equipment to ensure that he brings the highest standards of care. He is one of the leading cataract and glaucoma surgeon of Bangladesh. Doing phacoemulsification from 2000 in the country and has performed high volume Phaco Surgeries with excellent results. He is the pioneer of glaucoma surgery -Trabeculectomy with MMC and Ologen, Ahmed Glaucoma Valve and other GDD implants in Bangladesh. He also perform laser glaucoma surgery-LPI, SLT.",
        paragraph_2: "is also active in research & published more than 30 papers in local & foreign journals. He regularly attends/presents at various eye conferences at home & abroad.",
        receive: "received",
        name_2: "Professor Mubarak Ali Award",
        paragraph_3: "as recognition of his works on glaucoma by Ophthalmological Society of Bangladesh (OSB) in 2013.",
        name_3: "Professor Saidur Rahman Award",
        paragraph_4: "as a recognition of his works in Ophthalmology by Bangladesh community Ophthalmological Society (BCOS) in 2018.",
        paragraph_5: "received the distinguished service award for his services in Bangladesh from the Asia Pacific Academy of Ophthalmology (APAO) in 2024.",
        education_1: "Education",
        education_1_text: "MBBS from Sylhet MAG Osmani Medical College in 1988",
        education_2_text: "FCPS in Ophthalmology from BCPS",
        training: "Training",
        training_1: "Fellowship on glaucoma at Venu Eye Hospital & Institute, New Delhi, India in 2011",
        training_2: "Fellowship on glaucoma Al Shifa Trust eye Hospital & Institute, Rawalpindi, Pakistan in 2010",
        training_3: "Post graduate training on glaucoma imaging from Center for Sight New Delhi, India in 2012.",
        membership: "Membership",
        membership_1: "Former Secretary General & Treasurer of Bangladesh Glaucoma Society (BGS).",
        membership_2: "Former Vice President & Joint Secretary of Ophthalmological Society of Bangladesh (OSB).",
        membership_3: "Former Vice president of Bangladesh Academy of Ophthalmology (BAO).",
        membership_4: "Founder Member, Bangladesh Community Ophthalmological Society (BCOS).",
        membership_5: "Founder Member, Bangladesh Society of Cataract and Refractive Surgeon (BSCRS)",
        membership_6: "International Life Member, All India Ophthalmological Society (AIOS), India.",
        if: "If you want watch video on youtube than click the logo",
        video_lang: "Video gallery of Prof. Dr. Iftekhar Md. Munir",
    },
    bangla: {
        // background slide
        home: "হোম",
        about:"আমার সম্পর্কে",
        service: "সেবা",
        video: "ভিডিও",
        gallery: "ছবি",
        contact:"যোগাযোগ",
        hello: "হ্যালো! আমি",
        name: "অধ্যাপক ডা. ইফতেখার মোঃ মুনির",
        role: "আমি একজন",
        appointment: "অ্যাপয়েন্টমেন্ট নিন",
        original: "অধ্যাপক ডাঃ ইফতেখার মোঃ মুনির, বাংলাদেশ চক্ষু হাসপাতাল, মালিবাগ শাখার একজন উদ্যমী ও উৎসাহী গ্লুকোমা বিশেষজ্ঞ এবং ফ্যাকো সার্জন। তিনি ঢাকায় অবস্থিত জাতীয় চক্ষু বিজ্ঞান ইনস্টিটিউট (এনআইও) -এ গ্লুকোমা বিভাগের অধ্যাপক হিসেবে কর্মরত ছিলেন। এটি বাংলাদেশের সরকারি খাতের একটি ২৫০ শয্যাবিশিষ্ট চক্ষু উপ-বিশেষজ্ঞ ভিত্তিক শীর্ষ হাসপাতাল। তিনি সর্বোচ্চ মানের চিকিৎসা নিশ্চিত করার জন্য সর্বশেষ কৌশল এবং সরঞ্জাম ব্যবহার করেন। তিনি বাংলাদেশের অন্যতম শীর্ষস্থানীয় ছানি এবং গ্লুকোমা সার্জন।",
        para: "অধ্যাপক ডাঃ ইফতেখার মোঃ মুনির গবেষণায়ও সক্রিয় এবং দেশি-বিদেশি জার্নালে ৩০টিরও বেশি গবেষণাপত্র প্রকাশ করেছেন। তিনি নিয়মিতভাবে দেশে-বিদেশে বিভিন্ন চক্ষু সম্মেলনে অংশগ্রহণ করেন/উপস্থাপনা করেন। <br> ডাঃ ইফতেখার মোঃ মুনির ২০১৩ সালে চক্ষুবিজ্ঞান সমিতি অফ বাংলাদেশ (OSB) কর্তৃক গ্লুকোমা সম্পর্কিত তাঁর কাজের স্বীকৃতিস্বরূপ অধ্যাপক মোবারক আলী পুরস্কার লাভ করেন।",
        read_more: "আরও পড়ুন",
        // about image
        con: "কনসালটেন্ট গ্লুকোমা ও ফ্যাকো বিশেষজ্ঞ",
        about_me: " অধ্যাপক ডাঃ ইফতেখার মোঃ মুনির, বাংলাদেশ চক্ষু হাসপাতাল, মালিবাগ শাখার একজন উদ্যমী ও উৎসাহী গ্লুকোমা বিশেষজ্ঞ এবং ফ্যাকো সার্জন। তিনি ঢাকায় অবস্থিত জাতীয় চক্ষু বিজ্ঞান ইনস্টিটিউট (এনআইও) -এ গ্লুকোমা বিভাগের অধ্যাপক হিসেবে কর্মরত ছিলেন। তিনি সর্বোচ্চ মানের চিকিৎসা নিশ্চিত করার জন্য সর্বশেষ কৌশল এবং সরঞ্জাম ব্যবহার করেন। তিনি বাংলাদেশের অন্যতম শীর্ষস্থানীয় ছানি এবং গ্লুকোমা সার্জন। ২০০০ সাল থেকে দেশে ফ্যাকোইমালসিফিকেশন করছেন এবং চমৎকার ফলাফলের সাথে উচ্চমানের ফ্যাকো সার্জারি করেছেন। তিনি বাংলাদেশে গ্লুকোমা সার্জারি - ট্র্যাবেকিউলেকটমি উইথ এমএমসি এবং ওলোজেন, আহমেদ গ্লুকোমা ভালভ এবং অন্যান্য জিডিডি ইমপ্লান্টের পথিকৃৎ। তিনি লেজার গ্লুকোমা সার্জারি - এলপিআই, এসএলটিও করেন।",
        // services
        ser_h: "আমার সেবা সমূহ",
        gla_ser: "গ্লুকোমার সেবা সমূহ",
        gla_ser_1: "ফ্যাকো সার্জারি",
        // photo gallery
        photo_gallery: "ছবি সমূহ",
        // education
        education: "শিক্ষাগত যোগ্যতা",
        edu: "১৯৮৮ সালে সিলেট এমএজি ওসমানী মেডিকেল কলেজ থেকে এমবিবিএস পাশ করেছি।",
        edu_1: "বিসিপিএস থেকে চক্ষুবিদ্যায় এফসিপিএস পাশ করেছি।",
        edu_2: "২০১১ সালে ভারতের নয়াদিল্লির ভেনু আই হসপিটাল অ্যান্ড ইনস্টিটিউটে গ্লুকোমার উপর ফেলোশিপ করেছি।",
        edu_3: "২০১০ সালে পাকিস্তানের রাওয়ালপিন্ডির আল শিফা ট্রাস্ট চক্ষু হাসপাতাল ও ইনস্টিটিউটের গ্লুকোমা বিষয়ক ফেলোশিপ করেছি।।",
        // video
        video_h: "ভিডিও গুলোর সমূহ",
        video_1: "ছানি অপারেশনর খরচ কেমন?",
        video_2: "চোখের ছানি পুষে রাখলে ভবিষ্যতে কী সমস্যা হতে পারে?",
        video_3: "ছানি অপারেশনে জন্য কোন লেন্সটি সবথেকে ভালো?",
        video_4: "বাংলাদেশ চক্ষু হাসপাতাল মালিবাগে গ্লুকোমা এবং গ্লুকোমা প্রোফাইল রোগীর রোগ নির্ণয়",
        video_5: "ছানি কি?",
        video_6: "চোখের ছানি পুষে রাখলে ভবিষ্যতে কী সমস্যা হতে পারে?",
        video_7: "ছানি অপারেশনের পূর্বে করণীয় ?",
        video_8: "ডায়াবেটিক রোগীর ছানি অপারেশনের জটিলতা",
        video_9: "চোখে ছানি হলে কীভাবে বুঝবেন?",
        more_video: "আরো ভিডিও",
        // location
        location: "আমার ঠিকানা",
        // about me section
        paragraph_1: "বাংলাদেশ চক্ষু হাসপাতাল, মালিবাগ শাখার একজন উদ্যমী ও উৎসাহী গ্লুকোমা বিশেষজ্ঞ এবং ফ্যাকো সার্জন। তিনি ঢাকায় অবস্থিত জাতীয় চক্ষু বিজ্ঞান ইনস্টিটিউট (এনআইও) -এ গ্লুকোমা বিভাগের অধ্যাপক হিসেবে কর্মরত ছিলেন। তিনি সর্বোচ্চ মানের চিকিৎসা নিশ্চিত করার জন্য সর্বশেষ কৌশল এবং সরঞ্জাম ব্যবহার করেন। তিনি বাংলাদেশের অন্যতম শীর্ষস্থানীয় ছানি এবং গ্লুকোমা সার্জন। ২০০০ সাল থেকে দেশে ফ্যাকোইমালসিফিকেশন করছেন এবং চমৎকার ফলাফলের সাথে উচ্চমানের ফ্যাকো সার্জারি করেছেন। তিনি বাংলাদেশে গ্লুকোমা সার্জারি - ট্র্যাবেকিউলেকটমি উইথ এমএমসি এবং ওলোজেন, আহমেদ গ্লুকোমা ভালভ এবং অন্যান্য জিডিডি ইমপ্লান্টের পথিকৃৎ। তিনি লেজার গ্লুকোমা সার্জারি - এলপিআই, এসএলটিও করেন।",
        paragraph_2: "গবেষণার সাথেও সক্রিয় এবং দেশি-বিদেশি জার্নালে ৩০টিরও বেশি গবেষণাপত্র প্রকাশ করেছেন। তিনি নিয়মিতভাবে দেশে-বিদেশে বিভিন্ন চক্ষু সম্মেলনে অংশগ্রহণ/উপস্থাপনা করেন।",
        receive: "প্রাপ্ত",
        name_2: "অধ্যাপক মোবারক আলী পুরস্কার",
        paragraph_3: "২০১৩ সালে চক্ষু বিশেষজ্ঞ সোসাইটি অফ বাংলাদেশ (ওএসবি) কর্তৃক গ্লুকোমা সম্পর্কিত তাঁর কাজের স্বীকৃতিস্বরূপ।",
        name_3: "অধ্যাপক সাইদুর রহমান পুরস্কার",
        paragraph_4: "২০১৮ সালে বাংলাদেশ কমিউনিটি চক্ষুবিজ্ঞান সমিতি (বিসিওএস) কর্তৃক চক্ষুবিদ্যায় তাঁর কাজের স্বীকৃতিস্বরূপ।",
        paragraph_5: "২০২৪ সালে এশিয়া প্যাসিফিক একাডেমি অফ অফথালমোলজি (এপিএও) থেকে বাংলাদেশে তার সেবার জন্য বিশিষ্ট পরিষেবা পুরস্কার পেয়েছেন।",
        education_1: "শিক্ষা",
        education_1_text: "১৯৮৮ সালে সিলেট এমএজি ওসমানী মেডিকেল কলেজ থেকে এমবিবিএস পাস করেন।",
        education_2_text: "বিসিপিএস থেকে চক্ষুবিদ্যায় এফসিপিএস পাস করেছেন।",
        training: "প্রশিক্ষণ",
        training_1: "২০১১ সালে ভারতের নয়াদিল্লির ভেনু আই হসপিটাল অ্যান্ড ইনস্টিটিউটে গ্লুকোমার উপর ফেলোশিপ",
        training_2: "২০১০ সালে পাকিস্তানের রাওয়ালপিন্ডির আল শিফা ট্রাস্ট চক্ষু হাসপাতাল ও ইনস্টিটিউটের গ্লুকোমা বিষয়ক ফেলোশিপ।",
        training_3: "২০১২ সালে ভারতের নয়াদিল্লির সেন্টার ফর সাইট থেকে গ্লুকোমা ইমেজিংয়ের উপর স্নাতকোত্তর প্রশিক্ষণ।",
        membership: "সদস্যপদ",
        membership_1: "বাংলাদেশ গ্লুকোমা সোসাইটি (বিজিএস) এর প্রাক্তন মহাসচিব ও কোষাধ্যক্ষ।",
        membership_2: "চক্ষু বিশেষজ্ঞ সোসাইটি অফ বাংলাদেশ (ওএসবি) এর প্রাক্তন সহ-সভাপতি এবং যুগ্ম সম্পাদক।",
        membership_3: "বাংলাদেশ চক্ষু বিজ্ঞান একাডেমির (বিএও) প্রাক্তন সহ-সভাপতি।",
        membership_4: "প্রতিষ্ঠাতা সদস্য, বাংলাদেশ কমিউনিটি অপথালমোলজিক্যাল সোসাইটি (বিসিওএস)।",
        membership_5: "প্রতিষ্ঠাতা সদস্য, বাংলাদেশ সোসাইটি অফ ক্যাটারাক্ট অ্যান্ড রিফ্র্যাক্টিভ সার্জন (BSCRS)",
        membership_6: "আন্তর্জাতিক জীবন সদস্য, অল ইন্ডিয়া অপথালমোলজিক্যাল সোসাইটি (AIOS), ভারত।",
        if: "ইউটিউবে ভিডিও দেখতে চাইলে লগোতে ক্লিক করুন।",
        video_lang: "প্রফেসর ড. ইফতেখার মোঃ মুনিরের ভিডিও সমূহ",
    },
    hindi: {
        // background slide
        home: "होम",
        about:"मेरे बारे में",
        service: "सर्विसेज़",
        video: "वीडियो",
        gallery: "गैलरी",
        contact:"कॉन्टैक्ट",
        hello: "नमस्ते! मैं हूँ",
        name: "प्रो. डॉ. इफ्तेखार एमडी मुनिर",
        role: "मैं एक",
        appointment: "अपॉइंटमेंट लें",
        original: "डॉ. इफ़्तेखार एमडी मुनीर, बांग्लादेश आई हॉस्पिटल, मालीबाग ब्रांच के एक एनर्जेटिक और जोशीले ग्लूकोमा स्पेशलिस्ट और फेको सर्जन हैं। वह नेशनल इंस्टीट्यूट ऑफ़ ऑप्थल्मोलॉजी (NIO) में ग्लूकोमा के प्रोफेसर के तौर पर काम कर रहे थे, जो ढाका, बांग्लादेश में पब्लिक सेक्टर का 250 बेड का आई सबस्पेशलिटी बेस्ड टॉप हॉस्पिटल है। वह लेटेस्ट टेक्नीक और इक्विपमेंट का इस्तेमाल करते हैं ताकि यह पक्का हो सके कि वह सबसे अच्छे स्टैंडर्ड की केयर दे सकें। वह बांग्लादेश के लीडिंग कैटरैक्ट और ग्लूकोमा सर्जन में से एक हैं।",
        para: "डॉ. इफ़्तेखार एमडी मुनीर रिसर्च में भी एक्टिव हैं और लोकल और विदेशी जर्नल्स में उनके 30 से ज़्यादा पेपर पब्लिश हो चुके हैं। वे रेगुलर तौर पर देश और विदेश में अलग-अलग आई कॉन्फ्रेंस में शामिल होते हैं/प्रेजेंट करते हैं। <br> डॉ. इफ़्तेखार एमडी मुनीर को 2013 में ऑप्थैल्मोलॉजिकल सोसाइटी ऑफ़ बांग्लादेश (OSB) से ग्लूकोमा पर उनके काम के लिए प्रोफेसर मुबारक अली अवॉर्ड मिला।",
        read_more: "और पढ़ें",
        // about image
        con: "सलाहकार ग्लूकोमा और फेको विशेषज्ञ",
        about_me: "डॉ. इफ़्तेखार एमडी मुनीर, बांग्लादेश आई हॉस्पिटल, मालीबाग ब्रांच के एक एनर्जेटिक और जोशीले ग्लूकोमा स्पेशलिस्ट और फेको सर्जन हैं। वे बांग्लादेश के ढाका में नेशनल इंस्टीट्यूट ऑफ़ ऑप्थल्मोलॉजी (NIO) में ग्लूकोमा के प्रोफेसर के तौर पर काम कर रहे थे, जो पब्लिक सेक्टर का 250 बेड का आई सबस्पेशलिटी बेस्ड टॉप हॉस्पिटल है। वे सबसे अच्छे स्टैंडर्ड की केयर पक्का करने के लिए लेटेस्ट टेक्नीक और इक्विपमेंट का इस्तेमाल करते हैं। वे बांग्लादेश के जाने-माने मोतियाबिंद और ग्लूकोमा सर्जन में से एक हैं। वे देश में 2000 से फेकोइमल्सीफिकेशन कर रहे हैं और बहुत ज़्यादा फेको सर्जरी की हैं, जिनके बहुत अच्छे रिज़ल्ट मिले हैं। वे बांग्लादेश में ग्लूकोमा सर्जरी - MMC और ओलोजन के साथ ट्रेबेक्यूलेक्टॉमी, अहमद ग्लूकोमा वाल्व और दूसरे GDD इम्प्लांट के पायनियर हैं। वे लेज़र ग्लूकोमा सर्जरी - LPI, SLT भी करते हैं।",
        // services
        ser_h: "मेरी सेवाएँ",
        gla_ser: "ग्लूकोमा सेवाएँ",
        gla_ser_1: "फेको सर्जरी",
        // photo gallery
        photo_gallery: "फोटो गैलरी",
        // education
        education: "शैक्षणिक योग्यता",
        edu: "1988 में सिलहट एमएजी उस्मानी मेडिकल कॉलेज से एमबीबीएस",
        edu_1: "बीसीपीएस से नेत्र विज्ञान में एफसीपीएस",
        edu_2: "2011 में वेणु आई हॉस्पिटल एंड इंस्टीट्यूट, नई दिल्ली, भारत में ग्लूकोमा पर फेलोशिप",
        edu_3: "ग्लूकोमा पर फेलोशिप अल शिफा ट्रस्ट आई हॉस्पिटल एंड इंस्टीट्यूट, रावलपिंडी, पाकिस्तान 2010",
        // video
        video_h: "वीडियो गैलरी",
        video_1: "मोतियाबिंद सर्जरी का खर्च क्या है?",
        video_2: "अगर आप अपनी कार में फिल्टर रखते हैं तो भविष्य में क्या समस्याएं हो सकती हैं?",
        video_3: "मोतियाबिंद के ऑपरेशन के लिए कौन सा लेंस सबसे अच्छा है?",
        video_4: "बांग्लादेश आई हॉस्पिटल मालीबाग में ग्लूकोमा का डायग्नोसिस और ग्लूकोमा के मरीज़ की प्रोफ़ाइल",
        video_5: "मोतियाबिंद क्या है?",
        video_6: "अगर मोतियाबिंद को रखा जाए तो भविष्य में क्या समस्याएं हो सकती हैं?",
        video_7: "मोतियाबिंद सर्जरी से पहले क्या करें?",
        video_8: "डायबिटीज के मरीजों में सर्जरी की जटिलताएं",
        video_9: "कैसे समझें कि आपको मोतियाबिंद है?",
        more_vide: "अधिक वीडियो",
        // location
        location: "मेरा स्थान",
        // about me section
        paragraph_1: "बांग्लादेश आई हॉस्पिटल, मालीबाग ब्रांच के एक एनर्जेटिक और उत्साही ग्लूकोमा स्पेशलिस्ट और फेको सर्जन हैं। वे नेशनल इंस्टीट्यूट ऑफ ऑप्थल्मोलॉजी (NIO) में ग्लूकोमा के प्रोफेसर के तौर पर काम कर रहे थे, जो ढाका, बांग्लादेश में पब्लिक सेक्टर का 250 बेड का आई सबस्पेशलिटी बेस्ड एपेक्स हॉस्पिटल है। वे लेटेस्ट टेक्नीक और इक्विपमेंट का इस्तेमाल करते हैं ताकि यह पक्का हो सके कि वे केयर के सबसे ऊंचे स्टैंडर्ड्स ला सकें। वे बांग्लादेश के लीडिंग कैटरैक्ट और ग्लूकोमा सर्जन में से एक हैं। देश में 2000 से फेकोइमल्सीफिकेशन कर रहे हैं और हाई वॉल्यूम में फेको सर्जरीज़ को शानदार रिज़ल्ट के साथ किया है। वे बांग्लादेश में ग्लूकोमा सर्जरी- MMC और ओलोजन के साथ ट्रेबेकुलेक्टोमी, अहमद ग्लूकोमा वाल्व और दूसरे GDD इम्प्लांट्स के पायनियर हैं। वे लेजर ग्लूकोमा सर्जरी-LPI, SLT भी करते हैं।",
        paragraph_2: "रिसर्च में भी एक्टिव हैं और लोकल और विदेशी जर्नल्स में 30 से ज़्यादा पेपर पब्लिश कर चुके हैं। वह रेगुलर तौर पर देश और विदेश में अलग-अलग आई कॉन्फ्रेंस में जाते हैं/प्रेजेंट करते हैं।",
        receive: "प्राप्त",
        name_2: "प्रोफेसर मुबारक अली पुरस्कार",
        paragraph_3:"2013 में बांग्लादेश की ऑप्थैल्मोलॉजिकल सोसाइटी (OSB) ने ग्लूकोमा पर उनके काम को पहचान दी।",
        name_3: "प्रोफेसर सैदुर रहमान पुरस्कार",
        paragraph_4: "2018 में बांग्लादेश कम्युनिटी ऑप्थैल्मोलॉजिकल सोसाइटी (BCOS) ने ऑप्थैल्मोलॉजी में उनके काम को पहचान दी।",
        paragraph_5: "2024 में एशिया पैसिफिक एकेडमी ऑफ ऑप्थल्मोलॉजी (APAO) से बांग्लादेश में उनकी सेवाओं के लिए विशिष्ट सेवा पुरस्कार मिला।",
        education_1: "शिक्षा",
        education_1_text: "1988 में सिलहट MAG उस्मानी मेडिकल कॉलेज से MBBS पास किया",
        education_2_text: "BCPS से नेत्र विज्ञान में FCPS पास किया",
        training: "प्रशिक्षण",
        training_1: "2011 में वेणु आई हॉस्पिटल एंड इंस्टीट्यूट, नई दिल्ली, भारत में ग्लूकोमा पर फेलोशिप",
        training_2: "ग्लूकोमा पर फेलोशिप अल शिफा ट्रस्ट आई हॉस्पिटल एंड इंस्टीट्यूट, रावलपिंडी, पाकिस्तान 2010",
        training_3: "2012 में सेंटर फॉर साइट नई दिल्ली, भारत से ग्लूकोमा इमेजिंग पर पोस्ट ग्रेजुएट ट्रेनिंग।",
        membership: "सदस्यता",
        membership_1: "बांग्लादेश ग्लूकोमा सोसाइटी (BGS) के पूर्व सेक्रेटरी जनरल और ट्रेज़रर।",
        membership_2: "बांग्लादेश ऑप्थैल्मोलॉजिकल सोसाइटी (OSB) के पूर्व वाइस प्रेसिडेंट और जॉइंट सेक्रेटरी।",
        membership_3: "बांग्लादेश एकेडमी ऑफ ऑप्थैल्मोलॉजी (BAO) के पूर्व वाइस प्रेसिडेंट।",
        membership_4: "बांग्लादेश कम्युनिटी ऑप्थैल्मोलॉजिकल सोसाइटी (BCOS) के फाउंडर मेंबर।",
        membership_5: "संस्थापक सदस्य, बांग्लादेश सोसायटी ऑफ कैटरेक्ट एंड रिफ्रैक्टिव सर्जन (BSCRS)",
        membership_6: "अंतर्राष्ट्रीय आजीवन सदस्य, अखिल भारतीय नेत्र रोग सोसायटी (AIOS), भारत।",
        if: "अगर आप यूट्यूब पर वीडियो देखना चाहते हैं तो लोगो पर क्लिक करें",
        video_lang: "प्रो. डॉ. इफ़्तेख़ार मोहम्मद मुनीर की वीडियो गैलरी",
    },
    urdu: {
        // background slide
        home: "گھر",
        about:"میرے بارے میں",
        service: "خدمات",
        video: "ویڈیوز",
        gallery: "گیلری",
        contact:"رابطہ کریں۔",
        hello: "السلام علیکم! میں ہوں",
        name: "پروفیسر ڈاکٹر افتخار محمد منیر",
        role: "میں ایک",
        appointment: "اپائنٹمنٹ لیں",
        original: "ڈاکٹر افتخار محمد منیر، ایک پرجوش اور پرجوش گلوکوما کے ماہر اور بنگلہ دیش آئی ہسپتال، مالی باغ برانچ کے فاکو سرجن ہیں۔ وہ نیشنل انسٹی ٹیوٹ آف آپتھلمولوجی (NIO) میں گلوکوما کے پروفیسر کے طور پر کام کر رہے تھے جو ڈھاکہ، بنگلہ دیش میں پبلک سیکٹر میں 250 بستروں پر مشتمل آنکھوں کا سب اسپیشلٹی پر مبنی سب سے بڑا ہسپتال ہے۔ وہ اس بات کو یقینی بنانے کے لیے جدید ترین تکنیکوں اور آلات کا استعمال کرتا ہے کہ وہ دیکھ بھال کے اعلیٰ ترین معیارات لاتا ہے۔ وہ بنگلہ دیش کے معروف موتیابند اور گلوکوما سرجن میں سے ایک ہیں۔",
        para: "ڈاکٹر افتخار محمد منیر تحقیق میں بھی سرگرم ہیں اور مقامی اور غیر ملکی جرائد میں 30 سے ​​زائد مقالے شائع کر چکے ہیں۔ وہ اندرون و بیرون ملک آنکھوں کی مختلف کانفرنسوں میں باقاعدگی سے شرکت کرتا/ پیش کرتا ہے۔ <br> ڈاکٹر افتخار محمد منیر کو 2013 میں آپتھلمولوجیکل سوسائٹی آف بنگلہ دیش (OSB) کی طرف سے گلوکوما پر ان کے کاموں کا اعتراف پروفیسر مبارک علی ایوارڈ ملا۔",
        read_more:"مزید پڑھیں",
        // about image
        con: "کنسلٹنٹ گلوکوما اور فیکو ماہر",
        about_me: "ڈاکٹر افتخار محمد منیر، ایک پرجوش اور پرجوش گلوکوما کے ماہر اور بنگلہ دیش آئی ہسپتال، مالی باغ برانچ کے فاکو سرجن ہیں۔ وہ نیشنل انسٹی ٹیوٹ آف آپتھلمولوجی (NIO) میں گلوکوما کے پروفیسر کے طور پر کام کر رہے تھے جو ڈھاکہ، بنگلہ دیش میں پبلک سیکٹر میں 250 بستروں پر مشتمل آنکھوں کا سب اسپیشلٹی پر مبنی سب سے بڑا ہسپتال ہے۔ وہ اس بات کو یقینی بنانے کے لیے جدید ترین تکنیکوں اور آلات کا استعمال کرتا ہے کہ وہ دیکھ بھال کے اعلیٰ ترین معیارات لاتا ہے۔ وہ بنگلہ دیش کے معروف موتیابند اور گلوکوما سرجن میں سے ایک ہیں۔ ملک میں 2000 سے phacoemulsification کر رہے ہیں اور بہترین نتائج کے ساتھ اعلیٰ حجم کی Phaco سرجریز کر چکے ہیں۔ وہ بنگلہ دیش میں گلوکوما سرجری - ایم ایم سی اور اولوجن، احمد گلوکوما والو اور دیگر جی ڈی ڈی امپلانٹس کے ساتھ ٹریبیکولیکٹومی کا علمبردار ہے۔ وہ لیزر گلوکوما سرجری-LPI، SLT بھی کرتا ہے۔",
        // services
        ser_h: "میری خدمات",
        gla_ser: "گلوکوما سروسز",
        gla_ser_1: "فاکو سرجری",
        // photo gallery
        photo_gallery: "فوٹو گیلری",
        // education
        education: "تعلیمی قابلیت",
        edu: "ایم بی بی ایس سلہٹ ایم اے جی عثمانی میڈیکل کالج سے 1988 میں کیا۔",
        edu_1: "بی سی پی ایس سے امراض چشم میں ایف سی پی ایس",
        edu_2: "2011 میں وینو آئی ہسپتال اور انسٹی ٹیوٹ، نئی دہلی، بھارت میں گلوکوما پر فیلوشپ",
        edu_3: "گلوکوما پر فیلوشپ الشفاء ٹرسٹ آئی ہسپتال اینڈ انسٹی ٹیوٹ، راولپنڈی، پاکستان 2010 میں",
        // video
        video_h: "ویڈیو گیلری",
        video_1: "موتیا کی سرجری کی قیمت کیا ہے؟",
        video_2: "اگر آپ اپنی آنکھوں میں آئی فلٹر رکھیں تو مستقبل میں کیا مسائل ہو سکتے ہیں؟",
        video_3: "موتیا کے آپریشن کے لیے کون سا لینس بہترین ہے؟",
        video_4: "بنگلہ دیش آئی ہسپتال ملی باغ میں گلوکوما اور گلوکوما پروفائل مریض کی تشخیص",
        video_5: "موتیابند کیا ہے؟",
        video_6: "اگر موتیا بند رکھا جائے تو مستقبل میں کیا مسائل پیدا ہوسکتے ہیں؟",
        video_7: "موتیا کی سرجری سے پہلے کیا کرنا چاہیے؟",
        video_8: "ذیابیطس کے مریضوں میں سرجری کی پیچیدگیاں",
        video_9: "اگر آپ کو موتیا بند ہے تو کیسے سمجھیں؟",
        more_video: "مزید ویڈیو",
        // location
        location: "میرا مقام",
        // about me section
        paragraph_1: "ایک پرجوش اور پرجوش گلوکوما اسپیشلسٹ اور بنگلہ دیش آئی ہسپتال، مالی باغ برانچ کے فاکو سرجن ہیں۔ وہ نیشنل انسٹی ٹیوٹ آف آپتھلمولوجی (NIO) میں گلوکوما کے پروفیسر کے طور پر کام کر رہے تھے جو ڈھاکہ، بنگلہ دیش میں پبلک سیکٹر میں 250 بستروں پر مشتمل آنکھوں کا سب اسپیشلٹی پر مبنی سب سے بڑا ہسپتال ہے۔ وہ اس بات کو یقینی بنانے کے لیے جدید ترین تکنیکوں اور آلات کا استعمال کرتا ہے کہ وہ دیکھ بھال کے اعلیٰ ترین معیارات لاتا ہے۔ وہ بنگلہ دیش کے معروف موتیابند اور گلوکوما سرجن میں سے ایک ہیں۔ ملک میں 2000 سے phacoemulsification کر رہے ہیں اور بہترین نتائج کے ساتھ اعلیٰ حجم کی Phaco سرجریز کر چکے ہیں۔ وہ بنگلہ دیش میں گلوکوما سرجری - ایم ایم سی اور اولوجن، احمد گلوکوما والو اور دیگر جی ڈی ڈی امپلانٹس کے ساتھ ٹریبیکولیکٹومی کا علمبردار ہے۔ وہ لیزر گلوکوما سرجری-LPI، SLT بھی کرتا ہے۔",
        paragraph_2: "تحقیق میں بھی سرگرم ہیں اور مقامی اور غیر ملکی جرائد میں 30 سے ​​زائد مقالے شائع کیے ہیں۔ وہ اندرون اور بیرون ملک آنکھوں کی مختلف کانفرنسوں میں باقاعدگی سے شرکت کرتا/پیش کرتا ہے۔",
        receive: "موصول",
        name_2: "پروفیسر مبارک علی ایوارڈ",
        paragraph_3: "2013 میں آپتھلمولوجیکل سوسائٹی آف بنگلہ دیش (OSB) کے ذریعہ گلوکوما پر ان کے کاموں کے اعتراف کے طور پر۔",
        name_3: "پروفیسر سید الرحمن ایوارڈ",
        paragraph_4: "2018 میں بنگلہ دیشی کمیونٹی آپتھلمولوجیکل سوسائٹی (BCOS) کی طرف سے آپتھلمولوجی میں ان کے کاموں کے اعتراف کے طور پر۔",
        paragraph_5: "2024 میں ایشیا پیسیفک اکیڈمی آف آپتھلمولوجی (APAO) سے بنگلہ دیش میں ان کی خدمات کے لیے ممتاز سروس ایوارڈ ملا۔",
        education_1: "تعلیم",
        education_1_text: "1988 میں سلہٹ ایم اے جی عثمانی میڈیکل کالج سے ایم بی بی ایس پاس کیا۔",
        education_2_text: "بی سی پی ایس سے آپتھلمولوجی میں ایف سی پی ایس پاس کیا۔",
        training: "تربیت",
        training_1: "2011 میں وینو آئی ہسپتال اور انسٹی ٹیوٹ، نئی دہلی، بھارت میں گلوکوما پر فیلوشپ",
        training_2: "گلوکوما پر فیلوشپ الشفاء ٹرسٹ آئی ہسپتال اینڈ انسٹی ٹیوٹ، راولپنڈی، پاکستان 2010 میں",
        training_3: "سنٹر فار سائیٹ نئی دہلی، انڈیا سے 2012 میں گلوکوما امیجنگ پر پوسٹ گریجویٹ ٹریننگ۔",
        membership: "رکنیت",
        membership_1: "بنگلہ دیش گلوکوما سوسائٹی (BGS) کے سابق سیکرٹری جنرل اور خزانچی۔",
        membership_2: "سابق نائب صدر اور جوائنٹ سکریٹری آف اوپتھلمولوجیکل سوسائٹی آف بنگلہ دیش (OSB)",
        membership_3: "بنگلہ دیش اکیڈمی آف آپتھلمولوجی (BAO) کے سابق نائب صدر۔",
        membership_4: "بانی ممبر، بنگلہ دیش کمیونٹی آپتھلمولوجیکل سوسائٹی (BCOS)۔",
        membership_5: "بانی ممبر، بنگلہ دیش سوسائٹی آف کیٹریکٹ اینڈ ریفریکٹیو سرجن (BSCRS)",
        membership_6: "انٹرنیشنل لائف ممبر، آل انڈیا آپتھلمولوجیکل سوسائٹی (AIOS)، انڈیا۔",
        if: "اگر آپ یوٹیوب پر ویڈیو دیکھنا چاہتے ہیں تو لوگو پر کلک کریں۔",
        video_lang: "پروفیسر ڈاکٹر افتخار محمد منیر کی ویڈیو گیلری",
    }
};
/* =====================================================
   LANGUAGE SWITCHER SECTION (ALREADY INDEPENDENT)
   ===================================================== */

function updateLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (languageData[lang] && languageData[lang][key]) {
            el.innerHTML = languageData[lang][key];
        }
    });
}

// dropdown language change listener
document.querySelector(".sdropdown").addEventListener("change", function () {
    const selectedLang = this.value;
    sessionStorage.setItem("selectedLang", selectedLang);
    updateLanguage(selectedLang);
});

// on page load, set saved language
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".sdropdown");
    const savedLang = sessionStorage.getItem("selectedLang");
    if (savedLang) {
        dropdown.value = savedLang;
        updateLanguage(savedLang);
    } else {
        dropdown.selectedIndex = 0;
    }
});