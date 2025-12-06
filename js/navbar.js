(function() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return;
    
    const wikiRoot = placeholder.getAttribute('data-wiki-root') || '';
    const siteRoot = placeholder.getAttribute('data-site-root') || '../';
    
    fetch(wikiRoot + 'components/navbar.html')
        .then(response => response.text())
        .then(html => {
            html = html.replace(/\{\{SITEROOT\}\}/g, siteRoot);
            placeholder.outerHTML = html;
        })
        .catch(err => console.error('Failed to load navbar:', err));
})();
