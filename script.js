function filterJobs() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const locationFilter = document.getElementById('location-filter').value.toLowerCase();
    const industryFilter = document.getElementById('industry-filter').value.toLowerCase();
    const jobItems = document.querySelectorAll('.job-item');

    jobItems.forEach(function(item) {
        const title = item.querySelector('h2').innerText.toLowerCase();
        const location = item.querySelector('p:nth-child(2)').innerText.toLowerCase().replace("lokalizacja: ", "").trim();
        const industry = item.querySelector('p:nth-child(3)').innerText.toLowerCase().replace("branża: ", "").trim();

        console.log(`Title: ${title}, Location: "${location}", Industry: ${industry}`);
        console.log(`Filters - Search: ${searchInput}, Location: ${locationFilter}, Industry: ${industryFilter}`);

        const matchesSearch = title.includes(searchInput);
        const matchesLocation = locationFilter === "" || location.includes(locationFilter);
        const matchesIndustry = industryFilter === "" || industry.includes(industryFilter);

        console.log(`Matches - Search: ${matchesSearch}, Location: ${matchesLocation}, Industry: ${matchesIndustry}`);

        if (matchesSearch && matchesLocation && matchesIndustry) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function applyJob(jobTitle) {
    document.getElementById('job-title').innerText = jobTitle;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Aplikacja została wysłana!');
    closeModal();
});