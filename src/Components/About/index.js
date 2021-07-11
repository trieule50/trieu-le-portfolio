import Resume from '../About/Trieu Le - Resume - 2021.pdf';
import ResumeLogo from '../About/resume_icon.png';

export default function About(){
    return(
        <div className='about'>
            <h1 className='pageTitle'>About</h1>
            <p>I am a software engineer with a background in engineering. As a civil engineer, I enjoy solving problems in the most unorthodox way and creating projects that the general public uses everyday. During my time in project management, I became very passionate about technology more specifically, artificial intelligence in construction.  And on May 2021, I made a decision to study software engineering in hope to make a bigger impact on society.</p>
            <div className='skills'>
                <div className='skillsItems'>
                    <a href={Resume} target='_blank' rel='noopener noreferrer'>
                        <div className='resume'><img src={ResumeLogo} alt='Click for Resume'
                        style={{
                            height:'10rem'
                        }}/>
                        <div className='overlay'>
                            <div className='text'>
                                Click to View Resume
                            </div>
                        </div>
                        </div>
                    </a>
                </div>
                <div className='skillsItems'>
                    <h4>List of Skills</h4>
                    <ul className='listOfSkills'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BootStrap</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>MERN</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}