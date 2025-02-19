import React from "react";
import { IoClose } from "react-icons/io5"; // Import IoClose from react-icons

type viewProp = {
  setView: React.Dispatch<React.SetStateAction<{ view: boolean; image: string }>>;
  enlarge: { view: boolean; image: string };
};

const Image_viewer: React.FC<viewProp> = ({ setView, enlarge }) => {
  const closeViewer = () => {
    setView((prev) => ({
      ...prev,
      view: false,
    }));

    console.log(enlarge.image);
  };

  return (
    <div className="image_viewer" style={{ display: enlarge.view ? "flex" : "none" }}>
      <div className="viewer_inner">
        <img src={enlarge.image} alt="" />
        <button className="close_viewer" onClick={closeViewer}>
          <IoClose size={30} color="#fff" /> {/* You can adjust the size and color here */}
        </button>
      </div>
    </div>
  );
};

export default Image_viewer;
