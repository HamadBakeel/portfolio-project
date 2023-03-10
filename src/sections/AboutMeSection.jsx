import React from 'react'

function AboutMeSection() {
    return (
        <div className='sectionContainer'>
            <h2 className="title">Me, Myself and I</h2>
            <p className="subtitle">
                Hi, I'm Hamad Bakeel, a front-end front developer based in Yemen. I'm super passionnate for creating user-friendly and responsive web experiences, and I enjoy exploring new technologies to enhance my skills and knowledge.

                My journey as a developer began 2 ago, when I dropped out of college and started tinkering with HTML and CSS to create simple websites. Since then, I've expanded my skillset to include JavaScript, React and other popular front-end frameworks and libraries. I'm always eager to learn and grow as a developer, and I'm constantly seeking out new challenges and opportunities to push my boundaries.
            </p>

            <p className='text-white'>
                Here are a few technologies I've been working with recently:

                <ul className='technologies'>
                    <div>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind/Bootstrap</li>
                    </div>
                    <div>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>VueJS</li>
                    </div>
                </ul>
            </p>
        </div>
    )
}

export default AboutMeSection