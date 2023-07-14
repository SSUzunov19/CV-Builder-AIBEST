
import React from "react";
import ReactMarkdown from "react-markdown";
import PhoneIcon from '@mui/icons-material/Phone';
import {
  HiOutlineMail
} from "react-icons/hi";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const CV = React.forwardRef((props, ref) => {
  const items = "flex items-center mr-3 mt-2 ";
  const itemsSVG = "h-4 w-4 text-gray-700 mr-1";
  const paragraphSize = "text-[0.705rem] mt-1 text-gray-700 ";

  const cv = useContext(CvContext);

  return (
    <div className="w-full h-full" ref={ref} id="cv">
      {/* attach the ref here */}
      {[cv.cv].map((item, index) => {
        return (
          <div key={index}>
            <section id="header">
              {/* HEADER START */}
              <div className="flex items-center">
                {item.displayImage ? (
                  <div className="mr-4 flex ">
                    <img
                      src={item.image || "/Gradient.jpg"}
                      className="rounded-full"
                      width="72px"
                      height="72px"
                      alt="profilePicture"
                      quality={100}
                      objectFit="cover"
                    />
                  </div>
                ) : null}

                <div className="space-y-1">
                  <h1 className="text-3xl font-semibold">{item.name}</h1>
                  <h4 className=" text-gray-400 text-sm font-medium">
                    {item.jobTitle}
                    {item.location ? " - " : null}
                    {item.location}
                  </h4>
                </div>
              </div>
              <div className="flex flex-wrap text-xs mt-1 items-center align-middle">
                {item.phone && item.displayPhone ? (
                  <div className={items}>
                    <PhoneIcon sx={{ fontSize: 'medium' }} className={itemsSVG} />
                    <span>{item.phone}</span>
                  </div>
                ) : null}
                {item.email && item.displayMail ? (
                  <div className={items}>
                    <HiOutlineMail className={itemsSVG} />
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </div>
                ) : null}
                {item.github && item.displayGithub ? (
                  <div className={items}>
                    <AiFillGithub className={itemsSVG} />
                    <a
                      href={`https://github.com/${item.github}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.github}
                    </a>
                  </div>
                ) : null}
                {item.twitter && item.displayTwitter ? (
                  <div className={items}>
                    <TbBrandTwitter className={itemsSVG} />
                    <a
                      href={`https://twitter.com/${item.twitter}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.twitter}
                    </a>
                  </div>
                ) : null}
                {item.linkedIn && item.displayLinkedIn ? (
                  <div className={items}>
                    <AiOutlineLinkedin className={itemsSVG} />
                    <a
                      href={`https://www.linkedin.com/in/${item.linkedIn}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.linkedIn}
                    </a>
                  </div>
                ) : null}
                {item.instagram && item.displayInstagram ? (
                  <div className={items}>
                    <AiOutlineInstagram className={itemsSVG} />
                    <a
                      href={`https://www.instagram.com/${item.instagram}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.instagram}
                    </a>
                  </div>
                ) : null}
                {item.facebook && item.displayFacebook ? (
                  <div className={items}>
                    <AiOutlineFacebook className={itemsSVG} />
                    <a
                      href={`https://www.facebook.com/${item.facebook}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.facebook}
                    </a>
                  </div>
                ) : null}
              </div>
              {/* HEADER END */}
            </section>
            {/* ABOUT TEXT START  */}
            {item.about ? (
              <section id="about">
                <div className="bg-gray-100/50 border p-3 rounded-lg mt-6">
                  <ReactMarkdown className={paragraphSize}>
                    {item.about}
                  </ReactMarkdown>
                </div>
              </section>
            ) : null}
            {/* ABOUT TEXT END */}
          </div>
        );
      })}
    </div>
  );
});

export default CV;
