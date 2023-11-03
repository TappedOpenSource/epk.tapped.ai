import React, { useEffect, useState } from 'react';

const SpotifyField = ({ formData, updateFormData, onValidation, user }) => {
  const [error, setError] = useState(null);

  const validateForUI = (value) => {
    if (value.trim() === '') {
      setError('spotify cannot be empty');
      onValidation(false);
    } else {
      setError(null);
      onValidation(true);
    }
  };

  useEffect(() => {
    const justValidate = (value) => {
      if (value.trim() === '') {
        onValidation(false);
      } else {
        onValidation(true);
      }
    };

    justValidate(formData['spotifyId'] || '');
  }, [formData, onValidation]);

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
          what is your spotify id?
        </h1>
        <div className="flex h-full w-full items-center justify-center">
          <input
            type="text"
            name="spotifyId"
            placeholder="type here..."
            value={formData['spotifyId'] || ''}
            onChange={handleInputChange}
            className={`white_placeholder w-full appearance-none rounded ${error ? 'border-2 border-red-500' : ''
              } bg-[#63b2fd] px-4 py-2 leading-tight text-white focus:bg-white focus:text-black font-semibold focus:outline-none`}
          />
        </div>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default SpotifyField;
