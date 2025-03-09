import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();
  return <div>{user?.fullName}</div>;
};

export default Dashboard;
