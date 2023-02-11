import { Modal } from "react-bootstrap";

const VideoModal = ({ show, handleClose,videoId = "oMhby921Ux4" }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <div className="video-modal-wrapper">
              <p>
              <video src='/assets/img/maria/video_just_loan.mp4' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls  allowFullScreen autoPlay controlsList="nodownload" style={{maxHeight: '80vh' , maxWidt: '80vw'}}></video>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoModal;