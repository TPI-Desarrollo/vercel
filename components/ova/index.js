import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "./navbar";
import LearningObjective from "./learningObjective";
import TestA from "./testA";
import ContentTable from "./contentTable";
import ContentSlide from "./contentSlide";

const names = {}
let slides, numProgressSlides = 0;

const slideshow = (currentIndex, nextIndex) => {
   let _currentIndex = currentIndex, _nextIndex = nextIndex;

   if (!slides) {
      slides = document.getElementsByTagName('slide');
      let i = 0;
      for (const slide of slides) {
         let active = slide.getAttribute('active');
         let name = slide.getAttribute('name');
         if (active == 'true') numProgressSlides++;
         if (name) names[name] = i;
         i++;
      }
   }

   if (typeof nextIndex == 'string') nextIndex = names[nextIndex];
   if (currentIndex < 0) _currentIndex = 0;
   if (nextIndex < 0) _nextIndex = 0;
   if (currentIndex >= slides.length) _currentIndex = slides.length - 1;
   if (nextIndex >= slides.length) _nextIndex = slides.length - 1;
   if (currentIndex != _currentIndex) currentIndex = _currentIndex
   if (nextIndex != _nextIndex) nextIndex = _nextIndex

   slides[currentIndex].style.display = 'none';
   slides[nextIndex].style.display = 'block';

   let currentProgressIndex;
   if (slides[nextIndex].getAttribute('active') == 'true')
      currentProgressIndex = Math.abs(slides.length - numProgressSlides - nextIndex - 1);

   return [currentIndex, nextIndex, slides.length - 1, currentProgressIndex, numProgressSlides];
}

const ova = (props) => {
   const [indexes, setIndexes] = useState([0, 0]);

   return (
      <div className={styles.container} >
         <div id='slideshow'>
            <LearningObjective data={props.data.objective} />
            <ContentTable data={props.data.contentTable} />
            <ContentSlide html={props.html} css={props.css} />

            <TestA />

            <NavBar slideshow={slideshow} indexes={indexes} setIndexes={setIndexes} />
         </div>
      </div>
   );
};

export default ova;