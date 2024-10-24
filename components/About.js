import Image from 'next/image';
import styles from '../styles/AboutMe.module.css';

const About = () => {
  return (
    <div className={styles.aboutMeSection} id="about"> 
      <div className={styles.container}>
        {/* About Me Content */}
        <div className={styles.aboutMeContent}>
          <div className={styles.image}>
            <Image 
              src="/shap.jpg" 
              alt="Your Photo" 
              width={200} 
              height={200} 
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textContent}>
            <h1>Hello!</h1>
            <h2>I&apos;m <span className={styles.highlight}> Sheila Oriza </span></h2>
            <h3>Fashion Designer</h3>
            <div className={styles.buttons}>
              {/* Button Actions */}
            </div>
          </div>
        </div>

        {/* About Me Details */}
        <div className={styles.aboutMeDetails}>
          <h2>About Me? </h2>
          <p>Fashion for me is a powerful form of self-expression, and I want everyone to feel that uniqueness.</p>
          <ul>
            <li><strong>Name:</strong> Sheula Oriza Pramestiyo</li>
            <li><strong>Date of Birth:</strong> April 21, 2008</li>
            <li><strong>Address:</strong> Kemayoran Gempol</li>
            <li><strong>Email:</strong> zazasheila@gmail.com </li>
            <li><strong>Phone:</strong>  +62 888-000-2118</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
