const showEnquiry = () => {

    const enquiryForm = document.querySelector('.enquiry-form-container');
    
    enquiryForm.style.display = 'flex';
    enquiryForm.style.opacity = 1;
};

const hideEnquiry = () => {

    const enquiryForm = document.querySelector('.enquiry-form-container');
    
    setTimeout(() => {
        enquiryForm.style.display = 'none';
    }, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    
    const enquireElements = document.querySelectorAll('.enquire');

    enquireElements.forEach((enquireElement) => {
        enquireElement.addEventListener('click', showEnquiry);
    });
});