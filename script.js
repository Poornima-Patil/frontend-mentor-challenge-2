function displayFeatures() {
    let featuresMenu = document.getElementById("features-menu");
    let featuresArrowIcon = document.getElementById("features-arrow");
    featuresMenu.classList.toggle("hidden");
    featuresArrowIcon.classList.toggle("rotate-180");
}

function displayCompanyMenu() {
    let companyMenu = document.getElementById("company-menu");
    let companyMenuArrow = document.getElementById("company-arrow");
    companyMenu.classList.toggle("hidden");
    companyMenuArrow.classList.toggle("rotate-180");
}

function changeIcon() {
    let menuBtn = document.getElementById("dropdownMenuBtn");
    menuBtn.classList.toggle("hidden");
    let closeBtn = document.getElementById("dropdownCloseBtn");
    closeBtn.classList.toggle("hidden");
    let menuList = document.getElementById("menuList");
    menuList.classList.toggle("hidden");
}

function displayFeaturesMb() {
    let featuresMenu = document.getElementById("features-menu-mb");
    let featuresArrowIcon = document.getElementById("features-arrow-mb");
    featuresMenu.classList.toggle("hidden");
    featuresArrowIcon.classList.toggle("rotate-180");
}

function displayCompanyMenuMb() {
    let companyMenu = document.getElementById("company-menu-mb");
    let companyMenuArrow = document.getElementById("company-arrow-mb");
    companyMenu.classList.toggle("hidden");
    companyMenuArrow.classList.toggle("rotate-180");
}