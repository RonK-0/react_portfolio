import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { BiErrorCircle } from "react-icons/bi";

const ModalError = ({position}) => {
  return (
    <>
        <ModalWrapper position={position}>
            <div className="modal-main max-w-[400px] w-full">
                <div className="modal-header flex between-center bg-alert text-white p-3 px-4 rounded-t-md">
                    <h4 className='mb-0 text-white'>Alert</h4>
                    <button type='button'><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4 rounded-b-md bg-secondary text-content text-center">
                    <BiErrorCircle  className='text-4xl mx-a text-alert mb-3'/>
                    <h2 className='mb-2'>Server Error</h2>
                    <p className='mb-5'>Something went wrong!</p>
                    <button className="btn btn--alert btn-form w-full">Okay</button>
                </div>
            </div>
        </ModalWrapper>
    </>
  )
}

export default ModalError