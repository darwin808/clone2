import miniImg1 from "../assets/Men/Denim/miniImg/mini1.jpg";
import miniImg2 from "../assets/Men/Denim/miniImg/mini2.jpg";
import miniImg3 from "../assets/Men/Denim/miniImg/mini3.png";
import miniImg4 from "../assets/Men/Denim/miniImg/mini4.png";
import miniImg5 from "../assets/Men/Denim/miniImg/mini5.png";
import miniImg6 from "../assets/Men/Denim/miniImg/mini6.png";
import miniImg7 from "../assets/Men/Denim/miniImg/mini7.png";
import miniImg8 from "../assets/Men/Denim/miniImg/mini8.png";
import miniImg9 from "../assets/Men/Denim/miniImg/mini9.jpg";
const initialState = {
  MiniMenImg: [
    miniImg1,
    miniImg2,
    miniImg3,
    miniImg4,
    miniImg5,
    miniImg6,
    miniImg7,
    miniImg8,
    miniImg9,
  ],
};

const MiniMenImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMINIIMGE":
      return {
        ...state,
        MiniMenImg: [...state.miniMenImg, action.payload],
      };
    default:
      return state;
  }
};
export default MiniMenImgReducer;
