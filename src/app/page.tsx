'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Home() {

  
  return (
    <div className="min-h-screen w-full px-[4svw] py-[4svh] flex-col">

      <TypewriterComponent
        options={{
          delay: 20,
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Hello!<br/> I’m Taha Sabiri, a detail-oriented Front-End Developer from Semnan, Iran, born in 2000. With over three years of professional experience, I specialize in creating seamless and visually appealing user interfaces using cutting-edge technologies like React and Flutter. My passion for coding stems from a desire to blend creativity with functionality, ensuring that every digital experience I design is engaging and intuitive.<br/>I thrive in collaborative environments, where I can leverage my skills to bring ideas to life. Outside of coding, I actively engage with the tech community, exploring new technologies and continually honing my craft through learning and experimentation. Let’s connect and create something amazing together! <br/><br/>***Skill***<br/>1-javascript<br/>2-typescript<br/>3-react js<br/>4-next js<br/>5-react native<br/>6-sql server<br/>7-dart<br/>8-flutter<br/>9-ui & ux<br/><br/> ***certification***<br/>1-foundations of user exprince (UX) design - Google <br/>2-user experince for web design - Linkedin<br/>3-sql-the complete introduction to sql programming<br/>4-the unlimate sql bootcamp : go from zero to hero<br/>5-the ultimate mysql crash course<br/>6-html css bootstrap - Udemy <br/>7-html css javascript react - Udemy<br/>8-QR code generator using javascript - Udemy<br/>9-java complete course - Udemy<br/>10-javascript fundamental - Udemy<br/>11-learn sql - Udemy<br/><br/>***Experience***<br/>1-evtsp (bank mellat TSP)-frontend developer<br/>2-online Advertiser - frontend developer & uiux designer').start()
            .callFunction(() => {
             
              console.log('String typed out!');
          
            })
           




        }}

      />

    </div>
  );
}
