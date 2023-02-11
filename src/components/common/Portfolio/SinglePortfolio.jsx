import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from "react";

const SinglePortfolio = ({ item, index, portfolios }) => {
  const [photoIndex, setPhotoIndex] = useState(index);
  const [open, setOpen] = useState(false);
  const lightboxImages = portfolios.map(img => img.img);
  const images = lightboxImages;

  return (
    <>

      <motion.div animate={{ scale: 1 }}
        initial={{ scale: 0.9 }}
        exit={{ scale: 1 }}
        transition={{ duration: 0.8 }} layout
        key={item.id} className="tp-creative-item">
        <div className="tp-creative-item__thumb">
          <img src={item.img} alt="creative-img" />
        </div>
        <div className="tp-creative-item__content">
          <div className="top-icon" onClick={setOpen}>
            <button className="popup-image" onClick={() => setPhotoIndex(index)}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="creative-info">
            <span className="creative-catagory">WEBSITE DESIGN</span>
            <h5 className="tp-creative-item-title">
              <Link href={`/portfolio-details/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </h5>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SinglePortfolio;