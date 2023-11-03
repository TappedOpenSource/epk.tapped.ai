import { useAuth } from '@/context/AuthProvider';
import { aiEnhanceBio } from '@/utils/api';
import React, { useEffect, useState } from 'react';

  const EnhancedButton = ({ loading, enhanced, onClick }: {
    loading: boolean;
    enhanced: boolean;
    onClick: () => void;
  }) => {
    if (loading) {
      return <p className='text-white'>loading...</p>
    }

    if (enhanced) {
      return <p className='text-white'>enhanced!</p>
    }

    return (
      <button
        onClick={onClick}
        className='bg-purple-300 text-gray-600 font-extrabold px-4 py-2 rounded-lg'
      >
        Ai-enhance
      </button>
    );
  }

const BioField = ({ formData, updateFormData, onValidation, user }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enhancded, setEnhanced] = useState(false);

  useEffect(() => {
    if (user && user.bio) {
      updateFormData({
        ...formData,
        bio: user.bio,
      });
    }
  }, [user]);

  const validateForUI = (value) => {
    if (value.trim() === '') {
      setError('Bio cannot be empty');
      onValidation(false);
    } else {
      setError(null);
      onValidation(true);
    }
  };

  const justValidate = (value) => {
    if (value.trim() === '') {
      onValidation(false);
    } else {
      onValidation(true);
    }
  };

  useEffect(() => {
    justValidate(formData['bio'] || '');
  }, [formData['bio']]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
    validateForUI(value);
  };

  const handleAiEnhance = async () => {
    setLoading(true);
    try {
      const betterBio = await aiEnhanceBio({
        userId: user.id,
      });
      updateFormData({
        ...formData,
        bio: betterBio,
      });
      validateForUI(betterBio);
      setEnhanced(true);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }



  return (
    <div className="page flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start">
        <h1 className="mb-2 text-2xl font-bold text-white">
          what&apos;s your bio?
        </h1>
        <div className="flex flex-col h-full w-full items-center justify-center">
          <div className={`white_placeholder w-full appearance-none rounded ${error ? 'border-2 border-red-500' : ''
            } bg-[#63b2fd] px-4 py-2 leading-tight text-white focus:bg-white focus:text-black font-semibold focus:outline-none`}>
            <textarea
              name="bio"
              placeholder="type here..."
              value={formData['bio'] || ''}
              onChange={handleInputChange}
              className={`min-h-[200px] w-full h-full bg-transparent text-white font-semibold focus:outline-none`}
            />
            <div className='flex justify-end'>
              <EnhancedButton 
                loading={loading} 
                enhanced={enhancded}
                onClick={handleAiEnhance}
              />
            </div>
          </div>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default BioField;
