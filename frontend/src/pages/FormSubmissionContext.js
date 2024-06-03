import React, { createContext, useContext, useState } from 'react';

const FormSubmissionContext = createContext();

export const useFormSubmission = () => {
  return useContext(FormSubmissionContext);
};

export const FormSubmissionProvider = ({ children }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateFormSubmission = () => {
    setFormSubmitted(true);
  };

  return (
    <FormSubmissionContext.Provider value={{ formSubmitted, updateFormSubmission }}>
      {children}
    </FormSubmissionContext.Provider>
  );
};
