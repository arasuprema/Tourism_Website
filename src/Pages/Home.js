import React from 'react';
import { useRef } from 'react';
import Section1 from '../Components/Section1';  // Section1 Component
import HomeSection1 from '../Components/HomeSection1';  // HomeSection1 Component
import HomeSection3 from '../Components/HomeSection3';  // HomeSection3 Component
import Package from '../Components/Package'
import PackageDetail from '../Components/PackageDetail'
import HomeSection4 from '../Components/HomeSection4';  // HomeSection4 Component
import FreeTrial from "../Components/FreeTrial";

const Home = () => {
  const section4Ref = useRef(null);  // Create a ref for HomeSection4

  // Function to scroll smoothly to HomeSection4
  const scrollToHomeSection4 = () => {
    if (section4Ref.current) {
      section4Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Pass scrollToHomeSection4 as a prop to Section1 */}
      <Section1 scrollToHomeSection4={scrollToHomeSection4} />
      
      {/* Other sections */}
      <HomeSection1 scrollToHomeSection4={scrollToHomeSection4} />
      <HomeSection3 />
      <Package />
      <PackageDetail />
      {/* HomeSection4 with the ref */}
      <div ref={section4Ref}>
        <HomeSection4 />
      </div>
      <div> 
        <FreeTrial/>
      </div>
    </>
  );
};

export default Home;
