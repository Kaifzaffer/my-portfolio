import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2021-2025'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Maulana Abul Kalam Azad University,West Bengal</h3>
                    <p>B.tech,Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2019-2021'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Doon Public School,Bihar</h3>
                    <p>High School,PCM</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2012-2019'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>S.S. Public School,Bihar</h3>
                    <p>Secondary School</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
