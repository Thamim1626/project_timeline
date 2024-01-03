import {FaClock} from 'react-icons/fa'

import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props

  const {
    categoryId,
    description,
    duration,
    id,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
  } = eachItem
  console.log(description)

  return (
    <div className="course-card">
      <img src={imageUrl} alt={projectTitle} className="course-image" />
      <div className="heading-duration">
        <p className="course-heading">{projectTitle}</p>
        <div className="project-card-header-duration-card">
          <FaClock className="project-card-header-duration-icon" />
          <p className="project-card-header-duration">{duration}</p>
        </div>
      </div>
      <p className="des">{description}</p>

      <a href={projectUrl} className="link-style">
        Visit{' '}
      </a>
    </div>
  )
}

export default ProjectTimelineCard

// {
//   /* <header className="project-card-header">
//         <p className="project-card-header-title">{projectTitle}</p>
//         <div className="project-card-header-duration-card">
//           <FaClock className="project-card-header-duration-icon" />
//           <p className="project-card-header-duration">{duration}</p>
//         </div>
//       </header> */
// }
