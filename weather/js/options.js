var city = localStorage.city || 'paris';
document.getElementById('city').value = city;
document.getElementById('save').onclick = function() {
    localStorage.city = document.getElementById('city').value;
    alert('Save successful');
}
