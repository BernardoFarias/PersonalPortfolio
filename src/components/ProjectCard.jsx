
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/>
          <a href={link}><button style={{ borderColor: 'transparent' }}><h6 style={{ color: 'white', marginTop: 45 }}>{'See more...'}</h6></button></a>
        </div>
      </div>
    </Col>
  )
}