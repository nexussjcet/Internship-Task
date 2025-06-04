const canvasElement = document.getElementById('globe');
const ctx = canvasElement.getContext('2d');
const heroContentArea = document.getElementById('hero-content-area');
const glassEffect = document.getElementById('glass-hover-effect');
const scrollContainer = document.getElementById('scroll-container');
const sphereElement = document.getElementById('sphere');
const glassOverlayElement = document.getElementById('glass-overlay');
const mainNavbarElement = document.getElementById('main-navbar');
const wordBottom = document.querySelector('#main-title .word-bottom');
const taglineElement = document.querySelector('.tagline');
const scrollTrack = document.getElementById('scroll-track');
const registerButton = document.querySelector('.register-button');
const subtitleElement = document.querySelector('.subtitle');

const secondPage = document.getElementById('second-page');
const thirdPage = document.getElementById('third-page');
const fourthPage = document.getElementById('fourth-page');
const fifthPage = document.getElementById('fifth-page');
const pages = [secondPage, thirdPage, fourthPage, fifthPage];

const GLOBE_ROTATION_SPEED = 0.002;
const GLOBE_RADIUS_MULTIPLIER = 0.9;
const LATITUDE_LINES = 15;
const LONGITUDE_LINES = 15;
const LINE_SEGMENTS = 100;

const FONT_SIZE_FINAL_RATIO = 0.20;
const H1_TRANSITION_END_SCROLL_VH = 0.4;
const H1_FADE_OUT_SCROLL_VH = 0.2;
const SPHERE_TRANSITION_END_SCROLL_VH = 0.8;


const GLASS_OVERLAY_MAX_BLUR_PX = 4;
const GLASS_OVERLAY_BG_FINAL_ALPHA = 0.01;

const NAVBAR_MAX_BLUR_PX = 10;

const PAGE_SPACING_VH = 0.25;

let globeRadius = 0;
let globeRotationOffset = 0;
let globeAnimationStarted = false;
let ticking = false;


function setCanvasDimensions() {
    if (sphereElement && sphereElement.offsetWidth > 0 && sphereElement.offsetHeight > 0) {
        canvasElement.width = sphereElement.offsetWidth;
        canvasElement.height = sphereElement.offsetHeight;
        globeRadius = (Math.min(canvasElement.width, canvasElement.height) / 2) * GLOBE_RADIUS_MULTIPLIER;
        if (!globeAnimationStarted) {
            globeAnimationStarted = true;
            animateGlobe();
        }
        handleScroll();
    } else {
        setTimeout(setCanvasDimensions, 100);
    }
}

