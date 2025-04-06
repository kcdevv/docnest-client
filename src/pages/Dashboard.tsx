import { useUser } from "@clerk/clerk-react";
import Upload from "../components/Upload";

const Dashboard = () => {
  const { user } = useUser();
  return <div>{user?.fullName}
    <div>
      <Upload />
    </div>
  </div>;
};

export default Dashboard;
