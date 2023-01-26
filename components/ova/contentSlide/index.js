import parse from 'html-react-parser';

const content = (props) => {
   let html = props.html;
   for (const key in props.css) html = html.replace(
      new RegExp(`(class|className|classname)=["']${key}["']`, 'g'),
      `class="${props.css[key]}"`
   );

   return (<>{parse(html)}</>);
}

export default content;