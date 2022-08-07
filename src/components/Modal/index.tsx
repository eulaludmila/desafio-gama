import { ContainerModal, ContainerInfo, Info } from './style';
import close from '../../assets/images/close.png'

interface ModalProps {
  closeModal: () => void;
}

const Modal = (props: ModalProps) => {
  
  const stopPropagation = (e: any) => {
    e.stopPropagation();
  }

  return (
    <ContainerModal onClick={props.closeModal}>
      <ContainerInfo onClick={stopPropagation}>
        <img src={close} alt="Fechar" onClick={props.closeModal}/>
        <Info>
          <h2 className='title'>Parabéns</h2>
          <p className='message'>Sua compra foi realizada com sucesso, enviamos um email como todas as informações do seu pedido!</p>
        </Info>
      </ContainerInfo>
    </ContainerModal>
  )
}

export default Modal;