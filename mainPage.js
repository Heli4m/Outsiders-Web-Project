function showTab(tabId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    const tabs = document.querySelectorAll('.tab, .tabActive');
    tabs.forEach(tab => {
        tab.className = 'tab'; 
    });

    if (event && event.currentTarget) {
        event.currentTarget.className = 'tabActive';
    }
}