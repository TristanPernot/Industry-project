import './CommunityPage.scss'
import { useParams, useNavigate, Link} from 'react-router-dom'
//components
import Button from '../../components/Button/Button.jsx'
// communityimgs
import Communityimg1 from '../../assests/Community_1.png'
import Communityimg2 from '../../assests/Community_2.png'
import Communityimg3 from '../../assests/Community_3.png'
// Event imgs
import Eventimg1 from '../../assests/Event_1.png'
import Eventimg2 from '../../assests/Event_2.png'
import Eventimg3 from '../../assests/Event_3.png'
function CommunityPage() {
    return(
        <div className="container">
            <ul className="container__header">
                <li className='container__header--current'>
                    Explore All
                </li>
                <li className='container__header--item'>
                    Community
                </li>
                <li className='container__header--item'>
                    Event
                </li>
                <li className='container__header--item'>
                    People
                </li>
            </ul>
            <div className='borders'>
            <Link to='/mycommunity'>
            <div className='container__communities'>
            <img src={`${Communityimg1}`} alt="Communityimg1" />
                <div className='container__communities--box'>
                    <h4>Community Name</h4>
                    <p>60 members</p>
                </div>
            </div>
            </Link>
            <Link to='/mycommunity'>
            <div className='container__communities'>
            <img src={`${Communityimg2}`} alt="Communityimg2" />
                <div className='container__communities--box'>
                    <h4>Community Name</h4>
                    <p>1,200 members</p>
                </div>
            </div>
            </Link>
            <Link to='/mycommunity'>
            <div className='container__communities'>
            <img src={`${Communityimg3}`} alt="Communityimg3" />
                <div className='container__communities--box'>
                    <h4>Community Name</h4>
                    <p>12 members</p>
                </div>
            </div>
            </Link>
            <p className='titles'>All Events Relating to</p>
            <div className='container__communities'>
            <img src={`${Eventimg1}`} alt="Eventimg1" />
                <div className='container__communities--box'>
                    <h4>Event</h4>
                    <p>14 members have signed up</p>
                </div>
            </div>
            <div className='container__communities'>
            <img src={`${Eventimg2}`} alt="Eventimg2" />
                <div className='container__communities--box'>
                    <h4>Event Name</h4>
                    <p>10,500 members have signed up</p>
                </div>
            </div>
            <div className='container__communities'>
            <img src={`${Eventimg3}`} alt="Eventimg3" />
                <div className='container__communities--box'>
                    <h4>Event Space</h4>
                    <p>7341 members have signed up</p>
                </div>
            </div>
            </div>
        </div>

    );
}

export default CommunityPage