import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asynctvload, removetvShow } from "../store/actions/tvAction";
import HorizontalCards from './templates/HorizontalCards';
import noimage from "/noimage.png"

const TvDetails = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asynctvload(id));

    return () => {
      dispatch(removetvShow());
    };
  }, [id]);
  const { info } = useSelector((state) => state.tv);
  console.log(info);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}) `,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-[190vh] px-[10%] "
    >
      {/* //part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-400 flex gap-10 items-center">
        <i
          onClick={() => {
            navigate(-1);
          }}
          className="hover:text-[#6556cd] text-2xl  ri-arrow-left-line"
        ></i>
        <a
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a href={info.detail.homepage}>
          <i className="ri-external-link-line"></i>
        </a>
        <a href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>
          Imdb
        </a>
      </nav>
      {/* //part 2  */}
      <div className="w-full flex">
        <img
          className=" h-[40vh] w-[26vw] rounded mr-10 object-cover shadow-[8px_17px_38px_2_rgba(0,0,0,.5)]"
          src={
            `https://image.tmdb.org/t/p/w500/${
              info.detail.backdrop_path || info.detail.profile_path
            }` || noimage.png
          }
          alt=""
        />
        <div className="ml-[5%] text-white ">
          <h1 className="text-5xl font-black text-white">
            {info.detail.original_title || info.detail.title || info.detail.name}
            <small className="text-2xl ml-1 text-zinc-300">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>
          <div className="flex gap-5 items-center mt-5">
            <span className=" bg-yellow-400 w-[7vh] h-[7vh] flex justify-center items-center rounded-full">
              <h1 className="text-xl font-semibold ">
                {(info.detail.vote_average * 10).toFixed()}
              </h1>
              <sup>%</sup>
            </span>
            <h1 className="text-white">
              Release Date:-{info.detail.first_air_date}
            </h1>
            <h2 className="text-gray-200">
              {info.detail.genres.map((e) => e.name).join(" , ")}
            </h2>
          </div>
          <p className="mt-5 text-sm text-gray-200 mb-7">
            {info.detail.overview}
          </p>
          <Link
            to={`${pathname}/trailer`}
            className="px-4 py-3 bg-[#6556cd] mt-10 rounded-lg"
          >
            <i className="ri-play-large-fill mr-1"></i>Watch Trailer
          </Link>
        </div>
      </div>

      {/* part 3 */}
      <div className="w-[45%] p-4 mt-4 flex flex-col gap-5 text-white ">
        {info.watchProvider && info.watchProvider.flatrate && (
          <div className="flex gap-x-5 items-center">
            <h1>Available on platform</h1>
            {info.watchProvider.flatrate.map((d,i) => (
              <img
              key={i}
                className="w-[5vh] h-[5vh] object-cover "
                src={`https://image.tmdb.org/t/p/w500/${d.logo_path}`}
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.buy && (
          <div className="flex gap-x-5 items-center">
            <h1>Movies from you Buy</h1>
            {info.watchProvider.buy.map((d,i) => (
              <img
              key={i}
                className="w-[5vh] h-[5vh] object-cover "
                src={`https://image.tmdb.org/t/p/w500/${d.logo_path}`}
              />
            ))}
          </div>
        )}
        {info.watchProvider && info.watchProvider.rent && (
          <div className="flex gap-x-4 items-center">
            <h1>Movies from you Rent</h1>
            {info.watchProvider.rent.map((d) => (
              <img
                className="w-[5vh] h-[5vh] object-cover "
                src={`https://image.tmdb.org/t/p/w500/${d.logo_path}`}
              />
            ))}
          </div>
        )}
      </div> 
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">Seasons</h1>
        <div className="w-[100%] flex overflow-x-auto gap-2 p-3">
            {info.detail.seasons.length > 0 ? info.detail.seasons.map((s , i)=>(
              <>
               <img 
               key={i}
            className=" h-[40vh] rounded mr-5 object-cover"
            src={
              `https://image.tmdb.org/t/p/w500/${
                s.backdrop_path || s.
                poster_path
              }` || noimage.png
            }
            alt=""
          />
          {/* <h1 className=" top-[60%] left-[2%] text-2xl font-semibold text-zinc-100">
            {s.name || s.original_name || s.title.slice(0, 30)}
          </h1> */}
              </>
            )): <h1 className='text-4xl text-white'>Nothing to show</h1> }
         </div>

      {/* part 4 */}
           <hr className="mt-5 mb-5 border-none h-[2px] bg-zinc-500" />
           <h1 className="text-3xl font-bold text-white">Recommendations & Similar Movies</h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ?  info.recommendations : info.similar
        }
      />
      <Outlet/>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default TvDetails
