import React from 'react'
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";



const Education = () => {
  return (
    <>
      <div className="container-lg Education" id='Education'>
      <h2 className='Education-title'>MY EDUCATION</h2>
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#34bff2', color: 'white' }}
    contentArrowStyle={{ borderRight: '10px solid  gray' }}
    date="2019"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Secondary School (CBSE) </h3>
    <h4 className="vertical-timeline-element-subtitle">Grade: 86%</h4>
    <p className='vertical-timeline-element-para'>
     SCHOOL:SURYA PUBLIC SCHOOL ,NANGLOI-DELHI
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#34bff2', color: 'white' }}
    contentArrowStyle={{ borderRight: '10px solid  gray' }}
    date="2021"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title"> Senior Secondary School (CBSE) </h3>
    <h4 className="vertical-timeline-element-subtitle">Grade: 91.8%</h4>
    <p className='vertical-timeline-element-para'>
     SCHOOL:D.A.V PUBLIC SCHOOL ,DARBHANGA-BIHAR
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#34bff2', color: 'white' }}
    contentArrowStyle={{ borderRight: '10px solid  gray' }}
    date="2022-present"
    iconStyle={{ background: 'black', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Graduation </h3>
    <h4 className="vertical-timeline-element-subtitle">SCGPA: 8.67</h4>
    <p className='vertical-timeline-element-para'>
     COLLEGE: MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY ,DELHI
    </p>
  </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Education
