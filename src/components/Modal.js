import './Modal.css';

function Modal({ children, modalClose }) {
    return (
        <div className='modal-backdrop'>
            <div className="modal">
                {children}
                <button onClick={modalClose}>
                    <i class="bi bi-x-lg"></i> Close Modal
                </button>
            </div>
        </div>
    );
};

export default Modal;
