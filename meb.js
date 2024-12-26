const plans = [
    {
        name: "Flex Starter",
        duration: "1-Month Plan",
        price: 599,
        benefits: "Perfect for beginners or those looking to get a feel for the gym before committing long-term."
    },
    {
        name: "Strength Builder",
        duration: "3-Month Plan",
        price: 1299,
        benefits: "Build strength, gain muscle, or lose fat with a focused 3-month approach."
    },
    {
        name: "Power Surge",
        duration: "6-Month Plan",
        price: 2099,
        benefits: "Long-term results with enhanced workouts and recovery strategies."
    },
    {
        name: "Peak Performance",
        duration: "1-Year Plan",
        price: 5555,
        benefits: "Ultimate fitness transformation over a year."
    }
];

let currentIndex = 0;

// DOM Elements
const membershipCard = document.getElementById("membershipCard");
const planName = document.getElementById("planName");
const planDuration = document.getElementById("planDuration");
const planPrice = document.getElementById("planPrice");

const detailsModal = document.getElementById("detailsModal");
const modalPlanName = document.getElementById("modalPlanName");
const modalPlanBenefits = document.getElementById("modalPlanBenefits");

const qrModal = document.getElementById("qrModal");
const totalAmount = document.getElementById("totalAmount");

// Update Card Content
function updateCard(index) {
    const plan = plans[index];
    planName.textContent = plan.name;
    planDuration.textContent = plan.duration;
    planPrice.textContent = `RS ${plan.price}`;
}

// Navigate Plans
document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + plans.length) % plans.length;
    updateCard(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % plans.length;
    updateCard(currentIndex);
});

// Show Details Modal
document.getElementById("viewDetailsBtn").addEventListener("click", () => {
    const plan = plans[currentIndex];
    modalPlanName.textContent = plan.name;
    modalPlanBenefits.textContent = plan.benefits;
    detailsModal.style.display = "block";
});

// Close Modals
document.getElementById("closeDetailsModal").addEventListener("click", () => {
    detailsModal.style.display = "none";
});

document.getElementById("closeQrModal").addEventListener("click", () => {
    qrModal.style.display = "none";
});

// Show QR Code Modal
document.getElementById("payBtn").addEventListener("click", () => {
    const plan = plans[currentIndex];
    const trainerCost = parseInt(
        document.querySelector('input[name="trainer"]:checked').value
    );
    const total = plan.price + trainerCost;

    totalAmount.textContent = total;
    detailsModal.style.display = "none";
    qrModal.style.display = "block";
});

// Initialize
updateCard(currentIndex);
