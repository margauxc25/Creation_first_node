let b = document.body;

let newheader = document.createElement('header');
b.prepend(newheader);

var els = document.createElement('h1');
var contenu = document.createTextNode('Bonjour');
els.appendChild(contenu);
newheader.appendChild(els)

let newp = document.createElement('p')
newheader.prepend(newp, 'Je suis un paragraphe')