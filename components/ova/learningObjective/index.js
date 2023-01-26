import Image from "next/image";
import styles from "./learningObjective.module.css";

const learningObjective = (props) => {
   return (
      <slide name='learningObjective' className={styles.container}>
         <div className={styles.title}>Objetivo de aprendizaje</div>

         <div className={styles.titleBar}>
            {props.data}
         </div>

         <Image
            alt="qvbot"
            src="/images/ovas/bots/qvbot/qvbot_gretting_cropped.png"
            width="404"
            height="407"
            className={styles.qvBot}
         />

         <Image
            alt="qbot"
            src="/images/ovas/bots/qbot/qbot_croped1.png"
            width="342"
            height="338"
            className={styles.qBot}
         />
      </slide>
   );
}

export default learningObjective;