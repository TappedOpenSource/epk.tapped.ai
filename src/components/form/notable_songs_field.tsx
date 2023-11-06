import { useEffect, useState } from 'react';

const NotableSongsField = ({ formData, updateFormData, onValidation, user }) => {
  const [error, setError] = useState<string | null>(null);

  const validateForUI = (value) => {
    if (value.length === 0) {
      setError('Fields cannot be empty');
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
    justValidate(formData['notableSongs1'] || '');
    justValidate(formData['notableSongs2'] || '');
    justValidate(formData['notableSongs3'] || '');
  }, [formData['notableSongs1'], formData['notableSongs2'], formData['notableSongs3']]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
    validateForUI(value);
  };

  const inputRow = (songKey, playsKey, index) => (
    <div className="flex w-full items-center justify-center p-2" key={`song-row-${index}`}>
      <label htmlFor={songKey} className="flex w-[60%] items-center">
        <span className="mr-2 font-semibold text-white">song</span>
        <input
          type="text"
          id={songKey}
          name={songKey}
          placeholder={`type here...`}
          value={formData[songKey] || ''}
          onChange={handleInputChange}
          className={`white_placeholder flex-grow appearance-none rounded ${
            error ? 'border-2 border-red-500' : ''
          } bg-[#63b2fd] px-4 py-2 leading-tight text-white focus:bg-white font-semibold focus:text-black focus:outline-none`}
        />
      </label>
      <label htmlFor={playsKey} className="flex w-[40%] items-center">
        <span className="mx-2 font-semibold text-white">plays</span>
        <input
          type="number"
          id={playsKey}
          name={playsKey}
          placeholder={`type here...`}
          value={formData[playsKey] || ''}
          onChange={handleInputChange}
          className={`white_placeholder flex-grow appearance-none rounded ${
            error ? 'border-2 border-red-500' : ''
          } bg-[#63b2fd] px-4 py-2 leading-tight text-white focus:bg-white font-semibold focus:text-black focus:outline-none`}
        />
      </label>
    </div>
  );

  return (
    <div className="page flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start">
        <h1 className="mb-2 text-2xl font-bold text-white">
          What are your most streamed songs?
        </h1>
        {Array.from({ length: 3 }, (_, i) => inputRow(`notableSongs${i + 1}`, `plays${i + 1}`, i + 1))}
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default NotableSongsField;
