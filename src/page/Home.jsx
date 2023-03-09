import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="container w-[90%] xl:max-w-5xl z-10 absolute inset-x-1/2 translate-x-[-50%]">
        <div className="flex flex-col justify-center items-center text-white mt-6 h-screen">
          <h1 className="font-bold text-2xl mb-5">yujin</h1>
          <p className="text-center leading-7">
            맛집 지도가 나타납니다!
          </p>
          <button className="btn glass mt-5" onClick={() => navigate("/place")}>
            구경하러 가기
          </button>
        </div>
      </div>
      <ul className="fade-in-out">
      </ul>
    </div>
  );
};

export default Home;