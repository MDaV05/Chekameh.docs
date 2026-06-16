/* ============================================================
   Expert Technique: Using Material's Native Observable Hook
   ============================================================ */
if (window.document$) {
  window.document$.subscribe(function() {
    document.body.addEventListener("keydown", function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        var toggle = document.getElementById("__search");
        if (toggle) {
          // Toggle the state so Ctrl+K can both open AND close it
          toggle.checked = !toggle.checked; 
          
          toggle.dispatchEvent(new Event("change"));
          requestAnimationFrame(() => {
            if (toggle.checked) {
              document.querySelector('.md-search__input')?.focus();
            }
          });
        }
      }
    });
  });
}