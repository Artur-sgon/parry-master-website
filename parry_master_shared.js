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
            &raquo; <a href="parry_master.html">Home</a><br>
            &raquo; <a href="#">Development journal</a><br>
            &raquo; <a href="parry_master_mechanics.html">Game mechanics</a><br>
            &raquo; <a href="parry_master_structure.html">Game structure (PT/BR) *NEW!</a><br>
            &raquo; <a href="parry_master_text_database.html">In-Game Text Database *NEW!</a><br>
            &raquo; <a href="parry_master_lore.html">Parry Master Lore</a><br>
            &raquo; <a href="parry_master_characters.html">Characters</a><br>                    
            &raquo; <a href="parry_master_ost.html">Soundtrack *NEW!</a><br>
           
           
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