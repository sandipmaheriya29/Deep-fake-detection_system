document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    
    // Show loader
    document.getElementById('loader').style.display = 'flex';

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `The video is classified as: ${data.result}`;
        // Hide loader
        document.getElementById('loader').style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
        // Hide loader
        document.getElementById('loader').style.display = 'none';
    });
});
