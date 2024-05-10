import { motion } from "framer-motion";

const TabContent = ({ content }) => {
  return (
    <motion.div
      className="mt-4 bg-gray-100 flex flex-wrap gap-5 rounded-md justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {content.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center mb-4 p-6 bg-white rounded-md shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {item.icon && (
            <item.icon
              className="w-8 h-8 mb-4 text-orange-500"
            />
          )}
          <div className="text-center">
            {item.title && (
              <p className="text-black font-semibold text-lg mb-2">{item.title}</p>
            )}
            {item.description && (
              <p className="text-gray-700">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TabContent;
