const showEnquiry = () => {

    const enquiryForm = document.querySelector('.enquiry-form-container');
    
    enquiryForm.style.display = 'flex';
    enquiryForm.style.opacity = 1;
};

const hideEnquiry = () => {

    const enquiryForm = document.querySelector('.enquiry-form-container');
    const form = document.querySelector('.enquiry-form');

    enquiryForm.style.opacity = 0;
    setTimeout(() => {
        enquiryForm.style.display = 'none';
        form.reset();
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    
    const enquireElements = document.querySelectorAll('.enquire');

    enquireElements.forEach((enquireElement) => {
        enquireElement.addEventListener('click', showEnquiry);
    });
});