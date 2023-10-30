import React, { useEffect, useState } from 'react';

const CareerField = ({ formData, updateFormData, onValidation, user }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && user.occupations) {
      updateFormData({
        ...formData,
        career: user.occupations,
      });
    }
  }, [user]);

  const validateForUI = (value) => {
    if (Array.isArray(value) && value.length === 0) {
      setError('career cannot be empty');
      onValidation(false);
    } else {
      setError(null);
      onValidation(true);
    }
};

const justValidate = (value) => {
    if (Array.isArray(value) && value.length === 0) {
      onValidation(false);
    } else {
      onValidation(true);
    }
};

  useEffect(() => {
    justValidate(formData['career'] || '');
  }, [formData['career']]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const arrayValue = value.split(',').map(item => item.trim());

    updateFormData({
      ...formData,
      [name]: arrayValue,
    });
    validateForUI(arrayValue);
  };

  return (
    <div className="page flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start px-6">
        <h1 className="mb-2 text-2xl font-bold text-white">
          what is your career (ex. musician, rapper, sound engineer)?
        </h1>
        <div className="flex h-full w-full items-center justify-center">
          <input
            type="text"
            name="career"
            placeholder="type here..."
            value={formData['career'] ? formData['career'].join(', ') : ''}
            onChange={handleInputChange}
            className={`white_placeholder w-full appearance-none rounded ${
              error ? 'border-2 border-red-500' : ''
            } bg-[#63b2fd] px-4 py-2 leading-tight text-white focus:bg-white focus:text-black font-semibold focus:outline-none`}
          />
        </div>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default CareerField;
