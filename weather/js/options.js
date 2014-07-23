var OPTIONS = (function() {
    var city = localStorage.city || 'paris';
    var country = localStorage.country || 'france';

    return {
        init: function() {

            document.getElementById('city').value = city;

            document.getElementById('country').value = country;

            document.getElementById('save').onclick = function() {
                localStorage.city = document.getElementById('city').value;
                localStorage.country = document.getElementById('country').value;
                alert('Saving succeed: ' + localStorage.city + ', ' + localStorage.country);
            }
        }
    };
})();

OPTIONS.init();
