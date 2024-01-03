import {FaClock} from 'react-icons/fa'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {
    id,
    categoryId,
    title,
    courseTitle,
    description,
    duration,
    tagsList,
  } = eachItem
  return (
    <div className="project-card">
      <header className="project-card-header">
        <p className="project-card-header-title">{courseTitle}</p>
        <div className="project-card-header-duration-card">
          <FaClock className="project-card-header-duration-icon" />
          <p className="project-card-header-duration">{duration}</p>
        </div>
      </header>
      <p className="project-card-des">{description}</p>
      <ul className="project-tag-list">
        {tagsList.map(items => (
          <li className="project-tag-item">{items.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
