document.addEventListener('DOMContentLoaded', function() {
    // Get all the subscription buttons and the modal
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');
    const modal = document.getElementById('membershipModal');
    const closeButton = document.querySelector('.close-btn');
    const paymentOptions = document.getElementById('paymentOptions');
    const planTitle = document.getElementById('planTitle');
    const planDescription = document.getElementById('planDescription');
    const planPrice = document.getElementById('planPrice');
    
    // Plan information (with bullet points as an array of benefits)
    const plans = {
        flexStarter: {
            title: "Flex Starter",
            description: [
                "Perfect for beginners or those looking to get a feel for the gym before committing long-term.",
                "Kickstart your fitness journey with this flexible plan.",
                
                "Nutrition guide included"
            ],
            price: "RS 599",
            personalTraining: "1 Month Personal Training - 1000",
            personalTraining: "3 Months Personal Training - RS 2500",
             personalTraining: "6 Months Personal Training - RS 4800",
              personalTraining: "1 Year Personal Training - RS 9000"
        },
        strengthBuilder: {
            title: "Strength Builder",
            description: [
                "Ideal for those ready to see significant progress in a short time.",
                "Build strength, gain muscle, or lose fat with a focused 3-month approach.",
                "3 Month plan",
                "Weekly workout monitoring",
                "Nutrition and supplement guides"
            ],
            price: "RS 1299",
            personalTraining: "1 Month Personal Training - 1000",
             personalTraining: "3 Months Personal Training - RS 2500",
              personalTraining: "6 Months Personal Training - RS 4800",
               personalTraining: "1 Year Personal Training - RS 9000"
        },
        powerSurge: {
            title: "Power Surge",
            description: [
                "For those who are committed to long-term results.",
                "This plan will take you to the next level in your fitness journey.",
                "6 Month plan",
                "Advanced performance monitoring",
                "Priority support from trainers"
            ],
            price: "RS 2099",
            personalTraining: "1 Month Personal Training - 1000",
             personalTraining: "3 Months Personal Training - RS 2500",
              personalTraining: "6 Months Personal Training - RS 4800",
               personalTraining: "1 Year Personal Training - RS 9000"
        },
        peakPerformance: {
            title: "Peak Performance",
            description: [
                "The ultimate fitness transformation plan.",
                "Comprehensive plan guiding you through every stage of your fitness goals.",
                "12 month plan",
                "Exclusive nutrition and recovery plans",
                "24/7 support"
            ],
            price: "RS 5555",
            personalTraining: "1 Month Personal Training - 1000",
             personalTraining: "3 Months Personal Training - RS 2500",
              personalTraining: "6 Months Personal Training - RS 4800",
               personalTraining: "1 Year Personal Training - RS 9000"
        }
    };

    // When a subscribe button is clicked, show the relevant plan information
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planKey = button.closest('.membership-card').dataset.plan;
            const planInfo = plans[planKey];

            // Set modal content
            planTitle.textContent = planInfo.title;
            planDescription.innerHTML = planInfo.description.map(item => `<li>${item}</li>`).join('');
            planPrice.textContent = `Price: ${planInfo.price}`;

            // Show the modal
            modal.style.display = 'block';
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        paymentOptions.style.display = 'none';  // Hide payment options when closing modal
    });

    // Handle the payment options visibility
    document.querySelectorAll('.subscribe-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Show the payment options
            paymentOptions.style.display = 'block';
        });
    });
});
