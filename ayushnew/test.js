// JavaScript for handling modal display and form submissions
document.addEventListener('DOMContentLoaded', function() {
    const modals = {
        applicant: document.getElementById('applicant-login'),
        coApplicant: document.getElementById('co-applicant-login')
    };

    const buttons = {
        applicant: document.querySelector('a[href="#applicant-login"]'),
        coApplicant: document.querySelector('a[href="#co-applicant-login"]')
    };

    const closeBtns = document.querySelectorAll('.close');

    // Function to open modal
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Open modals on button click
    buttons.applicant.addEventListener('click', () => openModal(modals.applicant));
    buttons.coApplicant.addEventListener('click', () => openModal(modals.coApplicant));

    // Close modals on close button click
    closeBtns.forEach(btn => btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        closeModal(modal);
    }));

    // Close modals when clicking outside of them
    window.addEventListener('click', (event) => {
        if (event.target === modals.applicant) {
            closeModal(modals.applicant);
        }
        if (event.target === modals.coApplicant) {
            closeModal(modals.coApplicant);
        }
    });

    // Handle form submissions
    document.getElementById('applicantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Applicant Login submitted');
        // Add form submission logic here
    });

    document.getElementById('coApplicantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Co-Applicant Login submitted');
        // Add form submission logic here
    });

    // Populate gallery section dynamically
    const galleryImages = [
        'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg',
        'image7.jpeg', 'image8.jpeg', 'image9.jpeg', 'image10.jpeg'
    ];

    const galleryContainer = document.getElementById('gallery-loop');

    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `path/to/images/${image}`;
        imgElement.alt = `Gallery Image ${image}`;
        galleryContainer.appendChild(imgElement);
    });
});
