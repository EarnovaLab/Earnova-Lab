// Wallet connect karne ka function
async function connectWallet() {
    if (window.ethereum) {  // Check if user has MetaMask
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];  // User ka wallet address

            document.getElementById("wallet-address").textContent = userAddress;  // Display wallet address

            // Referral address ko auto-fill karna
            document.getElementById("referral").value = userAddress;

            // Show login section and hide signup section
            document.getElementById("signup-section").style.display = "none";
            document.getElementById("login-section").style.display = "block";

        } catch (error) {
            console.error("Error connecting to wallet: ", error);
        }
    } else {
        alert("Please install MetaMask or a Web3 wallet.");
    }
}

// Page load hone par wallet connect karna
window.onload = () => {
    connectWallet();
};

// Signup form submit karte waqt data save karna
document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const referral = document.getElementById("referral").value;

    // Google Sheets ya database mein data save karne ka code yahan likhna hoga
    console.log("Username:", username);
    console.log("Referral:", referral);

    alert("Signup successful! Now you can login.");
});
