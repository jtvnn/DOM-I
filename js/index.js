const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// #### Create selectors to point your data into elements

// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images. Use the IDs to update src path content
// #### Update the HTML with the JSON data

// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images
const nav = document.querySelectorAll('nav a')

nav[0].textContent = siteContent.nav['nav-item-1']
nav[1].textContent = siteContent.nav['nav-item-2']
nav[2].textContent = siteContent.nav['nav-item-3']
nav[3].textContent = siteContent.nav['nav-item-4']
nav[4].textContent = siteContent.nav['nav-item-5']
nav[5].textContent = siteContent.nav['nav-item-6']

const imageFirst = document.querySelector('#cta-img')
imageFirst.src = siteContent.cta['img-src']

const title = document.querySelector('.cta-text h1')
title.textContent = siteContent.cta['h1']

const button = document.querySelector('.cta-text button')
button.textContent = siteContent.cta['button']

// #### Add new content

// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser
const featuresTitle = document.querySelector('.top-content .text-content h4')
featuresTitle.textContent = siteContent['main-content']['features-h4']

const featuresPara = document.querySelector('.top-content .text-content p')
featuresPara.textContent = siteContent['main-content']['features-content']

const aboutTitle = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
aboutTitle.textContent = siteContent['main-content']['about-h4']

const aboutPara = document.querySelector('.top-content .text-content:nth-of-type(2) p')
aboutPara.textContent = siteContent['main-content']['about-content']

const secondImage = document.querySelector('.middle-img')
secondImage.src = siteContent['main-content']['middle-img-src']

const servicesTitle = document.querySelector('.bottom-content .text-content h4')
servicesTitle.textContent = siteContent['main-content']['services-h4']

const servicesPara = document.querySelector('.bottom-content .text-content p')
servicesPara.textContent = siteContent['main-content']['services-content']

const productTitle = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productTitle.textContent = siteContent['main-content']['product-h4']

const productPara = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productPara.textContent = siteContent['main-content']['product-content']

const visionTitle = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionTitle.textContent = siteContent['main-content']['vision-h4']

const visionPara = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionPara.textContent = siteContent['main-content']['vision-content']

const contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

const contactAddress = document.querySelector('.contact p')
contactAddress.textContent = siteContent['contact']['address']

const contactPhone = document.querySelector('.contact p:nth-of-type(2)')
contactPhone.textContent = siteContent['contact']['phone']

const contactEmail = document.querySelector('.contact p:nth-of-type(3)')
contactEmail.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

// * [ ] Change the color of the navigation text to be green.
const color = document.querySelectorAll('nav a')
color.forEach(item => {
  item.style.color = 'green'
})

// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
const link = document.querySelector('nav a')
const copyOfFirstLink = link.cloneNode(true)
const linkContainer = document.querySelector('nav')
linkContainer.appendChild(copyOfFirstLink)
copyOfFirstLink.textContent = 'Blog'

const link2 = document.querySelector('nav a')
const copyOfFirstLink2 = link2.cloneNode(true)
const linkContainer2 = document.querySelector('nav')
linkContainer2.prepend(copyOfFirstLink2)
copyOfFirstLink2.textContent = 'Socials'