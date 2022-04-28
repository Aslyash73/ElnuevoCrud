import { useModal } from "../hooks/useModal";
import Modal from "./Modal";


const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Imagen bonita</h2>
      <button onClick={openModal1}>imagenes</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>fotico cute</h3>
        <p>varias fotos de animales</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      
      
    </div>
  );
};

export default Modals;
