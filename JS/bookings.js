document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var datepickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepickers, {
        format: 'yyyy-mm-dd',
        onClose: function() {
            this.el.value = this.date.toISOString().split('T')[0];
        }
    });

    

    var timepickers = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timepickers, {
        onCloseEnd: function() {
            this.el.value = this.time;
        }
    });

    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // Search functionality
    var searchInput = document.getElementById('searchInput');
    var searchResults = document.getElementById('search-results');
    var searchIcon = document.getElementById('search-icon'); // Assuming you have a search icon with this ID

    // Function to perform search
    function performSearch() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        var results = [];

        if (searchTerm.length > 0) {
            // Loop through all sections to find matches
            document.querySelectorAll('.booking-section .card-title').forEach(function(cardTitle) {
                var sectionTitle = cardTitle.textContent.trim().toLowerCase();
                var sectionId = cardTitle.closest('.booking-card').getAttribute('data-section-id');

                if (sectionTitle.includes(searchTerm)) {
                    results.push(`<div class="result-item" onclick="navigateToSection('${sectionId}', '${sectionTitle}')">${sectionTitle}</div>`);
                }
            });

            // Display results if found, otherwise hide the container
            if (results.length > 0) {
                searchResults.style.display = 'block';
                searchResults.innerHTML = results.join('');
            } else {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
            }
        } else {
            // If search input is empty, hide results container
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
        }
    }

    

    // Function to handle navigation to section
    window.navigateToSection = function(sectionId, sectionTitle) {
        searchInput.value = sectionTitle; // Fill search input with selected section title
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
        var section = document.getElementById(sectionId);
        if (section) {
            var offsetTop = section.offsetTop;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    // Event listener for input in search bar
    searchInput.addEventListener('input', performSearch);

    // Event listener for Enter key press in search bar
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
            var firstResult = searchResults.querySelector('.result-item');
            if (firstResult) {
                firstResult.click();
            }
        }
    });

    // Event listener for search icon click
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            performSearch();
            var firstResult = searchResults.querySelector('.result-item');
            if (firstResult) {
                firstResult.click();
            }
        });
    }

    // Close search results on click outside
    document.addEventListener('click', function(e) {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});
