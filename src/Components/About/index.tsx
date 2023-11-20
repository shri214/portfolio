import React from "react";
import "./style.scss";
export const About: React.FC = () => {
  return (
    <div id="about">
      <h1>About Me..</h1>
      <div className="rows">
      <div className="image">
        <img src="https://scontent.flko1-1.fna.fbcdn.net/v/t39.30808-6/404257258_2060259177667100_5323362839577943972_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bb2uBFqJp58AX_sCeya&_nc_ht=scontent.flko1-1.fna&oh=00_AfDIUg_MmtqaLsgudIkuVzEWsxaH0tiJJBP4s3RuR44L6Q&oe=65604DE2" alt="profile pic" />
      </div>
      <div className="abouts">
        <p>
          As a dedicated B.Com student with a passion for web development, I
          have cultivated a robust skill set that seamlessly blends both
          business acumen and technical expertise. My academic journey has
          equipped me with a strong foundation in business principles, while my
          personal exploration into web development has allowed me to master
          programming languages and embrace industry best practices. Throughout
          my coursework, I've honed my analytical and strategic thinking,
          providing me with a unique perspective that I can bring to the realm
          of web development. My studies in business have given me a solid
          understanding of financial concepts, marketing strategies, and
          organizational dynamics, enhancing my ability to create web solutions
          that align with business objectives.
        </p>
      </div>
      </div>
    </div>
  );
};
