document.addEventListener('DOMContentLoaded', () => {
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');
    const modal = document.getElementById('membershipModal');
    const closeModalButton = document.querySelector('.close-btn');
    const planTitle = document.getElementById('planTitle');
    const planPrice = document.getElementById('planPrice');
    const payButton = document.getElementById('payButton');
    const qrCodeSection = document.getElementById('qrCodeSection');

    // Open modal on Subscribe button click
    subscribeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.membership-card');
            const plan = card.dataset.plan;
            const price = card.dataset.price;

            // Update modal content
            planTitle.textContent = `${plan.replace(/([A-Z])/g, ' $1').trim()} Plan`;
            planPrice.textContent = price;

            // Show modal
            modal.style.display = 'block';
            qrCodeSection.style.display = 'none'; // Hide QR code initially
        });
    });

    // Close modal
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Show QR code on Pay button click
    payButton.addEventListener('click', () => {
        qrCodeSection.style.display = 'block';
    });

    // Close modal when clicking outside modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
