// Smooth scrolling to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to show certificate details when a certificate is clicked
function showCertificateDetails(certificateId) {
    // Remove 'selected' class from all certificates
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach(cert => cert.classList.remove('selected'));

    // Add 'selected' class to the clicked certificate
    const selectedCertificate = document.querySelector(`[onclick="showCertificateDetails('${certificateId}')"]`);
    selectedCertificate.classList.add('selected');

    // Hide all certificate details first
    const allDetails = document.querySelectorAll('.certificate-details');
    allDetails.forEach(detail => detail.style.display = 'none');

    // Show the details of the selected certificate
    const selectedDetails = document.getElementById(certificateId);
    selectedDetails.style.display = 'block';
}

// Function to hide certificate details when clicked outside
function hideCertificateDetails() {
    const certificates = document.querySelectorAll('.certificate');
    const details = document.querySelectorAll('.certificate-details');

    // Remove selected state from all certificates
    certificates.forEach(cert => cert.classList.remove('selected'));

    // Hide all certificate details
    details.forEach(detail => detail.style.display = 'none');
}

// Event listener to detect clicks outside the certificates
document.addEventListener('click', function(event) {
    // Check if the click is inside any of the certificates
    const clickedInside = event.target.closest('.certificate');

    // If the click is outside the certificates, hide the details
    if (!clickedInside) {
        hideCertificateDetails();
    }
});



