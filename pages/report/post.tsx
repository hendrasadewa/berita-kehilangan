import { NextPage } from 'next';
import SessionGuard from '../../components/SessionGuard';

const PostReportPage: NextPage = () => {
  return (
    <SessionGuard>
      <div className="min-h-screen">
        <span className="text-2xl">Post Report</span>
      </div>
    </SessionGuard>
  );
};

export default PostReportPage;
