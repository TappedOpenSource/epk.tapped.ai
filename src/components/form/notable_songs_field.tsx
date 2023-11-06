import React, { useEffect, useState } from 'react';

const NotableSongsField = ({ formData, updateFormData, onValidation, user }) => {
  const [error, setError] = useState<string | null>(null);

  const validateForUI = (value) => {
    if (value.length === 0) {
      setError('notable songs cannot be empty');
      onValidation(false);
    } else {
      setError(null);
      onValidation(true);
    }
  };

  const justValidate = (value) => {
    if (value.length === 0) {
      onValidation(false);
    } else {
      onValidation(true);
    }
  };

  useEffect(() => {
    justValidate(formData['notableSongs'] || []);
  }, [formData['notableSongs']]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
    validateForUI(value);
  };

  return (
    <div className="page flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start">
        <h1 className="mb-2 text-2xl font-bold text-white">
          what are your most streamed songs?
        </h1>
        <div className="flex h-full w-full items-center justify-center">
          <input
            type="text"
            name="notableSongs"
            placeholder="type here..."
            value={formData['notableSongs'] || ''}
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

export default NotableSongsField;
