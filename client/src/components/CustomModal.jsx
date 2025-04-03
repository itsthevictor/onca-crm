import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';
const CustomModal = ({ content, open, handleClose, backDropActive }) => {
  const CustomModal = styled.div`
    width: 100%;
    height: 100%;

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.85);
      z-index: 999;

      .content {
        /* max-width: 1200px;
        width: 80%; */
        margin: 0 auto;
        position: relative;

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 2rem;
          color: var(--grey-300);
          cursor: pointer;
          z-index: 1000;
          opacity: 0.7;
          transition: all 0.2s ease;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  `;

  return (
    <CustomModal>
      {open && (
        <div className='backdrop' onClick={backDropActive ? handleClose : null}>
          <div className='content'>
            {content}{' '}
            <div className='close' onClick={handleClose}>
              <RiCloseFill />
            </div>
          </div>
        </div>
      )}
    </CustomModal>
  );
};

export default CustomModal;
