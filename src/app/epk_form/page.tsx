'use client';

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import FormDataManager from '@/components/FormDataManager';
import SegmentedLine from '@/components/SegmentedLine';
import NameField from '@/components/form/name_field';
import SubmitField from '@/components/form/submit_field';
import BioField from '@/components/form/bio_field';
import LocationField from '@/components/form/location_field';
import CareerField from '@/components/form/career_field';
import SpotifyField from '@/components/form/spotify_field';
import IgField from '@/components/form/ig_field';
import TiktokField from '@/components/form/tiktok_field';
import TwitterField from '@/components/form/twitter_field';
import NotableSongsField from '@/components/form/notable_songs_field';
import PhoneNumberField from '@/components/form/phone_number_field';
import ImageUploadField from '@/components/form/image_field';
import { useAuth } from '@/context/AuthProvider';

const EpkForm: NextPage = () => {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const pages = [
    // NameField,
    // ImageUploadField,
    // LocationField,
    // CareerField,
    // SpotifyField,
    // IgField,
    // TiktokField,
    // TwitterField,
    // NotableSongsField,
    // PhoneNumberField,
    BioField,
    SubmitField,
  ];

  useEffect(() => {
    setIsValid(false);
  }, [currentIndex]);

  const handleNextPage = () => {
    if (isValid) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentIndex === 0) {
      router.push('/');
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

    if (user === null) {
        return (
            <>
                <div className='min-h-screen flex justify-center items-center'>
                    <p>fetching user...</p>
                </div>
            </>
        );
    }

  if (pages.length <= 0) {
    return <h1>Form is empty</h1>;
  }

  const submitFieldIndex = pages.indexOf(SubmitField);
  const backgroundColor = currentIndex === submitFieldIndex ? '#15242d' : '#3ba0fc';

  return (
    <div className={'flex min-h-screen flex-col items-center justify-center px-4 md:px-8 lg:px-16'} style={{ backgroundColor: backgroundColor }}>
      <div className="w-full max-w-screen-md mx-auto">
        <SegmentedLine totalPages={pages.length} currentIndex={currentIndex} />
        <FormDataManager>
          {({ formData: formDataFromManager, updateFormData }) => {
            setFormData(formDataFromManager);
            const CurrentPage = pages[currentIndex];
            return (
              <>
                <CurrentPage
                  formData={formDataFromManager}
                  updateFormData={updateFormData}
                  onValidation={setIsValid}
                  user={user}
                />
                <div className="flex justify-between mt-4 md:mt-8 lg:mt-16">
                  <button
                    className="tapped_btn_rounded"
                    onClick={handlePreviousPage}
                  >
                    back
                  </button>

                  {isValid && currentIndex !== pages.length - 1 && (
                    <button
                      className="tapped_btn_rounded_black"
                      onClick={handleNextPage}
                      disabled={!isValid}
                    >
                      next
                    </button>
                  )}
                </div>
              </>
            );
          }}
        </FormDataManager>
      </div>
    </div>
  );
};

export default EpkForm;
