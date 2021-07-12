import githublogo from '../Contact/6214513_github_logo_icon.png';
import linkedinlogo from '../Contact/834713_linkedin_icon.png';

export default function Contact(){
    return(
        <div className='contactMe'>
            <h1 className='pageTitle'>Contact Me</h1>
            <div className='links'>
                <div className='links-items'>
                    <a href='https://www.linkedin.com/in/trieule1/' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedinlogo} alt='linkedin logo' className='linkedin'/>
                        <div className='links-title'>Link to Linkedin</div>
                    </a>
                </div>
                <div className='links-items'>
                    <a href='https://github.com/trieule50'target='_blank' rel='noopener noreferrer'>
                        <img src={githublogo} alt='github logo' className='github'/>
                        <div className='links-title'>Link to Github</div>
                    </a>
                </div>
            </div>
            <form>
                <h3>Send me a Message</h3>
                <div className='form-container'>
                    <div className='form-items'>
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input id='name' type='text' required/>
                        </div>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input id='email' type='text' required/>
                        </div>
                        <div>
                            <label htmlFor='subject'>Subject:</label>
                            <input id='subject' type='text' required/>
                        </div>
                    </div>
                    <div className='form-items'>
                        <label htmlFor='message'>Message:</label>
                        <textarea name='message' id='message' required/>
                    </div>
                </div>
                <input type='submit' value='SUBMIT'/>
            </form>
        </div>
    )
}