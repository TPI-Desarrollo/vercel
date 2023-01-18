"use strict";

const buttons = [
   { container: { id: 'containerBack' }, icon: { id: 'iconBack' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } },
   { container: { id: 'containerMenu' }, icon: { id: 'iconMenu' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } },
   { container: { id: 'containerBiblio' }, icon: { id: 'iconBiblio' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } },
   { container: { id: 'containerNext' }, icon: { id: 'iconNext' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } },
   { container: { id: 'containerCredits' }, icon: { id: 'iconCredits' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } },
   { container: { id: 'containerExit' }, icon: { id: 'iconExit' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } }
];

const hover = (container, icon, colorHover) => {
   container.addEventListener('mouseover', () => container.style.fill = colorHover);
   icon.addEventListener('mouseover', () => container.style.fill = colorHover);
}

const out = (element, colorOut) => {
   element.addEventListener('mouseleave', () => {
      for (const button of buttons) {
         button.container.element.style.fill = colorOut;
      }
   });
}

const animation = () => {
   const navbar = document.getElementById('ovaNavBar');
   const svg = navbar.contentDocument;

   for (const button of buttons) {
      button.container.element = svg.getElementById(button.container.id);
      button.icon.element = svg.getElementById(button.icon.id);
      hover(button.container.element, button.icon.element, button.fill.hover);
      out(button.container.element, button.fill.out)
   }
}

module.exports = animation;