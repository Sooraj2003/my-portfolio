
import { motion } from 'framer-motion';

const Popover = ({ message, type, onClose }) => {
  return (
    <motion.div 
      className={`fixed top-5 right-5 px-6 py-4 z-40 text-white rounded-lg ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button onClick={onClose} className="ml-4 font-bold">X</button>
      </div>
    </motion.div>
  );
};

export default Popover;
