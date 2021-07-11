export default function About(){
    return(
        <div className='about'>
            <h1 className='pageTitle'>About</h1>
            <p>I am a software engineer with a background in engineering. As a civil engineer, I enjoy solving problems in the most unorthodox way and creating projects that the general public uses everyday. During my time in project management, I became very passionate about technology more specifically, artificial intelligence in construction.  And on May 2021, I made a decision to study software engineering in hope to make a bigger impact on society.</p>
            <div className='skills'>
                <div className='skillsItems'>
                    <a href='https://drive.google.com/file/d/1fbMjaIJF5GjVUQnpmDS0Dq6KpAxYr2Qy/view?usp=sharing' target='_blank' rel='noopener noreferrer'><div className='resume'>Click here for resume</div></a>
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