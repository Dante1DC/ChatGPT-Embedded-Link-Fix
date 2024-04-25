function addMissingHrefs() {
    const links = document.querySelectorAll('a:not([href])');
  
    links.forEach(link => {
      const linkText = link.textContent.trim();
      if (isValidUrl(linkText)) {
        link.href = linkText;
      }
    });
  }
  
  function isValidUrl(str) {
    try {
      new URL(str);
    } catch (_) {
      return false;
    }
    return true;
  }
  
  addMissingHrefs();