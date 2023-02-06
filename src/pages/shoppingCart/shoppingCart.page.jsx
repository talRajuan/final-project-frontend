import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import { toast } from "react-toastify";

/* import TeacherCardComponent from '../../components/teacherCard/teacherCard.component'; */
import TeacherCardTestComponent from "../../components/teacherCard/teacherCardTest.component";
/* import EditTeacherCardPopupComponent from '../../components/editTeacherCardPopup/editTeacherCardPopup.component'; */
import MoreInfoPopupComponent from "../../components/moreInfoPopup/moreInfoPopup.component";
/* import MoreInfoPopupComponent from '../../components/moreInfoPopup/moreInfoPopup.component'; */

const ShoppingCartPage = () => {
  /* const [ cardsArr, setCardsArr ] = useState([]); */
  const [favoritsArr, setFavoritsArr] = useState([]);
  const [dataToEdit] = useState(null);

  useEffect(() => {
    getFavoriteCards();
  }, []);

  const handleDeleteFavorite = (id) => {
    axios
      .get(`users/remove-favorite/${id}`)
      .then((res) => {
        let newCardsArr = cloneDeep(favoritsArr);
        newCardsArr = newCardsArr.filter((item) => item._id !== id);
        setFavoritsArr(newCardsArr);
      })
      .catch((err) => {
        toast.error("cannot delete the selected card", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const getFavoriteCards = () => {
    /*
        getAllCards will send ajax get request to the server
        and will get array of biz cards
        then it will update the cardsArr state
        if it will fail then it will create toast popup
    */
    axios
      .get("users/user-favorites")
      .then((res) => {
        // console.log(res.data);
        if (res.data.length === 0) toast("you have no cards");
        setFavoritsArr(res.data);
      })
      .catch((err) => {
        // console.log("axios error", err);
        toast.error("cannot get cards", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
          <div className="row" key={i + "cards row"}>
            {[...inArr]}
          </div>,
        ];
        inArr = [];
      }
      inArr = [
        ...inArr,
        <div key={arrOfItems[i]._id} className="col">
          <TeacherCardTestComponent
            key={arrOfItems[i]._id + "_child"}
            {...arrOfItems[i]}
            onDelete={handleDeleteFavorite}
            isCartPage
          />
        </div>,
      ];
    }
    if (inArr.length > 0) {
      newArr = [
        ...newArr,
        <div className="row" key={l + "cards row"}>
          {[...inArr]}
        </div>,
      ];
    }
    return newArr;
  };

  return (
    <Fragment>
      {renderRowsFromArr(favoritsArr)}
      {dataToEdit && <MoreInfoPopupComponent {...dataToEdit} />}
    </Fragment>
  );
};

export default ShoppingCartPage;
