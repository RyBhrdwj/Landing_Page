const showEnquiry = () => {

    const enquiryForm = document.querySelector('.enquiry-form-container');
    
    enquiryForm.style.display = 'flex';
    enquiryForm.style.opacity = 1;
};

const formReset = () => {
    const form = document.querySelector('.enquiry-form');
    form.reset();
}

const closeEnquiry = () => {

    const enquiryForm = document.querySelector('.enquiry-form-container');

    enquiryForm.style.opacity = 0;
    setTimeout(() => {
        enquiryForm.style.display = 'none';
        formReset();
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    
    const enquireElements = document.querySelectorAll('.enquire');

    enquireElements.forEach((enquireElement) => {
        enquireElement.addEventListener('click', showEnquiry);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const sectionHeadings = document.querySelectorAll('.section-heading');
    const sectionImages = document.querySelectorAll('.img');
    const sectionDescription = document.querySelectorAll('.desc');

    const observer = new IntersectionObserver((entries) => {
        
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    },
    { 
        threshold: 0.3
    });

    sectionHeadings.forEach((heading) => {
        observer.observe(heading);
    });

    sectionImages.forEach((image) => {
        observer.observe(image);
    });

    sectionDescription.forEach((description) => {
        observer.observe(description);
    });
});