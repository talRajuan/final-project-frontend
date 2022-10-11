import { useState } from 'react';
/* import { toast } from 'react-toastify'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './editTeacherCardPopup.component.css';


const EditTeacherCardPopupComponent = (props) => {
	const [ teacherName, setTeacherName ] = useState(props.teacherName);
	const [ teacherDescription, setTeacherDescription ] = useState(props.teacherDescription);
	const [ classAddress, setClassAddress ] = useState(props.classAddress);
	const [ teacherPhone, setTeacherPhone ] = useState(props.teacherPhone);
	const [ teacherImage, setTeacherImage ] = useState(props.teacherImage);

	const handleTeacherNameChange = (ev) => {
		setTeacherName(ev.target.value);
	};
	const handleTeacherDescriptionChange = (ev) => {
		setTeacherDescription(ev.target.value);
	};
	const handleClassAddressChange = (ev) => {
		setClassAddress(ev.target.value);
	};
	const handleTeacherPhoneChange = (ev) => {
		setTeacherPhone(ev.target.value);
	};
	const handleTeacherImageChange = (ev) => {
		setTeacherImage(ev.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
	};

	const handleFormClick = (ev) => {
		/*
    because we use onclick of the div (parent)
    when we click on elms inside this div
    js activates the onclick of the div (parent)
    as well, this cause a bug because each time
    we will press on anything inside the form
    it will hide the popup.
    to stop this we must use onclick of the from
    and use ev.stopPropagation(); command to tell
    js don't use onclick of the div (parent)
    */
		ev.stopPropagation();
	};

	const handleConfirmClick = () => {
		//! joi validation
		let dataToSend = {
			teacherName,
			teacherDescription,
			classAddress,
			teacherPhone
		};
		if (teacherImage) {
			dataToSend.teacherImage = teacherImage;
		}
		props.onEditDone(props._id, dataToSend);
	};

	const handleCancelClick = () => {
		props.onCancelEdit();
	};

	return (
		<div className="center-wrapper" onClick={handleCancelClick}>
			<form onSubmit={handleSubmit} className="center-absolut" onClick={handleFormClick}>
				<div className="mb-3">
					<h3>Edit card</h3>
				</div>
				<div className="mb-3">
					<label htmlFor="teacherNameInput" className="form-label">
						Teacher's Name:
					</label>
					<input
						type="text"
						className="form-control"
						id="teacherNameInput"
						value={teacherName}
						onChange={handleTeacherNameChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="teacherDescriptionInput" className="form-label">
						Teacher's Description:
					</label>
					<input
						type="text"
						className="form-control"
						id="teacherDescriptionInput"
						value={teacherDescription}
						onChange={handleTeacherDescriptionChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="classAddressInput" className="form-label">
						Class Address:
					</label>
					<input
						type="text"
						className="form-control"
						id="classAddressInput"
						value={classAddress}
						onChange={handleClassAddressChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="teacherPhoneInput" className="form-label">
						Teacher's Phone:
					</label>
					<input
						type="text"
						className="form-control"
						id="teacherPhoneInput"
						value={teacherPhone}
						onChange={handleTeacherPhoneChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="teacherImageInput" className="form-label">
						Teacher's Image (url):
					</label>
					<input
						type="text"
						className="form-control"
						id="teacherImageInput"
						value={teacherImage}
						onChange={handleTeacherImageChange}
					/>
				</div>
				<div className="row">
					<div className="col">
						<button type="submit" className="btn btn-primary w-100" onClick={handleConfirmClick}>
							<FontAwesomeIcon icon={faCircleCheck} />
						</button>
					</div>
					<div className="col">
						<button type="submit" className="btn btn-danger w-100" onClick={handleCancelClick}>
							<FontAwesomeIcon icon={faBan} />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditTeacherCardPopupComponent;
