import Image from "next/image";
import styles from "./contentTable.module.css";

const load = (data) => {

}

const contentTable = (props) => {
   return (
      <>
         <slide name='contentTable'>
            <div className={styles.title}>Índice</div>
            <Image alt="qvbot" src="/images/ovas/bots/qvbot/qvbot_explain_croped.png" width="606" height="628" className={styles.qvBot} />
            <Image alt="qbot" src="/images/ovas/bots/qbot/qbot_croped1.png" width="342" height="338" className={styles.qBot}
            />

            <ul className={styles.list}>
               <li>Contenido 1</li>
               <li>Contenido 2</li>
               <li>Contenido 3</li>
               <li>Contenido 4</li>
               <li>Contenido 5</li>
               <li>Contenido 6</li>
               <li>Contenido 7</li>
            </ul>
         </slide>

         <slide>
            <div className={styles.title}>Índice</div>
            <Image alt="qvbot" src="/images/ovas/bots/qvbot/qvbot_explain_croped.png" width="606" height="628" className={styles.qvBot} />
            <Image alt="qbot" src="/images/ovas/bots/qbot/qbot_croped1.png" width="342" height="338" className={styles.qBot}
            />

            <ul className={styles.list}>
               <li>Contenido 8</li>
               <li>Contenido 9</li>
               <li>Contenido 10</li>
               <li>Contenido 11</li>
               <li>Contenido 12</li>
               <li>Contenido 13</li>
               <li>Contenido 14</li>
            </ul>
         </slide>

         {/*
         <slide active='true'>
            <div className={styles.title}>Índice</div>
            <Image alt="qvbot" src="/images/ovas/bots/qvbot/qvbot_explain_croped.png" width="606" height="628" className={styles.qvBot} />
            <Image alt="qbot" src="/images/ovas/bots/qbot/qbot_croped1.png" width="342" height="338" className={styles.qBot}
            />

            <ul className={styles.list}>
               <li>Contenido 15</li>
               <li>Contenido 16</li>
               <li>Contenido 17</li>
               <li>Contenido 18</li>
               <li>Contenido 19</li>
               <li>Contenido 20</li>
               <li>Contenido 21</li>
            </ul>
         </slide>

         <slide active='true'>
            <div className={styles.title}>Índice</div>
            <Image alt="qvbot" src="/images/ovas/bots/qvbot/qvbot_explain_croped.png" width="606" height="628" className={styles.qvBot} />
            <Image alt="qbot" src="/images/ovas/bots/qbot/qbot_croped1.png" width="342" height="338" className={styles.qBot}
            />

            <ul className={styles.list}>
               <li>Contenido 22</li>
               <li>Contenido 23</li>
               <li>Contenido 24</li>
               <li>Contenido 25</li>
               <li>Contenido 26</li>
               <li>Contenido 27</li>
               <li>Contenido 28</li>
            </ul>
         </slide>

         <slide active='true'>
            <div className={styles.title}>Índice</div>
            <Image alt="qvbot" src="/images/ovas/bots/qvbot/qvbot_explain_croped.png" width="606" height="628" className={styles.qvBot} />
            <Image alt="qbot" src="/images/ovas/bots/qbot/qbot_croped1.png" width="342" height="338" className={styles.qBot}
            />

            <ul className={styles.list}>
               <li>Contenido yy</li>
               <li>Contenido 23</li>
               <li>Contenido 24</li>
               <li>Contenido 25</li>
               <li>Contenido 26</li>
               <li>Contenido 27</li>
               <li>Contenido 28</li>
            </ul>
         </slide>

         <slide active='true'>
            <div className={styles.title}>Índice</div>
            <Image alt="qvbot" src="/images/ovas/bots/qvbot/qvbot_explain_croped.png" width="606" height="628" className={styles.qvBot} />
            <Image alt="qbot" src="/images/ovas/bots/qbot/qbot_croped1.png" width="342" height="338" className={styles.qBot}
            />

            <ul className={styles.list}>
               <li>Contenido zz</li>
               <li>Contenido 23</li>
               <li>Contenido 24</li>
               <li>Contenido 25</li>
               <li>Contenido 26</li>
               <li>Contenido 27</li>
               <li>Contenido 28</li>
            </ul>
         </slide>

         <slide active='true'>
            <div className={styles.title}>Índice</div>
            <Image alt="qvbot" src="/images/ovas/bots/qvbot/qvbot_explain_croped.png" width="606" height="628" className={styles.qvBot} />
            <Image alt="qbot" src="/images/ovas/bots/qbot/qbot_croped1.png" width="342" height="338" className={styles.qBot}
            />

            <ul className={styles.list}>
               <li>Contenido aa</li>
               <li>Contenido 23</li>
               <li>Contenido 24</li>
               <li>Contenido 25</li>
               <li>Contenido 26</li>
               <li>Contenido 27</li>
               <li>Contenido 28</li>
            </ul>
         </slide>
         */}
      </>
   );
}

export default contentTable;