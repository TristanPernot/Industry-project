import './CommunityPage.scss'
//components
import Button from '../../components/Button/Button.jsx'
// communityimgs
import Communityimg1 from '../../assests/Community_1.png'
import Communityimg2 from '../../assests/Community_2.png'
import Communityimg3 from '../../assests/Community_3.png'
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
            <div className='container__communities'>
            <img src={`${Communityimg1}`} alt="Communityimg1" />
                <div className='container__communities--box'>
                    <h4>Community Name</h4>
                    <p>60 members</p>
                </div>
            </div>
            <div className='container__communities'>
            <img src={`${Communityimg2}`} alt="Communityimg2" />
                <div className='container__communities--box'>
                    <h4>Community Name</h4>
                    <p>1,200 members</p>
                </div>
            </div>
            <div className='container__communities'>
            <img src={`${Communityimg3}`} alt="Communityimg3" />
                <div className='container__communities--box'>
                    <h4>Community Name</h4>
                    <p>12 members</p>
                </div>
            </div>
        </div>

    );
}

export default CommunityPage