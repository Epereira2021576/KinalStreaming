import './dashboardPage.css'
import { useEffect } from 'react';
import { useUserDetails } from '../../shared/hooks/';
import { useChannels } from '../../shared/hooks/useChannels';
import { LoadingSpinner } from '../../components/loadingSpinner';

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching } = useChannels();
  const { isLogged } = useUserDetails();

  useEffect( () => {
    getChannels( isLogged );
  }, [] );

  if ( isFetching ) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <Navbar />
      <Content channels={allChannels} getChannels={getChannels} />
    </div>
  );
};
