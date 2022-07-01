import React from 'react'
interface cardTs {
  id: number;
  HeroImg: string;
  appName: string;
  appImg: string;
  description: string;
  text: string;
}
const DiscoverCardComponent: React.FC<{AppsData:cardTs[]}> = (props) => {
  return (
    <div className="bg-primary-gray-20 container--spacing--discover">
      <div className="mt-8 mb-5 grid grid-cols-1 grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-4">
        {props.AppsData?.map((item:cardTs) => {
          return (
            <div
              className="max-w-lg md:max-w-sm lg:max-w-sm xl:max-w-sm rounded-default overflow-hidden  shadow-md p-0"
              key={item.id}
            >
              <img
                className={`rounded-l-default rounded-r-default w-100`}
                src={item.HeroImg}
                alt="jio app"
              />
              <div className="p-3">
                <div className="w-full">
                  <p className="font-black text-lg  font-extrabold leading-4 tracking-tighter">
                    {item.appName}
                  </p>
                </div>
                <p className="text-gray-600 text-base tracking-tighter leading-6 mt-2">
                  {item.description}
                </p>
                <div className="mt-3">
                  <div className="hover:bg-brand-light rounded-default">
                    <p className="text-primary-blue font-bold text-base tracking-normal">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DiscoverCardComponent;
