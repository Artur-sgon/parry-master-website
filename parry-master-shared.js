document.addEventListener("DOMContentLoaded", function() {
    
    // 1. INJECT HEADER
    const header = document.getElementById('shared-header');
    if (header) {
        header.innerHTML = `
            <h1 class="text-white gold-glow">Parry-Master.net</h1>
            <i class="text-white" style="background: rgba(0,0,0,0.5); padding: 2px 10px;">
                -- The Portal to the World of Parry Master --
            </i>
        `;
    }

    // 2. INJECT SIDEBAR MENU
    const sidebar = document.getElementById('shared-sidebar');
    if (sidebar) {
        sidebar.innerHTML = `
            <b class="text-white">MAIN MENU</b>
            <hr>
            <div class="sidebar-menu-container">
                <a href="parry-master.html" class="nav-button">Home</a>
                <a href="parry-master-devlog.html" class="nav-button">Devlog</a>
                <a href="parry-master-mechanics.html" class="nav-button">Game Mechanics</a>
                <a href="parry-master-structure.html" class="nav-button">Game Structure (PT/BR)</a>
                <a href="parry-master-text-database.html" class="nav-button">In-Game Text Database</a>
                <a href="parry-master-lore.html" class="nav-button">Parry Master Lore</a>
                <a href="parry-master-characters.html" class="nav-button">Characters</a>
                <a href="parry-master-ost.html" class="nav-button">Soundtrack</a>
                <a href="parry-master-fx.html" class="nav-button">FX table</a>
            </div>
        `;
    }

    // 3. INJECT FOOTER
    const footer = document.getElementById('shared-footer');
    if (footer) {
        footer.innerHTML = `
            SITE UPDATED: SATURDAY 10, JANUARY 2026 | <a href="#">CONTACT</a>
            <br>
            <img src="https://web.archive.org/web/20091027005003im_/http://geocities.com/TimesSquare/Labyrinth/8301/counter.gif" alt="Hit Counter" style="margin: 10px; filter: contrast(2) brightness(0.8);">
            <br>
            <b>YOU ARE VISITOR NUMBER #84,291</b>
        `;
    }
});