function drawSphere(offset) {
    if (canvasElement.width === 0 || canvasElement.height === 0 || globeRadius === 0) return;
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx.save();
    ctx.translate(canvasElement.width / 2, canvasElement.height / 2);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 7;

    for (let i = 0; i <= LATITUDE_LINES; i++) {
        let theta = Math.PI * i / LATITUDE_LINES - Math.PI / 2;
        let y = globeRadius * Math.sin(theta);
        let ry = globeRadius * Math.cos(theta);
        ctx.beginPath();
        for (let j = 0; j <= LINE_SEGMENTS; j++) {
            let phi = 2 * Math.PI * j / LINE_SEGMENTS + offset;
            let x = ry * Math.cos(phi);
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    for (let i = 0; i < LONGITUDE_LINES; i++) {
        let phi = 2 * Math.PI * i / LONGITUDE_LINES + offset;
        ctx.beginPath();
        for (let j = 0; j <= LINE_SEGMENTS; j++) {
            let theta = Math.PI * j / LINE_SEGMENTS - Math.PI / 2;
            let x = globeRadius * Math.cos(theta) * Math.cos(phi);
            let y = globeRadius * Math.sin(theta);
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    ctx.restore();
}

function animateGlobe() {
    globeRotationOffset += GLOBE_ROTATION_SPEED;
    drawSphere(globeRotationOffset);
    requestAnimationFrame(animateGlobe);
}

scrollContainer.addEventListener('mousemove', (e) => {
    const scrollY = scrollContainer.scrollTop;
    if (scrollY < 50) {
        glassEffect.style.left = `${e.clientX}px`;
        glassEffect.style.top = `${e.clientY}px`;
    }
});
scrollContainer.addEventListener('mouseenter', () => {
    const scrollY = scrollContainer.scrollTop;
    if (scrollY < 50) {
         glassEffect.style.opacity = '1';
    }
});
scrollContainer.addEventListener('mouseleave', () => {
    glassEffect.style.opacity = '0';
});


function updateScrollMetrics() {
    const viewportHeight = window.innerHeight;
    const pageSpacingPixels = viewportHeight * PAGE_SPACING_VH;
    let currentTopOffset = viewportHeight;

    pages.forEach((page, index) => {
        page.style.top = `${currentTopOffset}px`;
        const currentPageEffectiveHeight = page.offsetHeight;
        currentTopOffset += currentPageEffectiveHeight;

        if (index < pages.length - 1) {
            currentTopOffset += pageSpacingPixels;
        }
    });
    const finalBuffer = 0;
    scrollTrack.style.height = `${currentTopOffset + finalBuffer}px`;
}

function updateAnimations() {
    const scrollY = scrollContainer.scrollTop;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    updateScrollMetrics();

    if (scrollY < 50 && glassEffect.matches(':hover')) {

    } else if (scrollY >= 50) {
         glassEffect.style.opacity = '0';
    }


    const h1TransitionEndScrollPx = viewportHeight * H1_TRANSITION_END_SCROLL_VH;
    const h1FadeOutScrollPx = viewportHeight * H1_FADE_OUT_SCROLL_VH;
    const sphereTransitionEndScrollPx = viewportHeight * SPHERE_TRANSITION_END_SCROLL_VH;

    const h1Progress = Math.min(1, scrollY / h1TransitionEndScrollPx);
    const currentScaleHero = 1 - (1 - FONT_SIZE_FINAL_RATIO) * h1Progress;

    const navbarHeight = mainNavbarElement.offsetHeight;
    const finalHeroTopPx = 40;
    const initialHeroTopPx = viewportHeight / 2;
    const currentHeroTopPx = initialHeroTopPx - (initialHeroTopPx - finalHeroTopPx) * h1Progress;
    heroContentArea.style.top = `${currentHeroTopPx}px`;

    heroContentArea.style.left = '50%';
    heroContentArea.style.transform = `translate(-50%, -50%) scale(${currentScaleHero})`;


    const wordBottomProgress = Math.min(1, scrollY / h1FadeOutScrollPx);
    wordBottom.style.opacity = Math.max(0, 1 - wordBottomProgress);
    wordBottom.style.transform = `translateY(${wordBottomProgress * 50}px)`;
    taglineElement.style.opacity = Math.max(0, 1 - wordBottomProgress);
    taglineElement.style.transform = `translateY(${wordBottomProgress * 20}px)`;
    registerButton.style.opacity = Math.max(0, 1 - wordBottomProgress);
    registerButton.style.transform = `translateY(${wordBottomProgress * 20}px)`;

    if (subtitleElement) {
        subtitleElement.style.opacity = Math.max(0, 1 - wordBottomProgress);
        subtitleElement.style.transform = `translateY(${wordBottomProgress * 20}px)`;
    }

    const sphereProgress = Math.min(1, scrollY / sphereTransitionEndScrollPx);
    const initialSphereCenterX = viewportWidth / 2;
    const initialSphereCenterY = viewportHeight;
    const targetSphereCenterX = 0;
    const targetSphereCenterY = viewportHeight / 2;
    sphereElement.style.left = `${initialSphereCenterX - (initialSphereCenterX - targetSphereCenterX) * sphereProgress}px`;
    sphereElement.style.top = `${initialSphereCenterY - (initialSphereCenterY - targetSphereCenterY) * sphereProgress}px`;
    sphereElement.style.transform = `translate(-50%, -50%)`;

    const glassOverlayBlur = h1Progress * GLASS_OVERLAY_MAX_BLUR_PX;
    const glassOverlayBgAlpha = h1Progress * GLASS_OVERLAY_BG_FINAL_ALPHA;
    glassOverlayElement.style.backdropFilter = `blur(${glassOverlayBlur}px) brightness(100%) saturate(100%)`;
    glassOverlayElement.style.webkitBackdropFilter = `blur(${glassOverlayBlur}px) brightness(100%) saturate(100%)`;
    glassOverlayElement.style.backgroundColor = `rgba(255, 255, 255, ${glassOverlayBgAlpha})`;

    const navbarBlur = h1Progress * NAVBAR_MAX_BLUR_PX;
    const navbarBgAlpha = h1Progress * GLASS_OVERLAY_BG_FINAL_ALPHA;
    mainNavbarElement.style.backgroundColor = `rgba(255, 0, 0, ${navbarBgAlpha})`;
    mainNavbarElement.style.backdropFilter = `blur(${navbarBlur}px) brightness(100%) saturate(100%)`;
    mainNavbarElement.style.webkitBackdropFilter = `blur(${navbarBlur}px) brightness(100%) saturate(100%)`;

    pages.forEach(page => {
        let heading;
        if (page.id === 'second-page' || page.id === 'third-page') {
            heading = page.querySelector('.text-container h2');
        } else if (page.id === 'fourth-page') {
            heading = page.querySelector('.faq-title-wrapper h2');
        } else if (page.id === 'fifth-page') {
            heading = page.querySelector('.footer-details') || page.querySelector('.footer-sjcet-text');
        }


        if (!heading) {
            if (page.offsetTop < scrollY + viewportHeight && page.offsetTop + page.offsetHeight > scrollY) {
                page.style.opacity = '1'; page.style.transform = 'translateY(0px)'; page.style.pointerEvents = 'auto';
            } else {
                page.style.opacity = '0'; page.style.pointerEvents = 'none';
            }
            return;
        }

        const pageRect = page.getBoundingClientRect();
        const headingRect = heading.getBoundingClientRect();

        const relativeOffsetTopInPage = headingRect.top - pageRect.top;
        const headingAbsoluteTopInScrollTrack = page.offsetTop + relativeOffsetTopInPage;
        const headingPositionInViewport = headingAbsoluteTopInScrollTrack - scrollY;

        const targetAppearancePointInViewport = viewportHeight * 0.75;
        const preTargetScrollDistance = viewportHeight * 0.25;
        const animationStart_HeadingPosInViewport = targetAppearancePointInViewport + preTargetScrollDistance;
        const animationEnd_HeadingPosInViewport = targetAppearancePointInViewport;
        const currentAnimationWindow = animationStart_HeadingPosInViewport - animationEnd_HeadingPosInViewport;

        let progress = 0;
        if (headingPositionInViewport <= animationStart_HeadingPosInViewport && headingPositionInViewport >= animationEnd_HeadingPosInViewport) {
            if (currentAnimationWindow > 0) {
               progress = (animationStart_HeadingPosInViewport - headingPositionInViewport) / currentAnimationWindow;
            } else { progress = 1; }
        } else if (headingPositionInViewport < animationEnd_HeadingPosInViewport) {
            progress = 1;
        } else { progress = 0; }
        progress = Math.max(0, Math.min(1, progress));

        const currentOpacity = progress;
        const initialTransformY = 30;
        const currentTransformY = (1 - progress) * initialTransformY;

        page.style.opacity = currentOpacity;
        page.style.transform = `translateY(${currentTransformY}px)`;
        page.style.pointerEvents = currentOpacity > 0.8 ? 'auto' : 'none';

        page.classList.toggle('is-animating', progress > 0 && progress < 1);
    });
    ticking = false;
}

function handleScroll() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

window.addEventListener('load', () => {
    setCanvasDimensions();
    setTimeout(() => { heroContentArea.classList.add('is-loaded'); }, 100);
    updateScrollMetrics();
    handleScroll();
});
window.addEventListener('resize', () => {
    setCanvasDimensions();
    updateScrollMetrics();
    handleScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-question-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');

            setTimeout(() => {
                updateScrollMetrics();
                handleScroll();
            }, 400);
        });
    });

    const menuButton = document.getElementById('menu-button');
    const fullScreenMenu = document.getElementById('full-screen-menu');
    const menuOptions = document.querySelectorAll('#full-screen-menu .menu-option');
    const hacksphereTitleLink = document.getElementById('hacksphere-title-link');

    if (menuButton && fullScreenMenu) {
        menuButton.addEventListener('click', () => {
            const isActive = fullScreenMenu.classList.toggle('menu-active');
            menuButton.classList.toggle('menu-active-button', isActive);
            scrollContainer.style.overflowY = isActive ? 'hidden' : 'scroll';
        });
    }

    menuOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                let scrollTargetY = targetElement.offsetTop - mainNavbarElement.offsetHeight;
                scrollTargetY = Math.max(0, scrollTargetY);

                scrollContainer.scrollTo({
                    top: scrollTargetY,
                    behavior: 'smooth'
                });
            }

            if (fullScreenMenu) fullScreenMenu.classList.remove('menu-active');
            if (menuButton) menuButton.classList.remove('menu-active-button');
            scrollContainer.style.overflowY = 'scroll';
        });
    });

    if (hacksphereTitleLink) {
        hacksphereTitleLink.addEventListener('click', (e) => {
            e.preventDefault();
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            if (fullScreenMenu && fullScreenMenu.classList.contains('menu-active')) {
                fullScreenMenu.classList.remove('menu-active');
                if (menuButton) menuButton.classList.remove('menu-active-button');
                scrollContainer.style.overflowY = 'scroll';
            }
        });
    }
});