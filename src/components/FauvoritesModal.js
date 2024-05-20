import { CloseIcon } from "src/icons/CloseIcon";
import { Link } from "react-router-dom";

export const FauvoritesModal = ({ closeModal }) => {
  return (
    <div className="modal">
      <button className="modal__button" onClick={closeModal}>
        <CloseIcon />
      </button>
      <div className="modal__title">Добавлено в избранное</div>
      <Link to="/favoutites" className="modal__link">
        Перейти в избранное
      </Link>
    </div>
  );
};
