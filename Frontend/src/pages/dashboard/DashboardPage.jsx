import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { useUserDetails } from "../../shared/hooks";
import { useChannels } from "../../shared/hooks/useChannels";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import "./dashboardPage.css";
import { Content } from "../../components/dashboard/Content";

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching } = useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Navbar />
      <Content channels={allChannels} getChannels={getChannels}/>
    </div>
  );
};
