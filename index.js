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