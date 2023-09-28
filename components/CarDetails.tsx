import { CarProps } from '@/types';
import Image from 'next/image';
import {Fragment} from 'react';
import { Dialog,Transition } from '@headlessui/react';



import React from 'react'
interface CarDetailsProps{
    isOpen : boolean;
    closeModal : () => void;
    car : CarProps;
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
    <div>
    
    </div>
  )
}

export default CarDetails
