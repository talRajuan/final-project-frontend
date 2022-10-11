import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { cloneDeep } from 'lodash';
import { toast } from 'react-toastify';

import TeacherCardComponent from '../../components/teacherCard/teacherCard.component';
import EditTeacherCardPopupComponent from '../../components/editTeacherCardPopup/editTeacherCardPopup.component';

const DashboardPage = () => {
	const [ cardsArr, setCardsArr ] = useState([]);
	const [ dataToEdit, setDataToEdit ] = useState(null);
	

	useEffect(() => {
		getAllCards();
		
	}, []);

	const handleDeleteCard = (id) => {
		
		axios
			.delete(`/cards/${id}`)
			.then((res) => {
				let newCardsArr = cloneDeep(cardsArr);
				newCardsArr = newCardsArr.filter((item) => item._id !== id);
				setCardsArr(newCardsArr);
			})
			.catch((err) => {
			
				toast.error('cannot delete the selected card', {
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

	const handleShowPopup = (id) => {
		
		let ktemp = cloneDeep(cardsArr.find((item) => item._id === id));
		setDataToEdit(ktemp);
	};

	const handleCancelEdit = () => {
		
		setDataToEdit(null);
	};

	const handleEditCard = (_id, updatedCard) => {
		
		axios
			.put('/cards/' + _id, updatedCard)
			.then((res) => {
				let newArrOfCard = cloneDeep(cardsArr);
				let cardItemInd = newArrOfCard.findIndex((item) => item._id === _id);
				if (cardItemInd !== -1) {
					newArrOfCard[cardItemInd] = { ...cloneDeep(updatedCard), _id };
					setCardsArr(newArrOfCard);
				}
				setDataToEdit(null);
			})
			.catch((err) => {
				toast('error');
			});
	};

	const getAllCards = () => {
		/*
        getAllCards will send ajax get request to the server
        and will get array of biz cards
        then it will update the cardsArr state
        if it will fail then it will create toast popup
    */
		axios
			.get('/cards')
			.then((res) => {
				// console.log(res.data);
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
					<TeacherCardComponent
						key={arrOfItems[i]._id + '_child'}
						{...arrOfItems[i]}
						onDelete={handleDeleteCard}
						onEdit={handleShowPopup}
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
			{dataToEdit && (
				<EditTeacherCardPopupComponent
					onCancelEdit={handleCancelEdit}
					onEditDone={handleEditCard}
					{...dataToEdit}
				/>
			)}
		</Fragment>
	);
};

export default DashboardPage;
