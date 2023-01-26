import Image from "next/image";
import styles from "./testA.module.css";

const testA = (props) => {
   return (
      <slide active='true' className={styles.container}>
         <div className={styles.title}>Evaluación</div>
         <div className={styles.question}>
            <Image
               alt="shape"
               src="/images/ovas/template/shapeTests.png"
               width="460"
               height="358"
               className={styles.shape}
            />
            <div className={styles.number}>
               {"01"}
            </div>
            {"Aquí va la pregunta de evaluación de comprensión. Lorem ipsum dolor sit amet, consectetuer adipis. Lorem ipsum dolor sit amet, consectetuer adipiscing."}
         </div>

         <Image
            alt="qvbot"
            src="/images/ovas/bots/qvbot/qvbot_thinking_croped.png"
            width="406"
            height="623"
            className={styles.qvBot}
         />

         <div className={styles.answers}>
            <div className={styles.a}>
               
            </div>
         </div>


      </slide >
   );
}

export default testA;