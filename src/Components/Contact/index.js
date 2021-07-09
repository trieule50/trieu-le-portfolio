export default function Contact(){
    return(
        <div className='contactMe'>
            <h1>Contact Me</h1>
            <div className='links'>
                <p><a href='https://www.linkedin.com/in/trieule1/' target='_blank' rel='noopener noreferrer'>Link to Linkedin</a></p>
                <p><a href='https://github.com/trieule50'target='_blank' rel='noopener noreferrer'>Link to Github</a></p>
            </div>
            <form>
                <h3>Send me a Message</h3>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text'></input>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='text'></input>
                <label htmlFor='subject'>Subject:</label>
                <input id='subject' type='text'></input>
                <label htmlFor='message'>Message:</label>
                <input id='subject' type='text'></input>
            </form>
        </div>
    )
}