"use client"

import { ReactNode } from "react"
import { useGlobalState } from "@/context/globalProvider"
import styled from "styled-components"

interface ModalProps {
 content: ReactNode
}

const Modal = ({ content }: ModalProps) => {
 const { closeModal } = useGlobalState()
 const { theme } = useGlobalState()

 return (
  <ModalStyled theme={theme}>
   <div className="modal-overlay" onClick={closeModal} />
   <div className="modal-content">{content}</div>
  </ModalStyled>
 )
}

export default Modal

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    filter: blur(4px);
  }

  .modal-content {
    margin: 0 1rem;

    padding: 2rem;
    position: relative;
    max-width: 630px;
    width: 100%;
    z-index: 100;

    border-radius: 1rem;
    background-color: ${(props) => props.theme.colorBg2};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    border-radius: ${(props) => props.theme.borderRadiusMd2};

    @media screen and (max-width: 450px) {
      font-size: 90%;
    }
  }
`;