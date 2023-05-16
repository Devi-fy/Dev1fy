// Send message to Discord webhook
function sendToDiscord(message) {
    fetch("https://discord.com/api/webhooks/1108072923618607235/1iJXs-mGDZ_Er81qZbt_Nhwm7kqXoftPLhTkvvut7ntumrB884hcTPUD51wvKZmUIiko", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: message })
    })
    .then(response => {
      if (response.ok) {
        console.log("Message sent to Discord!");
      } else {
        console.log("Failed to send message to Discord.");
      }
    })
    .catch(error => {
      console.log("Error:", error);
    });
  }
  
  // Example usage
  const button = document.querySelector(".fancy-button");
  button.addEventListener("click", function() {
    sendToDiscord("Button clicked!");
  });
  