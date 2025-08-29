const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});




const aboutElements = document.querySelectorAll('.about-text h2, .about-text p, .highlights li, .about-image img');

function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  aboutElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);





const serviceCards = document.querySelectorAll('.service-card');
const serviceIcons = document.querySelectorAll('.service-icon');
const serviceTitle = document.querySelector('.services h2');

function animateServices() {
  const triggerBottom = window.innerHeight * 0.9;

  if(serviceTitle.getBoundingClientRect().top < triggerBottom) {
    serviceTitle.style.opacity = '1';
    serviceTitle.style.transform = 'translateY(0)';
  }

  serviceCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      setTimeout(() => {
        serviceIcons[index].style.opacity = '1';
        serviceIcons[index].style.transform = 'translateY(0)';
      }, index * 200); // stagger icons 0.2s apart
    }
  });
}

window.addEventListener('scroll', animateServices);
window.addEventListener('load', animateServices);





const benefitCards = document.querySelectorAll('.benefit-card');
const benefitIcons = document.querySelectorAll('.benefit-icon');
const benefitTitles = document.querySelectorAll('.benefit-card h3');
const benefitTexts = document.querySelectorAll('.benefit-card p');
const whyTitle = document.querySelector('.why-choose-us h2');

function animateBenefits() {
  const triggerBottom = window.innerHeight * 0.9;

  if(whyTitle.getBoundingClientRect().top < triggerBottom) {
    whyTitle.style.opacity = '1';
    whyTitle.style.transform = 'translateY(0)';
  }

  benefitCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';

      setTimeout(() => {
        benefitIcons[index].style.opacity = '1';
        benefitIcons[index].style.transform = 'translateY(0)';
      }, 100);

      setTimeout(() => {
        benefitTitles[index].style.opacity = '1';
        benefitTitles[index].style.transform = 'translateY(0)';
      }, 200);

      setTimeout(() => {
        benefitTexts[index].style.opacity = '1';
        benefitTexts[index].style.transform = 'translateY(0)';
      }, 300);
    }
  });
}

window.addEventListener('scroll', animateBenefits);
window.addEventListener('load', animateBenefits);





const testimonialCards = document.querySelectorAll('.testimonial-card');
const profileImgs = document.querySelectorAll('.profile-img');
const quoteTexts = document.querySelectorAll('.quote');
const nameRoles = document.querySelectorAll('.name-role');
const testimonialsTitle = document.querySelector('.testimonials h2');

function animateTestimonials() {
  const triggerBottom = window.innerHeight * 0.9;

  if(testimonialsTitle.getBoundingClientRect().top < triggerBottom) {
    testimonialsTitle.style.opacity = '1';
    testimonialsTitle.style.transform = 'translateY(0)';
  }

  testimonialCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';

      setTimeout(() => {
        profileImgs[index].style.opacity = '1';
        profileImgs[index].style.transform = 'translateY(0)';
      }, 100);

      setTimeout(() => {
        quoteTexts[index].style.opacity = '1';
        quoteTexts[index].style.transform = 'translateY(0)';
      }, 200);

      setTimeout(() => {
        nameRoles[index].style.opacity = '1';
        nameRoles[index].style.transform = 'translateY(0)';
      }, 300);
    }
  });
}

window.addEventListener('scroll', animateTestimonials);
window.addEventListener('load', animateTestimonials);

const contactSection = document.querySelector('.contact');
const contactTitle = document.querySelector('.contact h2');
const contactFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
const agencyItems = document.querySelectorAll('.agency-info p');

function animateContact() {
  const triggerBottom = window.innerHeight * 0.9;

  if(contactTitle.getBoundingClientRect().top < triggerBottom) {
    contactTitle.style.opacity = '1';
    contactTitle.style.transform = 'translateY(0)';
  }

  contactFields.forEach((field, index) => {
    if(field.getBoundingClientRect().top < triggerBottom) {
      setTimeout(() => {
        field.style.opacity = '1';
        field.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });

  agencyItems.forEach((item, index) => {
    if(item.getBoundingClientRect().top < triggerBottom) {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 150);
    }
  });
}

window.addEventListener('scroll', animateContact);
window.addEventListener('load', animateContact);




const footer = document.querySelector('.footer');

function animateFooter() {
  const triggerBottom = window.innerHeight * 0.9;
  if(footer.getBoundingClientRect().top < triggerBottom) {
    footer.style.opacity = '1';
    footer.style.transform = 'translateY(0)';
  }
}

window.addEventListener('scroll', animateFooter);
window.addEventListener('load', animateFooter);