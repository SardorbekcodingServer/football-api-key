document.getElementById('fetchData').addEventListener('click', () => {
    const apiKey = '5f4139c3a604b4bd32e74ad6c9e54d34'; 
    const url = 'https://v3.football.api-sports.io/fixtures?date=2024-12-26';

    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const matchesContainer = document.getElementById('matches');
        matchesContainer.innerHTML = '';

        data.response.forEach(match => {
            const matchElement = document.createElement('div');
            matchElement.className = 'match';
            matchElement.innerHTML = `
                <strong>${match.teams.home.name} vs ${match.teams.away.name}</strong>
                <p>Time: ${match.fixture.date}</p>
                <p>Venue: ${match.fixture.venue.name}</p>
            `;
            matchesContainer.appendChild(matchElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('matches').innerHTML = 'Failed to load matches. Please try again later.';
    });
    
});
