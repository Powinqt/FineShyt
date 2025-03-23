document.addEventListener("DOMContentLoaded", () => {
    function createFloatingElement(type) {
        const element = document.createElement("span");
        element.className = type;
        element.innerHTML = type === "heart" ? "❤️" : "💋";

        // Position the element randomly on the X-axis
        element.style.left = Math.random() * 100 + "vw";
        // Randomize the animation duration for variety
        element.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        // Add the element to the document body
        document.body.appendChild(element);
        
        // Remove the element after 5 seconds
        setTimeout(() => {
            element.remove();
        }, 5000);
    }

    function startAnimation() {
        // Create the first heart or kiss immediately without delay
        createFloatingElement(Math.random() > 0.5 ? "heart" : "kiss");

        // Continue creating hearts and kisses every 300ms
        setInterval(() => {
            createFloatingElement(Math.random() > 0.5 ? "heart" : "kiss");
        }, 300);
    }

    window.showWelcome = function () {
        // Hide the button when it's clicked
        document.querySelector(".button").style.display = "none";
        document.getElementById("welcomeMessage").style.display = "block";
        
        // Start the animation immediately
        startAnimation();
    };
});
