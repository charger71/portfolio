function openTab(event, tabsId, tabId) {
    var i, tabcontent, tabbuttons;

    // Get all elements with class="tab-content" in the current tab set and hide them
    tabcontent = document.querySelectorAll(`#${tabsId} > .tab-content`);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tab-button" in the current tab set and remove the class "active"
    tabbuttons = document.querySelectorAll(`#${tabsId} > .tab-buttons > .tab-button`);
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "block";
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.className += " active";
}

function initializeTabs() {
    var tabContainers = document.querySelectorAll('.tabs');
    for (var i = 0; i < tabContainers.length; i++) {
        var firstButton = tabContainers[i].querySelector('.tab-button');
        if (firstButton) {
            firstButton.click();
        }
    }
}

// Initialize tabs when the page loads
document.addEventListener('DOMContentLoaded', initializeTabs);