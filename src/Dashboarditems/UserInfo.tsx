import { useGetMeQuery } from "../redux/api/getMeApi/getMeApi";
import { getToday } from "../lib/getToday";

const UserInfo = () => {
  const today = getToday();
  const { data, isLoading, error } = useGetMeQuery(undefined);

  const myself = data?.data;
  console.log("object", myself?.name);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching user data</p>;

  return (
    <div className="container mx-auto p-16">
      <div className="lg:flex mx-auto p-8  bg-slate-500 text-stone-100 font-semibold text-3xl space-y-4 ">
        <div className="hidden md:flex md:pr-10 xl:pr-14 pt-2 justify-center items-center">
          <img
            src={
              myself?.image ||
              "https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg"
            }
            alt="player image"
            className="w-full md:w-64 rounded-md"
          />
        </div>

        <div className="flex flex-col gap-4 justify-center text-center p-8 md:p-10 xl:p-14">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Welcome back, {myself?.name || ""}!
          </h2>

          <p className="">Today {today}</p>
          <p>Your email {myself?.email} </p>
          <p>Your Address: {myself?.address} </p>
          <p> {myself?.mobile} </p>
          <p className="text-2xl md:text-3xl xl:text-4xl">
            Keep your profile updated to access the latest features.
          </p>
          <h3>Thank so much for using our site.</h3>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
