document.addEventListener('DOMContentLoaded', () => {

    const buttonGrid = document.getElementById('buttonGrid');
    const totalButtons = 21;
    
    for (let i = 1; i <= totalButtons; i++) {
        const button = document.createElement('button');
        button.className = 'neon-btn';
        button.textContent = `Register ${i}`;
        button.addEventListener('click', () => openLink(i));
        buttonGrid.appendChild(button);
    }
});

function openLink(buttonNumber) {
    const links = {
        1: "#",
        2: "#",
        3: "#",
        4: "#",
        5: "#",
        6: "#", 
        7: "#",
        8: "#", 
        9: "#",
       10: "#", 
       11: "#",
       12: "#", 
       13: "#",
       14: "#",  
       15: "#",
       16: "#", 
       17: "#",
       18: "#",
       19: "#",
       20: "#",
       21: "#" 
    };

    const url = links[buttonNumber];
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("Registration link not available yet.");
    }
} 
