import React, { useEffect } from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div className='backdrop' onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img src={selectedImg} alt='enlarged pic'
                initial={{y: '-100vh'}}
                animate={{y: '0vh'}}
            ></motion.img>
        </motion.div>
    )
}

export default Modal;