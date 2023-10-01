import React, { Dispatch, FC, SetStateAction } from 'react';
import ReactNativeModal, { ModalProps } from 'react-native-modal';

interface ComponentProps extends Partial<ModalProps> {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const BaseModal: FC<ComponentProps> = ({
  setIsVisible = () => {},
  ...props
}) => {
  return (
    <ReactNativeModal
      {...props}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      animationInTiming={1}
      animationOutTiming={1}
      onBackdropPress={setIsVisible.bind(this, false)}>
      {props.children}
    </ReactNativeModal>
  );
};

export default BaseModal;
