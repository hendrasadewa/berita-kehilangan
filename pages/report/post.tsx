import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
// components
import LocationForm from '../../components/LocationForm';
import PersonInfoForm from '../../components/PersonInfoForm';
import SessionGuard from '../../components/SessionGuard';
import Tabview from '../../components/Tabview';
import TimePickerForm from '../../components/TimePickerForm';

// types
import { Location } from '../../supabase/types/LocationTypes';
import { Person } from '../../supabase/types/LostPersonTypes';

const PostReportPage: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const changeTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const handleSubmit = (payload: Person) => {
    console.log(payload);
  };

  const handleSubmitLocation = (payload: Location) => {
    console.log(payload);
  };

  const tabs = [
    {
      label: 'Person Info',
      name: 'PERSONAL_INFO',
    },
    {
      label: 'Location Info',
      name: 'LOCATION_INFO',
    },
    {
      label: 'Time Info',
      name: 'TIME_INFO',
    },
  ];

  return (
    <div>
      <Head>
        <title>Berita Kehilangan | Post a Report</title>
        <meta name="description" content="Lapor kehilangan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionGuard>
        <div className="max-w-xl flex flex-col gap-4 m-auto py-4">
          <h1 className="w-full text-center text-xl font-bold">Report Lost Person</h1>
          <Tabview tabs={tabs} initialTabIndex={0}>
            <PersonInfoForm onSubmit={handleSubmit} />
            <LocationForm onSubmit={handleSubmitLocation} />
            <TimePickerForm />
          </Tabview>
        </div>
      </SessionGuard>
    </div>
  );
};

export default PostReportPage;
