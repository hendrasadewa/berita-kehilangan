import { NextPage } from 'next';
import PersonInfoForm, { FormPayload } from '../../components/PersonInfoForm';
import SessionGuard from '../../components/SessionGuard';

const PostReportPage: NextPage = () => {
  const handleSubmit = (payload: FormPayload) => {
    
  }

  return (
    <SessionGuard>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <PersonInfoForm onSubmit={handleSubmit}/>
      </div>
    </SessionGuard>
  );
};

export default PostReportPage;
