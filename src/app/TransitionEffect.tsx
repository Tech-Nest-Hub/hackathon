'use client'
import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
    
        <>
          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }} />
          
          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-orange-500"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} />

          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-red-500"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.4 }} />

          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-5 bg-green-500"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.6 }} />
        </>
      
    </>
  );
};

export default TransitionEffect;