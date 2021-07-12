import PortfolioImage from '../Home/Portfolio.png.001.png';
import Trieu from '../Home/TL.png';

export default function Home(){
    return(
        <div className='home' style={{
            background:`url(${Trieu}), url(${PortfolioImage})`,
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: 'right bottom, center',
            backgroundSize: '30rem 40rem, 95rem 50rem',
            // backgroundAttachment: 'fixed'
        }}>
            <h1 className='landingTitle'>Builder &nbsp; to &nbsp;<span> {'<'}Coder{'>'}</span></h1>
        </div>
    )
}