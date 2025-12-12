const API_URL = 'https://hp-api.onrender.com/api/characters';
const DB_NAME = 'HP_DB';
const DB_VERSION = 2;
const STORE_NAME = 'characters';

let db;
let allCharacters = [];
let displayedCount = 0;
const ITEMS_PER_PAGE = 8;
const PLACEHOLDER_IMAGE = 'img/placeholder.svg';

const grid = document.getElementById('characters-grid');
const loadMoreBtn = document.getElementById('load-more');

document.addEventListener('DOMContentLoaded', () => 
{
    initDB();
    startCarousel();
});

function startCarousel()
{
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) return;

    let currentIndex = 0;
    
    setInterval(() => 
    {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 4000);
}

function initDB()
{
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => 
    {
        console.error("IndexedDB error:", event.target.error);
    };

    request.onupgradeneeded = (event) => 
    {
        db = event.target.result;
        if (db.objectStoreNames.contains(STORE_NAME))
        {
            db.deleteObjectStore(STORE_NAME);
        }
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    };

    request.onsuccess = (event) => 
    {
        db = event.target.result;
        loadData();
    };
}

function loadData()
{
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const countRequest = store.count();

    countRequest.onsuccess = () => 
    {
        if (countRequest.result > 0)
        {
            const getAllRequest = store.getAll();
            getAllRequest.onsuccess = () => 
            {
                allCharacters = getAllRequest.result;
                allCharacters.sort((a, b) => (a.originalIndex || 0) - (b.originalIndex || 0));
                renderNextBatch();
            };
        } 
        else
        {
            fetchFromAPI();
        }
    };
}

async function fetchFromAPI()
{
    try
    {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        
        data.forEach((char, index) => 
        {
            if (!char.id)
            {
                char.id = 'generated-' + index + '-' + Date.now();
            }
            char.originalIndex = index;
            store.put(char);
        });

        transaction.oncomplete = () => 
        {
            allCharacters = data;
            renderNextBatch();
        };
    }
    catch (error)
    {
        console.error("Error fetching API:", error);
        grid.innerHTML = '<p style="color: white; text-align: center;">Error loading characters.</p>';
    }
}

function renderNextBatch()
{
    const nextBatch = allCharacters.slice(displayedCount, displayedCount + ITEMS_PER_PAGE);
    
    if (nextBatch.length === 0)
    {
        loadMoreBtn.style.display = 'none';
        return;
    }

    nextBatch.forEach(char => 
    {
        const card = createCard(char);
        grid.appendChild(card);
    });

    displayedCount += nextBatch.length;

    if (displayedCount >= allCharacters.length)
    {
        loadMoreBtn.style.display = 'none';
    }
}

loadMoreBtn.addEventListener('click', renderNextBatch);

function createCard(char)
{
    const card = document.createElement('div');
    card.className = 'card';

    const imgUrl = char.image ? char.image : PLACEHOLDER_IMAGE;
    
    const isAlive = char.alive;
    const statusClass = isAlive ? 'alive' : 'dead';
    const statusText = isAlive ? 'Alive' : 'Dead';
    const species = char.species ? char.species : 'Unknown';

    card.innerHTML = `
        <div class="card-img-container">
            <img src="${imgUrl}" alt="${char.name}" class="card-img" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}';">
        </div>
        <div class="card-content">
            <div class="card-header">
                <h2>${char.name}</h2>
                <div class="status">
                    <span class="status-icon ${statusClass}"></span>
                    <span>${statusText} - ${species}</span>
                </div>
            </div>
            
            <div class="card-section">
                <span class="text-gray">Birthdate:</span>
                <span class="text-white">${char.dateOfBirth || 'Unknown'}</span>
            </div>
            
            <div class="card-section">
                <span class="text-gray">House:</span>
                <span class="text-white">${char.house || 'Unknown'}</span>
            </div>
        </div>
    `;

    return card;
}
