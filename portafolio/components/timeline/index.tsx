import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
interface Item{
    year: number;
    title?: string;
    description: string;
}
interface TimelineProps {
    data:Item[];
}


export const TimeLine = ({data}:TimelineProps) => {
    return (
        <div>
            <VerticalTimeline>
                {data.map((item,index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--primary)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}
                        date={`${item.year} - aaaa`}
                        iconStyle={{ background: 'var(--primary)', color: '#fff' }}
                        icon={(<div className='icon'>{item.year}</div>)}
                    >
                        <h3 className="vertical-timeline-element-title">{item.year}</h3>
                        <p>
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <style jsx>{`
                .icon{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;     
                }
                `}</style>

        </div>

    )
}