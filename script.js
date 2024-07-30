  document.addEventListener('DOMContentLoaded', function () {

	var accordion = new handorgel(document.querySelector('.handorgel'), {
	  multiSelectable: true, // Kann geändert werden, je nach gewünschtem Verhalten
	  collapsible: true
	});
  
	function closeAllPanels() {
	  var openButtons = document.querySelectorAll('.handorgel__header--open button[aria-expanded="true"]');
	  openButtons.forEach(button => {
		button.setAttribute('aria-expanded', 'false');
		button.parentElement.classList.remove('handorgel__header--open', 'handorgel__header--opened');
		var contentId = button.getAttribute('aria-controls');
		var content = document.getElementById(contentId);
		if (content) {
		  content.classList.remove('handorgel__content--open', 'handorgel__content--opened');
		  content.style.height = '0';
		}
	  });
	}
  
	function openPanelById(panelId) {
	  closeAllPanels(); // Alle geöffneten Paneele schließen
  
	  var button = document.querySelector(`button[aria-controls="${panelId}"]`);
	  if (button) {
		button.setAttribute('aria-expanded', 'true');
		button.parentElement.classList.add('handorgel__header--open', 'handorgel__header--opened');
		var content = document.getElementById(panelId);
		if (content) {
		  content.classList.add('handorgel__content--open', 'handorgel__content--opened');
		  content.style.height = 'auto';
		  button.scrollIntoView({ behavior: 'smooth' });
		}
	  }
	}
  
	var hash = window.location.hash.substring(1);
	if (hash) {
	  openPanelById(hash);
	}
  
	window.addEventListener('hashchange', function() {
	  var hash = window.location.hash.substring(1);
	  if (hash) {
		openPanelById(hash);
	  }
	});
  });
