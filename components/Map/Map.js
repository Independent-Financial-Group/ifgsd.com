import React from "react";

import { createRoot } from "react-dom/client";
import {
  APIProvider,
  Map,
  InfoWindow,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

import Link from "next/link";

const MyMap = () => {
  const [markerRef, marker] = useMarkerRef();

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Map
        zoom={20}
        center={{ lat: 32.94817, lng: -117.23924 }}
        gestureHandling={"none"}
        disableDefaultUI={true}
      >
        <Marker
          ref={markerRef}
          position={{ lat: 32.94817, lng: -117.239256 }}
        />
        <InfoWindow anchor={marker}>
          <div className="flex flex-col gap-10 py-4 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-bold text-neon-orange-500 lg:text-xl">
                Independent Financial Group
              </h3>
              <p>12671 High Bluff Dr Suite 200, San Diego, CA 92130</p>
            </div>
            <div>
              <Link
                href="https://maps.google.com/maps/dir//Independent+Financial+Group+12671+High+Bluff+Dr+Suite+200+San+Diego,+CA+92130/@32.9481892,-117.2392203,20z/data=!4m5!4m4!1m0!1m2!1m1!1s0x80dc089ef7b05133:0xe7eb08641dc760a"
                passHref
              >
                <div className=" mx-auto flex w-1/2 flex-col items-center rounded bg-gray-200 p-2 font-bold text-hazard-blue-500 lg:w-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="uppercase">Directions</p>
                </div>
              </Link>
            </div>
          </div>
        </InfoWindow>
      </Map>
    </APIProvider>
  );
};

export default MyMap;
