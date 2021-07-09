import { Carousel } from "react-bootstrap";
import CAPNG from './CAPNG.png';
// import CAPNG2 from '/CAPNG2.png';
import FEPNG from './FEPNG.png';
// import FEPNG2 from './FEPNG2.png';

export default function Portfolio(){
    const imagesPortfolio = [
        {
            label: 'Cook Assistant',
            image: `${CAPNG}`,
            image2: `${CAPNG}`,
            githubLink: 'https://github.com/trieule50/nutritious-recipes-app',
            deployLink: 'https://cook-assistant.netlify.app/',
            content: 'Cook Assistant is a working, interactive, React application that recieved data from Edamam, the third-party API. The app allows users to find a recipe that fits their dietary needs and search for any key ingredient that the user wants in the recipe.'
        },
        {
            label: 'Frantic Engineer',
            image: `${FEPNG}`,
            image2: `${FEPNG}`,
            githubLink: 'https://github.com/trieule50/frantic-engineer-project1',
            deployLink: 'https://trieule50.github.io/frantic-engineer-project1/', 
            content: 'Snake was first launched in 1997 on the Nokia 6110 and became the second mobile game after Tetris. Frantic Engineer was inspired by snake and my previous career. Frantic Engineer is about an engineer who is getting ready to bid on a project. However, in order to submit the bid on time, all the proposal sheets will need to be collected.'
        }
    ]
    return(
        <div className='portfolio'>
            <h1>Portfolio</h1>
            <Carousel style={{ 
                    minHeight: '25vh',
                    maxWidth: '50vh'
                    }} className='carousel-container'>
                    {imagesPortfolio.map((data, i) =>{
                        return(
                            <Carousel.Item key={i}>
                                <img className='carousel-img'
                                src={data.image}
                                alt={data.label}
                                style={{
                                    width:'100%',
                                    height: '40vh'
                                }}
                                />
                                <Carousel.Caption>
                                <p className='caption'>{data.label}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                {imagesPortfolio.map((data, i) =>{
                    return(
                        <div className='project' key={i}>
                            <h3>{data.label}</h3>
                            <img src={data.image} alt={data.label}/>
                            <p>{data.content}</p>
                            <button><a href={data.githubLink}>Link to Github</a></button>
                            <button><a href={data.deployLink}>Link to App</a></button>
                        </div>
                    )
                })};
        </div>
    )
}