import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TemplateLibrary.css"

export default function TemplateLibrary({ tData, setSelectedTemplate, selectedTags}) {
  function getImageFilePath(str) {
    return require(`../../images/templates/template${str}.png`);
  }

  function handleImageClick(index) {
    setSelectedTemplate(index + 1);
  }

  return (
    <div className="templates-wrapper">
      <AnimatePresence>
        {
          tData.map((data, index) => {
            const noTagsSelected = selectedTags.length === 0;
            return (noTagsSelected || data.relativity >= 1) && (
              <motion.div key={index} className="template"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <img
                  src={getImageFilePath(data.number.toString())}
                  alt={"template" + data.number.toString()}
                  className="template-image"
                  onClick={() => handleImageClick(index)}
                />
              </motion.div>
            );
          })
        }
      </AnimatePresence>
    </div>
  );
}