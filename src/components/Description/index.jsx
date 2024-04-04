import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "I'm Gaurav Yadav, \nA Software Developer,";
    const description = useRef(null);
    const isInView = useInView(description)
     // Function to handle clicking on menu items
     const handleMenuItemClick = (menuItem) => {
        // setIsActive(false); // Close the menu on item click
        // Perform different actions based on the clicked item
        switch (menuItem) {
            case 'Resume':
                // Open GitHub
                window.open('https://drive.google.com/file/d/1sKhqynXi2MWo5qneEDYHXnYzAVOqTqjD/view?usp=sharing', '_blank');
                break;
            
        }
    }
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}><b>MCA</b> from LNCT University bhopal with <b>8.55</b> CGPA<br /> <br /><b>BCA</b> from Vardhman College Itarsi</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <div  onClick={() => handleMenuItemClick('Resume')}>
                             <p>My Resume</p>
                        </div>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
