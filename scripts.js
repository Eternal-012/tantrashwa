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
        1: "https://forms.gle/example1",
        2: "https://forms.gle/example2",
        3: "https://forms.gle/example3",
        4: "https://forms.gle/example4",
        5: "https://forms.gle/example5",
        6: "https://forms.gle/example6",
        7: "https://forms.gle/example7",
        8: "https://forms.gle/example8",
        9: "https://forms.gle/example9",
        10: "https://forms.gle/example10",
        11: "https://forms.gle/example11",
        12: "https://forms.gle/example12",
        13: "https://forms.gle/example13",
        14: "https://forms.gle/example14",
        15: "https://forms.gle/example15",
        16: "https://forms.gle/example16",
        17: "https://forms.gle/example17",
        18: "https://forms.gle/example18",
        19: "https://forms.gle/example19",
        20: "https://forms.gle/example20",
        21: "https://forms.gle/example21"
    };

    const url = links[buttonNumber];
    if (url) {
        window.open(url, "_blank");
    } else {
        alert("Registration link not available yet.");
    }
} 