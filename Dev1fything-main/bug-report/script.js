document.getElementById('bugReportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the bug title and description values
    var bugTitle = document.getElementById('bugTitle').value;
    var bugDescription = document.getElementById('bugDescription').value;
    
    // Prepare the bug report payload
    var payload = {
        content: '**Bug Report**\n\n' +
                 '**Title:** ' + bugTitle + '\n\n' +
                 '**Description:** ' + bugDescription
    };
    
    // Send the bug report to the webhook
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://discord.com/api/webhooks/1108072923618607235/1iJXs-mGDZ_Er81qZbt_Nhwm7kqXoftPLhTkvvut7ntumrB884hcTPUD51wvKZmUIiko', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
    
    // Clear the form fields
    document.getElementById('bugTitle').value = '';
    document.getElementById('bugDescription').value = '';
    
    // Provide visual feedback to the user
    alert('Bug report submitted successfully!');
});
