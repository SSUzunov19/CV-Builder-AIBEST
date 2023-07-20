import { Box, Typography, Link } from '@mui/material';
import { HiOutlineMail, HiOutlineLink, HiExternalLink } from "react-icons/hi";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";
import { websiteLinkCreator, resolvedWebsiteLink } from "../utils/link.utils";

const CV = ({color, gradientColor}) => {
  const socialLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
    color: 'gray.700',
    fontSize: '0.875rem',
  };
  
  const socialIconStyles = {
    marginRight: '0.5rem',
    fontSize: '1.2rem',
  };

  const titles = {
    fontSize: 'small',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    marginTop: '1.5rem'
  };

  const paragraphSize = {
    fontSize: '0.8rem',
    marginTop: 1,
    color: 'gray.700'
  };

  const skillsTitle = {
    fontSize: '0.8rem',
    marginTop: 1,
    color: 'gray.700',
    fontWeight: 'bold'
  };

  const cv = useContext(CvContext);

  return (
    <Box sx={{ display: 'flex', height: '100%', overflowY: 'auto', background: `linear-gradient(135deg, ${color}, ${gradientColor})` }} id="cv">
      <Box sx={{ position: 'relative', flex: '0 0 20%', height: '100%' }}>
        {[cv.cv].map((item, index) => {
          return (
            <div key={index}>
              <div style={{ marginTop: '2rem' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', width: '100%' }}>{item.name}</Typography>
                <Typography variant="subtitle1" sx={{ color: 'gray.400', fontSize: 'medium', fontWeight: 'medium' }}>{item.jobTitle}</Typography>
                <Typography variant="subtitle1" sx={{ color: 'gray.400', fontSize: 'medium', fontWeight: 'medium' }}>{item.location}</Typography>
                <Typography variant="subtitle1" sx={{ color: 'gray.400', fontSize: 'medium', fontWeight: 'medium' }}>{item.phone}</Typography>
              </div>
              {/* SOCIAL */}
              <Box id="social" sx={{ marginTop: 0.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                  {item.email && item.displayMail && (
                    <Box sx={socialLinkStyles}>
                      <HiOutlineMail sx={socialIconStyles} />
                      <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    </Box>
                  )}
                  {item.website && item.displayWebSite && (
                    <Box sx={socialLinkStyles}>
                      <HiOutlineLink sx={socialIconStyles} />
                      <Link href={websiteLinkCreator(item.website)} target="_blank" rel="noreferrer">
                        {resolvedWebsiteLink(websiteLinkCreator(item.website))}
                      </Link>
                    </Box>
                  )}
                  {item.github && item.displayGithub && (
                    <Box sx={socialLinkStyles}>
                      <AiFillGithub sx={socialIconStyles} />
                      <Link href={`https://github.com/${item.github}`} target="_blank" rel="noreferrer">
                        {item.github}
                      </Link>
                    </Box>
                  )}
                  {item.twitter && item.displayTwitter && (
                    <Box sx={socialLinkStyles}>
                      <TbBrandTwitter sx={socialIconStyles} />
                      <Link href={`https://twitter.com/${item.twitter}`} target="_blank" rel="noreferrer">
                        {item.twitter}
                      </Link>
                    </Box>
                  )}
                  {item.linkedIn && item.displayLinkedIn && (
                    <Box sx={socialLinkStyles}>
                      <AiOutlineLinkedin sx={socialIconStyles} />
                      <Link href={`https://www.linkedin.com/in/${item.linkedIn}/`} target="_blank" rel="noreferrer">
                        {item.linkedIn}
                      </Link>
                    </Box>
                  )}
                  {item.instagram && item.displayInstagram && (
                    <Box sx={socialLinkStyles}>
                      <AiOutlineInstagram sx={socialIconStyles} />
                      <Link href={`https://www.instagram.com/${item.instagram}/`} target="_blank" rel="noreferrer">
                        {item.instagram}
                      </Link>
                    </Box>
                  )}
                  {item.facebook && item.displayFacebook && (
                    <Box sx={socialLinkStyles}>
                      <AiOutlineFacebook sx={socialIconStyles} />
                      <Link href={`https://www.facebook.com/${item.facebook}/`} target="_blank" rel="noreferrer">
                        {item.facebook}
                      </Link>
                    </Box>
                  )}
                </Box>
              </Box>
              {/* SOCIAL END */}
              {/* SKILLS START */}
              <Box id="skills_and_projects" sx={{ display: 'flex' }}>
                <Box id="skills">
                  <Box sx={{ marginTop: '1.5rem' }}>
                    <Typography variant="body2" sx={skillsTitle}>{item.skillTitle1}</Typography>
                    <Typography sx={paragraphSize}>
                      {item.toolsAndTechSkills.join(", ")}
                    </Typography>
                  </Box>

                  <Box sx={{ marginTop: '1.5rem' }}>
                    <Typography variant="body2" sx={skillsTitle}>{item.skillTitle2}</Typography>
                    <Typography sx={paragraphSize}>
                      {item.industryKnowledge.join(", ")}
                    </Typography>
                  </Box>

                  <Box sx={{ marginTop: '1.5rem' }}>
                    <Typography variant="body2" sx={skillsTitle}>{item.skillTitle3}</Typography>
                    <Typography sx={paragraphSize}>{item.languages.join(", ")}</Typography>
                  </Box>
                </Box>
              </Box>
              {/* SKILLS END */}
              {/* EDUCATION */}
              <Box id="education" sx={{ marginTop: '1.5rem' }}>
                <Typography variant="body2" sx={skillsTitle}>Education</Typography>

                {item.education.map((educationItem, index) => {
                  return (
                    <Box key={index}>
                      <Typography variant="body2" sx={{ marginTop: '0.5rem', fontWeight: 'medium' }}>
                        {educationItem.title}
                      </Typography>
                      <Typography variant="body2" sx={{ marginTop: '0.5rem', color: 'gray.600' }}>
                        {educationItem.school}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'gray.500' }}>
                        {educationItem.startDate} - {educationItem.endDate}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </div>
          );
        })}
      </Box>
      <Box sx={{ position: 'relative', height: '100%', ml: 2 }}>
        {[cv.cv].map((item, index) => {
          return (
            <div key={index}>
              {/* ABOUT TEXT START  */}
              {item.about && (
                <section id="about">
                  <div style={{ position: 'relative' }}>
                    {item.displayImage && (
                      <Box sx={{ marginRight: '0.5rem', float: 'left' }}>
                        <img
                          src={item.image || '/Gradient.jpg'}
                          className="rounded-md"
                          width="72px"
                          height="72px"
                          alt="profilePicture"
                          quality={100}
                          objectFit="cover"
                        />
                      </Box>
                    )}
                    <article>
                      <Typography variant="h6" sx={titles}>
                        About Me
                      </Typography>
                      <Typography variant="body2" sx={paragraphSize}>
                        {item.about}
                      </Typography>
                    </article>
                  </div>
                </section>
              )}
              {/* ABOUT TEXT END */}
              {/* EXPERIENCE START */}
              <section sx={{ marginTop: '1.5rem', position: 'relative' }}>
                <Typography variant="h1" sx={titles}>
                  Experience
                </Typography>
                {item.experiences.map((experience, index) => {
                  return (
                    <div key={index} style={{ position: 'relative' }}>
                      <div style={{ display: 'flex', marginTop: '0.75rem', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'medium', fontSize: '1rem' }}>
                          {experience.title}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Typography variant="body2" sx={{ fontSize: '0.775rem', color: 'gray.500' }}>
                            {experience.company}
                          </Typography>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Typography variant="body2" sx={{ fontSize: '0.775rem', color: 'gray.500' }}>
                              {experience.startDate}
                            </Typography>
                            {experience.endDate && <span style={{ fontSize: '0.775rem', color: 'gray.500' }}> - </span>}
                            <Typography variant="body2" sx={{ fontSize: '0.775rem', color: 'gray.500' }}>
                              {experience.endDate}
                            </Typography>
                          </span>
                        </div>
                      </div>
                      <Typography variant="body2" sx={paragraphSize}>
                        {experience.summary}
                      </Typography>
                    </div>
                  );
                })}
              </section>
              {/* EXPERIENCE END */}
              {/* PROJECTS START */}
              <section id="projects" sx={{ marginTop: '1.5rem', position: 'relative' }}>
                <Typography variant="h6" sx={titles}>
                  Projects
                </Typography>
                {item.projects.map((project, index) => {
                  return (
                    <div key={index} style={{ marginTop: '0.5rem' }}>
                      <Typography variant="h6" sx={{ fontWeight: 'medium', fontSize: '1rem' }}>
                        <Link href={project.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                          {project.title}
                          {project.link && <HiExternalLink sx={{ marginLeft: '0.25rem', display: 'inline' }} />}
                        </Link>
                      </Typography>
                      <Typography variant="body2" sx={paragraphSize}>
                        {project.summary}
                      </Typography>
                    </div>
                  );
                })}
              </section>
              {/* PROJECTS END */}
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default CV;