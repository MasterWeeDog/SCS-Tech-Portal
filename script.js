document.addEventListener('DOMContentLoaded', function() {
    const issueSelector = document.getElementById('issueSelector');
    issueSelector.addEventListener('change', function() {
        displayIssueImage(this.value);
    });

    document.getElementById('resetButton').addEventListener('click', resetForm);
});

function displayIssueImage(issue) {
    const stepsContainer = document.getElementById('stepDisplay');
    const data = troubleshootingData.find(item => item.issue === issue);
    
    stepsContainer.innerHTML = data ? `<img src="${data.imagePath}" alt="${issue}" style="max-width: 100%; height: auto;">` : "<p>Please select an issue to see the troubleshooting steps.</p>";
}

function resetForm() {
    document.getElementById('issueSelector').value = "";
    document.getElementById('stepDisplay').innerHTML = "";
}


// Copyright 2024  Leon W. T. Penington