import Joi from "joi-browser";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import cardSchmea from "../../validation/teacherCard.validation";

const CreateTeacherCardPage = () => {
  const [teacherName, setTeacherName] = useState("");
  const [teacherDescription, setTeacherDescription] = useState("");
  const [classAddress, setClassAddress] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherImage, setTeacherImage] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const history = useHistory();

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
  const handleMoreInfoChange = (ev) => {
    setMoreInfo(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validatedValue = Joi.validate(
      {
        teacherName,
        teacherDescription,
        classAddress,
        teacherPhone,
        teacherImage,
      },
      cardSchmea,
      {
        abortEarly: false,
      }
    );

    const { error } = validatedValue;
    if (error) {
      for (let item of error.details) {
        toast.error(item.message.replaceAll('"', ""));
      }
    }
    let dataToSend = {
      teacherName,
      teacherDescription,
      classAddress,
      teacherPhone,
      moreInfo,
    };
    if (teacherImage) {
      dataToSend.teacherImage = teacherImage;
    }
    /*  console.log("log for tomer", dataToSend); */
    axios
      .post("/cards", dataToSend)
      .then(() => {
        history.push("/dashboard");
        toast("new card created 😎 ");
      })
      .catch((err) => {
        console.log("something want wrong 5");
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="mb-3">
        <label htmlFor="moreinfo" className="form-label">
          More information
        </label>
        <input
          type="text"
          className="form-control"
          id="moreinfo"
          value={moreInfo}
          onChange={handleMoreInfoChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateTeacherCardPage;
