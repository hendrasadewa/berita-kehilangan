import { NextPage } from 'next';
// components
import LocationForm from '../../components/LocationForm';
import PersonInfoForm from '../../components/PersonInfoForm';
import SessionGuard from '../../components/SessionGuard';

// types
import { Location } from '../../supabase/types/LocationTypes';
import { Person } from '../../supabase/types/LostPersonTypes';

const PostReportPage: NextPage = () => {
  const handleSubmit = (payload: Person) => {
    console.log(payload);
  };
  const handleSubmitLocation = (payload: Location) => {
    console.log(payload);
  };

  return (
    <SessionGuard>
      <div className="max-w-xl flex flex-col gap-4 m-auto py-4">
        <PersonInfoForm onSubmit={handleSubmit} />
        <LocationForm onSubmit={handleSubmitLocation} />
      </div>
    </SessionGuard>
  );
};

export default PostReportPage;
