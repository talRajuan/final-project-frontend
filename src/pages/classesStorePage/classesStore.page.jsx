import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { cloneDeep } from 'lodash';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

/* import TeacherCardComponent from '../../components/teacherCard/teacherCard.component'; */
import TeacherCardTestComponent from '../../components/teacherCard/teacherCardTest.component';
/* import EditTeacherCardPopupComponent from '../../components/editTeacherCardPopup/editTeacherCardPopup.component'; */
import MoreInfoPopupComponent from '../../components/moreInfoPopup/moreInfoPopup.component';
/* import MoreInfoPopupComponent from '../../components/moreInfoPopup/moreInfoPopup.component'; */

const ClassesStorePage = () => {
	const [ cardsArr, setCardsArr ] = useState([]);
	const [ dataToEdit, setDataToEdit ] = useState(null);

	const history = useHistory();

	useEffect(() => {
		getAllCards();
	}, []);

	const handleEddToCart = (id) => {
		
		console.log('id----1',id);

		axios
		.get(`users/add-favorite/${id}`)
		.then((result) => {
				console.log("show", result);
				history.push('/shoppingcart');
				toast('new card created 😎 ');
			})
			.catch((err) => {
				toast('card alrady exist in cart ');
				console.log('something want wrong 4', id);
				console.log(err);
			});
	};

	const handleShowPopup = (id) => {
		let ktemp = cloneDeep(cardsArr.find((item) => item._id === id));
		setDataToEdit(ktemp);
	};

	const handleCancelEdit = () => {
		setDataToEdit(null);
	};

	const getAllCards = () => {
		/*
        getAllCards will send ajax get request to the server
        and will get array of teachers cards
        then it will update the cardsArr state
        if it will fail then it will create toast popup
    */
		axios
			.get('/allcards')
			.then((res) => {
				if (res.data.length === 0) toast('you have no cards');
				setCardsArr(res.data);
			})
			.catch((err) => {
				// console.log("axios error", err);
				toast.error('cannot get cards', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
			});
	};

	const renderRowsFromArr = (arrOfItems) => {
		/*
        renderRowsFromArr will recive array of bizcards
        and will create html elms to display the bizcards
        in the page
    */
		let newArr = [];
		let inArr = [];
		let l = arrOfItems.length;
		for (let i = 0; i < l; i++) {
			if (i > 0 && i % 3 === 0) {
				newArr = [
					...newArr,
					<div className="row" key={i + 'cards row'}>
						{[ ...inArr ]}
					</div>
				];
				inArr = [];
			}
			inArr = [
				...inArr,
				<div key={arrOfItems[i]._id} className="col">
					<TeacherCardTestComponent
						key={arrOfItems[i]._id + '_child'}
						{...arrOfItems[i]}
						onEddToCart={handleEddToCart}
						onShowMoreInfo={handleShowPopup}
					/>
				</div>
			];
		}
		if (inArr.length > 0) {
			newArr = [
				...newArr,
				<div className="row" key={l + 'cards row'}>
					{[ ...inArr ]}
				</div>
			];
		}
		return newArr;
	};

	return (
		<Fragment>
			{renderRowsFromArr(cardsArr)}
			{dataToEdit && <MoreInfoPopupComponent onCancelEdit={handleCancelEdit} {...dataToEdit} />}
		</Fragment>
	);
};

export default ClassesStorePage;
