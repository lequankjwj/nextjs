function openMenu() {
  const classMenu = document.getElementById('navbar-default');
  const openNav = document.getElementById('openNav');
  const closeNav = document.getElementById('closeNav');
  const body = document.getElementsByTagName("BODY")[0];
  if (classMenu?.classList.contains('hidden')) {
    classMenu?.classList.remove('hidden')
    openNav?.classList.add('hidden')
    body?.classList.add('no-scroll')
    closeNav?.classList.remove('hidden')
  }
  else {
    classMenu?.classList.add('hidden')
    openNav?.classList.remove('hidden')
    closeNav?.classList.add('hidden')
    body?.classList.remove('no-scroll')
  }
}

function openInfomations() {
  if (localStorage.getItem('scrollInfo'))
    localStorage.removeItem('scrollInfo')
  window.open('/infomation', "_self");
}

const Header = () => (
  <nav className="bg-white border-gray-200 fixed-header">
    <div className="flex flex-wrap justify-between items-center container-fluid header-group-menu">
      <a href="/" className="flex items-center">
        <img className="py-3 w-90 logo-header" src="/assets/images/logoToma.png" />
      </a>
      <button onClick={openMenu} data-collapse-toggle="navbar-default" type="button" aria-controls="navbar-default" aria-expanded="false" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <img id="openNav" className="py-3 w-90 logo-header" src="/assets/images/menu-nav.png" />
        <img id="closeNav" className="hidden py-3 w-90 logo-header" src="/assets/images/menu-nav-close.png" />
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="ul-menu flex flex-col bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/event">Event</a>
          </li>
          <li onClick={openInfomations}>
            <span>Infomation</span>
          </li>
          <li>
            <a href="/profile" >Profile</a>
          </li>
          <li>
            <a href="/discography" >Discography</a>
          </li>
          <li>
            <a href="/media" >Media</a>
          </li>
          <li>
            <a href="/goods" >Goods</a>
          </li>
          <li>
            <a href="/tomabox" >TOMABOX</a>
          </li>
          <li className="menu-blog mt-10">
            <a href="/tomabox" >Toma’s BLOG
            </a>
          </li>
          <li className="menu-blog">
            <a href="/tomabox" >Pieni Pisara
            </a>
          </li>
          <li className="menu-blog mt-10">
            <div className='button-group'>
              <button>TOMA BOX ログイン</button>
            </div>
          </li>
          <li className="menu-blog mt-5">
            <div className="social">
              <div className="social-item">
                <img src="/assets/images/twiter-lg-bl.png" alt="" />
              </div>
              <div className="social-item">
                <img src="/assets/images/yt-lg-bl.png" alt="" />
              </div>
              <div className="social-item">
                <img src="/assets/images/fb-lg-bl.png" alt="" />
              </div>
              <div className="social-item">
                <img src="/assets/images/inta-lg-bl.png" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export { Header };
