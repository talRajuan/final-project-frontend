import { Fragment } from 'react';
/* import { useSelector } from 'react-redux'; */
/* import { toast } from 'react-toastify'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './moreInfoPopup.component.css';

const MoreInfoPopupComponent = (props) =>{

    /* const userData = useSelector((state) => state.auth.userData); */

    /* const [showMoreInfo, setShowMoreInfo] = useState(props.moreInfo); */

    const handleClosePopupClick = () => {
		props.onCancelEdit();
	};

    return(
        <Fragment>

        <div className="center-wrapper" onClick={handleClosePopupClick}>
        <div className="center-absolut">
            {props.moreInfo ?
            <><h1 className="mt-5 mb-5">More About This Class:</h1><h3 className="mt-5 mb-5">{props.moreInfo}</h3></>
            :
            <>
            <h2>nothing else to see here</h2>
            </>
        }

        <div className="row">
					<div className="col">
						<button type="submit" className="btn btn-primary w-100 mt-5" onClick={handleClosePopupClick}>
							<FontAwesomeIcon icon={faCircleCheck} />
						</button>
					</div>
					<div className="col">
						<button type="submit" className="btn btn-danger w-100 mt-5" onClick={handleClosePopupClick}>
							<FontAwesomeIcon icon={faBan} />
						</button>
					</div>
        </div>            
        </div>
        </div>
        </Fragment>
    )
}

export default MoreInfoPopupComponent;

