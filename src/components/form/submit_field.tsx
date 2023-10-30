import { EpkForm } from '@/types/epk_form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const SubmitField = ({ formData, updateFormData, onValidation }: {
  formData: EpkForm;
  updateFormData: (key: string, value: any) => void;
  onValidation: (isValid: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = async () => {
    // router.push(`/preview?client_reference_id=${id}`);
  };
  return (
    <div style={{ backgroundColor: '#15242d', height: '100vh' }} className="flex items-center justify-center">
      <div className="text-center">
        <div>
          <p className="text-lg font-bold text-white mb-4">
            ready for your epk?
          </p>
        </div>
        <div className="flex items-center justify-center w-[60%] mx-auto">
          {loading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          )}
          {!loading && (
            <button
              onClick={handleButtonClick}
              className='tapped_btn_rounded'
            >
              submit
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default SubmitField;
