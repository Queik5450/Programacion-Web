document.addEventListener('DOMContentLoaded', function () 
{
    var carouselEl = document.getElementById('heroCarousel');
    if (!carouselEl) return;

    var carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, 
        {
            ride: false
        });

    var prevBtn = carouselEl.querySelector('[data-bs-slide="prev"]');
    var nextBtn = carouselEl.querySelector('[data-bs-slide="next"]');

    if (prevBtn) 
    {
        prevBtn.addEventListener('click', function (e) 
        {
            e.preventDefault();
            carousel.prev();
        });
    }

  if (nextBtn) 
    {
        nextBtn.addEventListener('click', function (e) 
        {
            e.preventDefault();
            carousel.next();
        });
    }

    var videoEl = document.getElementById('heroVideo');
    var posters = ['media/slidePoster2.webp','media/slidePoster3.webp'];

    
        function setVisualForActive() 
        {
            if (!videoEl) return;
            var items = Array.from(carouselEl.querySelectorAll('.carousel-item'));
            var active = carouselEl.querySelector('.carousel-item.active');
            var idx = items.indexOf(active);
            if (idx === -1) idx = 0;

            if (idx === 0) 
                {
                var poster = posters[0];
                if (videoEl.getAttribute('poster') !== poster)
                {
                    videoEl.setAttribute('poster', poster);
                    try { videoEl.load(); } catch (err) { }
                }
                videoEl.style.display = '';
                items.forEach(function(it){
                    var h = it.querySelector('.hero-slide');
                    if (h) {
                        h.style.backgroundImage = '';
                        h.style.backgroundSize = '';
                        h.style.backgroundPosition = '';
                    }
                });
            } 
            else 
            {
                videoEl.style.display = 'none';
                items.forEach(function(it, i)
                {
                    var h = it.querySelector('.hero-slide');
                    if (!h) return;
                    if (i === idx) 
                    {
                        var url = posters[i] || posters[0];
                        h.style.backgroundImage = 'url("' + url + '")';
                        h.style.backgroundSize = 'cover';
                        h.style.backgroundPosition = 'center';
                    } 
                    else 
                    {
                        h.style.backgroundImage = '';
                    }
                });
            }
        }

        setVisualForActive();

        carouselEl.addEventListener('slid.bs.carousel', function () 
        {
            setVisualForActive();
        });
});
