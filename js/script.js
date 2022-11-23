function addNav(){
    
    let divNav = document.getElementById('idnav');
    divNav.innerHTML = 
    `<nav class="navbar navbar-inverse sub-navbar navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#subenlaces">
                <span class="sr-only">Interruptor de Navegación</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Infotec</a>
        </div>
        <div class="collapse navbar-collapse" id="subenlaces">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Ejercicios</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                        aria-expanded="false">Cursos <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Java Script</a></li>
                        <li><a href="#">Spring Web</a></li>
                        <li><a href="#">HTML</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Java</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>`;
}
addNav();