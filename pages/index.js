import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About'; 
import ExperienceEducation from '../components/ExperienceEducation';
import Skills from '../components/Skills';
import HobbiesContact from '../components/HobbiesContact';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> 
      <ExperienceEducation/>
      <Skills /> 
      <HobbiesContact />
    </div>
  );
};

export default Home;
