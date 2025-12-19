let currentCategory = 'characters';
let allData = [];
let displayedCount = 0;
const itemsPerLoad = 8;

document.addEventListener('DOMContentLoaded', () => {
    loadCategory('characters');
    showSlides(slideIndex);
    
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn)
    {
        loadMoreBtn.addEventListener('click', loadMore);
    }
});

let slideIndex = 1;
function moveCarousel(n)
{
    showSlides(slideIndex += n);
}

function currentSlide(n)
{
    showSlides(slideIndex = n + 1);
}

function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName('carousel-item');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    if (slides.length > 0) 
    {
        slides[slideIndex-1].style.display = 'block';
    }
    if (dots.length > 0) 
    {
        dots[slideIndex-1].className += ' active';
    }
}

async function loadCategory(category)
{
    currentCategory = category;
    displayedCount = 0;
    allData = [];

    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        const text = item.textContent.toLowerCase();
        if ((category === 'videogames' && text.includes('videojuegos')) ||
            (category === 'characters' && text.includes('personajes')) ||
            (category === 'items' && text.includes('items')))
        {
            item.classList.add('active');
        }
    });

    const titleMap = 
    {
        'characters': 'Personajes',
        'items': 'Items',
        'videogames': 'Videojuegos'
    };

    const titleElement = document.getElementById('section-title');
    if (titleElement)
    {
        titleElement.innerText = titleMap[category];
    }

    try
    {
        const response = await fetch('data/' + category + '.json');
        const data = await response.json();
        allData = data[category]; 
        
        const grid = document.getElementById('grid-container');
        if (grid) 
        {
            grid.innerHTML = ''; 
        }
        
        loadMore();
    }
    catch (error)
    {
        console.error('Error loading data:', error);
    }
}

function loadMore()
{
    const grid = document.getElementById('grid-container');
    if (!grid) return;

    const nextItems = allData.slice(displayedCount, displayedCount + itemsPerLoad);
    
    nextItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let imgSrc = '';
        if (Array.isArray(item.images))
        {
            imgSrc = item.images[0];
        }
        else if (item.image)
        {
            imgSrc = item.image;
        }
        
        card.innerHTML = `
            <img src="${imgSrc}" alt="${item.name}">
            <div class="card-footer">
                <span>${item.name}</span>
                <span class="view-details" onclick="openModal(${item.id})">&#128065;</span> 
            </div>
        `;
        grid.appendChild(card);
    });

    displayedCount += nextItems.length;

    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn)
    {
        if (displayedCount >= allData.length)
        {
            loadMoreBtn.style.display = 'none';
        }
        else 
        {
            loadMoreBtn.style.display = 'inline-block';
        }
    }
}

function openModal(id) {
    const item = allData.find(i => i.id === id);
    if (!item) return;

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let imgSrc = '';
    if (Array.isArray(item.images))
    {
        imgSrc = item.images[0];
    }
    else if (item.image)
    {
        imgSrc = item.image;
    }

    let detailsHtml = `
        <h2>${item.name}</h2>
        <img src="${imgSrc}" class="modal-img" alt="${item.name}">
        <p><strong>Descripción:</strong> ${item.description}</p>
    `;

    if (currentCategory === 'characters')
    {
        if (item.skills) detailsHtml += `<p><strong>Habilidades:</strong> ${item.skills}</p>`;
        if (item.first_apparition) detailsHtml += `<p><strong>Primera Aparición:</strong> ${item.first_apparition}</p>`;
        if (item.created_by) detailsHtml += `<p><strong>Creado por:</strong> ${item.created_by}</p>`;
    } 
    else if (currentCategory === 'items')
    {
        if (item.effect) detailsHtml += `<p><strong>Efecto:</strong> ${item.effect}</p>`;
    }
    else if (currentCategory === 'videogames')
    {
        if (item.year) detailsHtml += `<p><strong>Año:</strong> ${item.year}</p>`;
        if (item.platform) detailsHtml += `<p><strong>Plataforma:</strong> ${item.platform}</p>`;
    }

    modalBody.innerHTML = detailsHtml;
    modal.style.display = 'block';
}

function closeModal()
{
    const modal = document.getElementById('modal');
    if (modal)
    {
        modal.style.display = 'none';
    }
}

window.onclick = function(event)
{
    const modal = document.getElementById('modal');
    if (event.target == modal)
    {
        modal.style.display = 'none';
    }
}