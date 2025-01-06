import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin, isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      // const res = await axiosSecure.get("/users/admin/${user?.email}");
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default UseAdmin;
