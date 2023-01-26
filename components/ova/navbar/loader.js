let nav, progressBar, popupProgress;

const buttons = [
   { container: { id: 'containerBack' }, icon: { id: 'iconBack' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } },
   { container: { id: 'containerNext' }, icon: { id: 'iconNext' }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' } },
   { container: { id: 'containerMenu' }, icon: { id: 'iconMenu', hover: { id: 'iconMenuHover' } }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' }, popup: { id: 'popupNav' } },
   { container: { id: 'containerBiblio' }, icon: { id: 'iconBiblio', hover: { id: 'iconBiblioHover' } }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' }, popup: { id: 'popupBiblio' } },
   { container: { id: 'containerCredits' }, icon: { id: 'iconCredits', hover: { id: 'iconCreditsHover' } }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' }, popup: { id: 'popupCredits' } },
   { container: { id: 'containerExit' }, icon: { id: 'iconExit', hover: { id: 'iconExitHover' } }, fill: { hover: 'rgb(151, 98, 230)', out: 'rgb(93, 66, 146)' }, popup: { id: 'popupExit' } }
];

const hover = (coloredElements, uncoloredElements, icon, iconHover, colorHover, cursor, popup) => {
   for (const element of coloredElements) {
      if (element) {
         element.addEventListener('mouseover', () => {
            if (icon && iconHover) { icon.style.visibility = 'hidden'; iconHover.style.visibility = 'visible'; }
            if (popup) popup.style.visibility = 'visible';
            for (const element of coloredElements) if (element) element.style.fill = colorHover;
            element.style.cursor = cursor;
         });
      }
   }

   for (const element of uncoloredElements) {
      if (element) {
         element.addEventListener('mouseover', () => {
            if (icon && iconHover) { icon.style.visibility = 'hidden'; iconHover.style.visibility = 'visible'; }
            if (popup) popup.style.visibility = 'visible';
            for (const element of coloredElements) if (element) element.style.fill = colorHover;
            element.style.cursor = cursor;
         });
      }
   }
}

const out = (element, array) => {
   element.addEventListener('mouseleave', () => {
      for (const object of array) {
         for (const key in object) {
            if (object[key]) {
               if (object[key].element) {
                  if (key == 'popup') object[key].element.style.visibility = 'hidden';
                  if (key == 'icon') {
                     if (object[key].hover) {
                        object[key].element.style.visibility = 'visible';
                        object[key].hover.element.style.visibility = 'hidden';
                     }
                  }
                  else object[key].element.style.fill = object.fill.out;
               }
            }
         }
      }
   });
}

const back = () => {
   const [currentIndex, nextIndex, lastIndex, currentProgressIndex, numProgressSlides] = nav.slideshow(nav.indexes[1], nav.indexes[1] - 1);
   nav.setIndexes([currentIndex, nextIndex]);

   buttons[1].container.element.style.opacity = 1;

   if (currentIndex == 1) {
      buttons[0].container.element.style.opacity = 0.5;
      buttons[0].icon.element.style.opacity = 0.5;
      hover([buttons[0].container.element], [buttons[0].icon.element], null, null, buttons[0].fill.out, 'auto');
   }

   if (currentIndex == lastIndex) {
      buttons[1].container.element.style.opacity = 1;
      buttons[1].icon.element.style.opacity = 1;
      hover([buttons[1].container.element], [buttons[1].icon.element], null, null, buttons[1].fill.hover, 'pointer');
   }
}

const next = () => {
   const [currentIndex, nextIndex, lastIndex, currentProgressIndex, numProgressSlides] = nav.slideshow(nav.indexes[1], nav.indexes[1] + 1);
   nav.setIndexes([currentIndex, nextIndex]);

   if (currentIndex == 0) {
      buttons[0].container.element.style.opacity = 1;
      buttons[0].icon.element.style.opacity = 1;
      hover([buttons[0].container.element], [buttons[0].icon.element], null, null, buttons[0].fill.hover, 'pointer');
   }

   if (nextIndex == lastIndex) {
      buttons[1].container.element.style.opacity = 0.5;
      buttons[1].icon.element.style.opacity = 0.5;
      hover([buttons[1].container.element], [buttons[1].icon.element], null, null, buttons[1].fill.out, 'auto');
   }

   if (currentProgressIndex) {
      progress(nextIndex, currentProgressIndex, numProgressSlides);
   }
}

const menu = () => {
   menu.items[0].container.element.style.visibility = 'visible';
}

menu.items = [
   { container: { id: 'menu' }, bookmark: { id: 'bookmark' } },
   { container: { id: 'containerMenuItem1' }, text: { id: 'textMenuItem1' }, fill: { hover: 'rgb(151, 98, 230)', out: 'white' } },
   { container: { id: 'containerMenuItem2' }, text: { id: 'textMenuItem2' }, fill: { hover: 'rgb(151, 98, 230)', out: 'white' } },
   { container: { id: 'containerMenuItem3' }, text: { id: 'textMenuItem3' }, icon: { id: 'iconMenuItem3' }, fill: { hover: 'rgb(151, 98, 230)', out: 'white' } },
   { container: { id: 'containerMenuItem4' }, text: { id: 'textMenuItem4' }, fill: { hover: 'rgb(151, 98, 230)', out: 'white' }, isEnabled: false },
   { container: { id: 'containerMenuItem5' }, text: { id: 'textMenuItem5' }, icon: { id: 'iconMenuItem5' }, fill: { hover: 'rgb(151, 98, 230)', out: 'white' }, isEnabled: false },
   { container: { id: 'containerMenuItem6' }, text: { id: 'textMenuItem6' }, fill: { hover: 'rgb(151, 98, 230)', out: 'white' }, isEnabled: false },
]

let studyProgress = 0, currentStudyIndex = 0, x1 = 8.29, widthProgressBar = 333, withGlobeText = 46;
const progress = (nextIndex, currentProgressIndex, numProgressSlides) => {
   const progress = currentProgressIndex * 100 / numProgressSlides;

   if (progress > studyProgress) {
      studyProgress = progress;
      currentStudyIndex = nextIndex;
      progressBar.style.visibility = 'visible';
      popupProgress.style.visibility = 'visible';

      let stroke = 'rgb(9, 192, 3)';
      studyProgress = currentProgressIndex * 100 / numProgressSlides;
      if (studyProgress >= 0 && studyProgress <= 19) stroke = 'rgb(277, 6, 19)';
      else if (studyProgress >= 20 && studyProgress <= 39) stroke = 'rgb(234, 91, 12)';
      else if (studyProgress >= 40 && studyProgress <= 59) stroke = 'rgb(255, 192, 36)';
      else if (studyProgress >= 60 && studyProgress <= 79) stroke = 'rgb(54, 169, 255)';

      const progressText = popupProgress.querySelector('text tspan');
      progressText.innerHTML = `${Math.round(studyProgress)}%`;
      progressBar.style.stroke = stroke;
      popupProgress.setAttribute('transform', `translate(${studyProgress * widthProgressBar / 100 - withGlobeText + x1 - 4})`);
      progressBar.setAttribute('x2', `${studyProgress * widthProgressBar / 100 + x1}`);
   }
}

const getCurrentStudySlide = () => {
   const [currentIndex, nextIndex, lastIndex] = nav.slideshow(nav.indexes[1], currentStudyIndex);
   nav.setIndexes([currentIndex, nextIndex]);

   if (currentIndex == 0) {
      buttons[0].container.element.style.opacity = 1;
      buttons[0].icon.element.style.opacity = 1;
      hover([buttons[0].container.element], [buttons[0].icon.element], null, null, buttons[0].fill.hover, 'pointer');
   }

   if (nextIndex == lastIndex) {
      buttons[1].container.element.style.opacity = 0.5;
      buttons[1].icon.element.style.opacity = 0.5;
      hover([buttons[1].container.element], [buttons[1].icon.element], null, null, buttons[1].fill.out, 'auto');
   }
}

const loader = (props) => {
   nav = props;

   return () => {
      const navbar = document.getElementById('ovaNavBar');
      const svg = navbar.contentDocument;
      progressBar = svg.getElementById('progressBar');
      popupProgress = svg.getElementById('popupProgress');

      for (const button of buttons) {
         button.container.element = svg.getElementById(button.container.id);
         button.icon.element = svg.getElementById(button.icon.id);

         let iconHover, popup;

         if (button.icon.hover) {
            iconHover = svg.getElementById(button.icon.hover.id);
            button.icon.hover.element = iconHover;
         }

         if (button.popup) {
            popup = svg.getElementById(button.popup.id);
            button.popup.element = popup;
         }

         hover([button.container.element], [button.icon.element, iconHover], button.icon.element, iconHover, button.fill.hover, 'pointer', popup);
      }

      const coloredButtons = buttons.map(button => { return { container: button.container, popup: button.popup, icon: button.icon, fill: button.fill } });

      for (const button of coloredButtons)
         out(button.container.element, coloredButtons);

      let coloredMenuItems = menu.items.slice(1).map(item => { return { text: item.text, icon: item.icon, fill: item.fill } });

      for (const item of menu.items) {
         item.container.element = svg.getElementById(item.container.id);
         if (item.bookmark) item.bookmark.element = svg.getElementById(item.bookmark.id);
         if (item.icon) item.icon.element = svg.getElementById(item.icon.id).querySelector('path');

         if (item.text) {
            item.text.element = svg.getElementById(item.text.id).querySelector('text');
            let icon;
            if (item.icon) icon = item.icon.element

            if (item.isEnabled != false) hover([item.text.element, icon], [item.container.element], null, null, item.fill.hover, 'pointer');
            hover([item.text.element.querySelector('text')], [item.container.element], null, null, item.fill.hover);
         }
      }

      let i = 0;
      for (const item of coloredMenuItems) out(menu.items[++i].container.element, coloredMenuItems);
      hover([buttons[0].container.element], [buttons[0].icon.element], null, null, buttons[0].fill.out, 'auto');
      buttons[0].container.element.style.opacity = 0.5;
      buttons[0].icon.element.style.opacity = 0.5;

      navbar.contentDocument.addEventListener('click', (event) => {
         let id, element = event.target;

         while (element != null) {
            id = element.getAttribute('id');

            if (id == 'menu' || id == buttons[2].container.id || id == buttons[2].icon.id || id == buttons[2].icon.hover.id) { parent = true; break; }
            element = element.parentElement;
         }

         if (element == null) menu.items[0].container.element.style.visibility = 'hidden';
      });

      document.addEventListener('click', (event) => {
         if (!menu.items[0].container.element.contains(event.target))
            menu.items[0].container.element.style.visibility = 'hidden';
      });

      buttons[0].container.element.addEventListener('click', () => back());
      buttons[0].icon.element.addEventListener('click', () => back());
      buttons[1].container.element.addEventListener('click', () => next());
      buttons[1].icon.element.addEventListener('click', () => next());
      buttons[2].container.element.addEventListener('click', () => menu());
      buttons[2].icon.element.addEventListener('click', () => menu());
      buttons[2].icon.hover.element.addEventListener('click', () => menu());

      popupProgress.addEventListener('click', () => getCurrentStudySlide());
   }
}

export default loader;