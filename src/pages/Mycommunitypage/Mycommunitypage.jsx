import mockcommunitypage from '../../assests/mockpages/Community_Bio.png'
import { Link } from 'react-router-dom';
function myCommunityPage() {
    return(
        <div>
            <Link to='/communities'>
            <div>
                <img src={`${mockcommunitypage}`} alt="communitypage" />
            </div> 
            </Link>
        </div>
    );
}

export default myCommunityPage