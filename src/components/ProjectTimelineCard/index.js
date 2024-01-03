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

  return (
    <div className="project-card">
      <p className="project-card-des">{description}</p>
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
