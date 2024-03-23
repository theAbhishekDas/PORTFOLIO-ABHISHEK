'use client'

import { RiLinkedinFill, 
  RiGithubFill,
  RiTwitterXFill, 
  RiInstagramFill } from "react-icons/ri"

  import Link from "next/link";

  const icons = [
    {
      path: 'https://github.com/theAbhishekDas/',
      name: <RiGithubFill />,
    },
    {
      path: 'https://www.linkedin.com/in/abhishekdas09/ ',
      name: <RiLinkedinFill />,
    },
    {
      path: 'https://www.instagram.com/_the_happy_das_/',
      name: <RiInstagramFill />,
    },
    {
      path: 'https://twitter.com/kn1ne09',
      name: <RiTwitterXFill />,
    },
  ]
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className= {`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials