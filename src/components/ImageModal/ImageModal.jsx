import Modal from 'react-modal';
import s from './ImageModal.module.css';

const customStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
	content: {
		padding: 0,
		border: '2px solid #fff',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: '90%',
		maxHeight: '90%',
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
};

const ImageModal = ({ isActive, onClose, image }) => {
	return (
		<Modal
			isOpen={isActive}
			onRequestClose={onClose}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			style={customStyles}
		>
			<div className={s.wrapperStyle}>
				<img
					className={s.imageStyle}
					src={image.urls.regular}
					alt={image.description ?? image.alt_description}
				/>

			</div>
		</Modal>
	);
}

export default ImageModal;
