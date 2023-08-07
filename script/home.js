window.onload = function loadPage() {
  // declares
  const menuButton = document.querySelector('.nav-button');
  let toggleOpenClose = false;
  const speakers = [
    {
      photo: './images/speaker1.jpg',
      name: 'Adam Sattler',
      title: 'Social Professor and well Known as Human Right Activist.',
      desc: 'Speaks about Human rights violations and dictatorship in MENA region.',
    },
    {
      photo: './images/speaker2.jpg',
      name: 'Lee Yong',
      title: 'Dentist & Human Right Activist.',
      desc: 'Speaks about Human rights violations and dictatorship in MENA, west Asia and the Arab region.',
    },
    {
      photo: './images/speaker3.jpg',
      name: 'Simon Fathy',
      title: 'Social Professor and well Known as Human Right Activist.',
      desc: 'Speaks about Human rights violations and dictatorship in MENA and the Arab region.',
    },
    {
      photo: './images/speaker4.jpg',
      name: 'Aida Nageeb',
      title: 'Dentist & Human Right Activist.',
      desc: 'Speaks about Human rights violations and dictatorship in MENA, west Asia and the Arab region.',
    },
    {
      photo: './images/speaker5.jpg',
      name: 'Lee Yong',
      title: 'Social Professor and well Known as Human Right Activist.',
      desc: 'Speaks about Human rights violations and dictatorship in MENA and the Arab region.',
    },
    {
      photo: './images/speaker6.jpg',
      name: 'Lee Yong',
      title: 'Dentist & Human Right Activist.',
      desc: 'Speaks about Human rights violations and dictatorship in MENA, west Asia and the Arab region.',
    },
  ];

  // functions
  function toggleOpenCloseMenu() {
    switch (toggleOpenClose) {
      case false:
        toggleOpenClose = true;
        document.querySelector('.nav-menu').style.display = 'flex';
        document.querySelector('.nav-menu').style.opacity = '1';
        document.querySelector('.navbar').style.width = '100%';
        document.querySelector('.navbar').style.background = '#f5f5f5';
        document.querySelector('.navbar').style.height = '100%';
        document.querySelector('.nav-logo img').style.width = '70%';
        document.querySelector('.nav-icon').src = 'images/mnu-close.svg';
        break;
      case true:
        toggleOpenClose = false;
        document.querySelector('.navbar').style.height = '50px';
        document.querySelector('.navbar').style.width = '50px';
        document.querySelector('.navbar').style.background = 'transparent';
        document.querySelector('.nav-menu').style.display = 'none';
        document.querySelector('.nav-icon').src = 'images/menu-icon.png';
        break;
      default:
    }
  }

  function loadSpeakers() {
    let speakerHTML = `
    <h3>Featured Speakers</h3>
    <hr />
    `;

    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      for (let i = 0; i < 2; i += 1) {
        speakerHTML += `
          <div>
          <div><img src="${speakers[i].photo}" alt="Adam Sattler"></div>
          <ul>
          <li><h3>${speakers[i].name}</h3></li>
          <li><h6>${speakers[i].title}</h6></li>
          <li><p>${speakers[i].desc}</p></li>
          </ul>
          </div>
          `;
      }
    } else {
      for (let i = 0; i < speakers.length; i += 1) {
        speakerHTML += `
        <div>
        <div><img src="${speakers[i].photo}" alt="Adam Sattler"></div>
        <ul>
        <li><h3>${speakers[i].name}</h3></li>
        <li><h6>${speakers[i].title}</h6></li>
        <li><p>${speakers[i].desc}</p></li>
        </ul>
        </div>
        `;
      }
    }
    speakerHTML += '<button>MORE <img src="./images/down-arrow.jpg" /></button>';
    document.querySelector('.speakers').innerHTML = speakerHTML;
  }

  window.addEventListener('resize', loadSpeakers);

  // calls
  loadSpeakers();

  // listeners
  menuButton.addEventListener('click', toggleOpenCloseMenu);
};