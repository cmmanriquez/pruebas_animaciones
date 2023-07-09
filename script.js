window.addEventListener('scroll', function () {
  var scrollPoints = [
    { scroll: 0, bgColor: '#ffffff', textColor: '#000000' },
    { scroll: 600, bgColor: '#0a2a91', textColor: '#f7f5f0' },
    { scroll: 800, bgColor: '#003334', textColor: '#004567' },
    { scroll: 1000, bgColor: '#534536', textColor: '#346699' },
    { scroll: 1200, bgColor: '#FFFF00', textColor: '#000000' },
    { scroll: 1400, bgColor: '#FF00FF', textColor: '#000000' },
    { scroll: 1600, bgColor: '#00FFFF', textColor: '#000000' },
    { scroll: 1800, bgColor: '#FF0000', textColor: '#ffffff' }
    // Agrega más puntos de desplazamiento y colores según sea necesario
  ];

  var body = document.body;
  var navbar = document.querySelector('.navbar');
  var navLinks = document.querySelectorAll('.nav-link');

  var scrollTop = window.scrollY;
  var currentPoint;

  for (var i = 0; i < scrollPoints.length; i++) {
    if (scrollTop >= scrollPoints[i].scroll) {
      currentPoint = scrollPoints[i];
    } else {
      break;
    }
  }

  if (currentPoint) {
    body.style.backgroundColor = currentPoint.bgColor;
    body.style.color = currentPoint.textColor;
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = currentPoint.textColor;
    }
  } else {
    body.style.backgroundColor = 'transparent';
    body.style.color = '#000000';
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = '#000000';
    }
  }

  navbar.style.backgroundColor = 'transparent';
});
