import React, { useCallback, useEffect, useState } from "react";
import L from "leaflet";
import "./ShowCrimes.css";
import useSupercluster from "use-supercluster";
import { Marker, useMap } from "react-leaflet";
import Geocode from "react-geocode";
import {GiPositionMarker} from 'react-icons/gi';
import location from "../../Logo/location-icon-png-4250.png";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';



// set response language. Defaults to english.
Geocode.setLanguage("en");


const icons = {};
const fetchIcon = (count, size) => {
  if (!icons[count]) {
    icons[count] = L.divIcon({
      html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
    });
  }
  return icons[count];
};
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });


function ShowCrimes(props) {
  
  const history = useHistory();
  const dispatch=useDispatch();
  const [cityDetail,setCityDetail]=useState([]);
  const [cityDetailGraphql,setCityDetailGraphql]=useState();


  const [candidates,setCandidates]=useState([]);
  const city=[];
  const userCity=[];

  function for_users(){
        // fetch(`/getUserstest?sal=${props.sal}&skill=${skill}`, {
        //   method: 'GET',
          
        // })
        fetch(`${localStorage.getItem('api')}/getUserstest`, {
        method:"Post",
        headers:{
        "Content-type": "application/json"
        },
        body: JSON.stringify({props})
      })
        .then(response => response.json())
        .then(result => {
          setCandidates(result);
          
          result.map(user=>(user.cities.map(city=>{
            userCity.push(city);
            })
           
          ));
          setCityDetail(userCity);
        })
  }
  
 
  

  const maxZoom = 22;
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(12);
  const map = useMap();
  //map.attributionControl.setPrefix('');
  map.attributionControl=false;
  //var map = L.map('map', { attributionControl:false });
  // get map bounds
  function updateMap() {

    
    console.log("updating");
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
  }

  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  React.useEffect(() => {
    
    updateMap();
  }, [map]);
  //graphql test
    //implementing graphql endpoint
const GET_USERS = gql`
query GETUSER($filter: FiltersInput ){
  user(filter: $filter){
    cities {
      city
      lng
      lat
    }
}
}
`;
let userCityGraphql=[];
const { loading, error, data } = useQuery(GET_USERS, {
variables: { filter:props},
});

if (loading)
{
  console.log("wait");
}
else
{
  data.user.map(city=>{
    userCityGraphql.push(city.cities);
    })
   
  
}
useEffect(()=>{
  console.log("graph"+(cityDetailGraphql));

})

  //yaha tk
  useEffect(()=>{
    console.log("showcrime rerender");
    setCityDetail([]);
    for_users();
    setCityDetailGraphql(userCityGraphql);
    //console.log(cityDetail);
  },[props.sal,props.skills,props.experience]);
  
  
  useEffect(() => {
   
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  // const points = data.map((crime) => ({
  //   type: "Feature",
  //   properties: { cluster: false, crimeId: crime.id, category: crime.category },
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       parseFloat(crime.location.longitude),
  //       parseFloat(crime.location.latitude),
  //     ],
  //   },
  // }));

  const points=cityDetail.map((detail)=>({
     type: "Feature",
     properties: { cluster: false,cityName:detail.city },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(detail.lng),
          parseFloat(detail.lat),
        ],
      },    

  }));

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 75, maxZoom: 17 },
  });

  console.log(clusters.length);
  
  return (
    <>
    
      {clusters.map((cluster) => {
        // every cluster point has coordinates
        const [longitude, latitude] = cluster.geometry.coordinates;
        // the point may be either a cluster or a crime point
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        // we have a cluster to render
        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcon(
                pointCount,
                10 + (pointCount / points.length) * 40
              )}
              eventHandlers={{
                click: () => {
                  
  dispatch({type:'CITIES',payload:supercluster.getLeaves(cluster.id,Infinity)});
                  
                  console.log(supercluster.getLeaves(cluster.id,Infinity));
                  props.setLocation(city);
                  console.log(props.location);
                  console.log(city);
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    maxZoom
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                  history.push('/showcandidates');
                },
              }}
            />
          );
        }

        // we have a single point (crime) to render
        return (
          <>
          {/* <Marker
            key={`crime-${cluster.properties.cityName}`}
            position={[latitude, longitude]}
            
          /> */}
          <Marker position={[latitude, longitude]}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}   />
          </>
        );
      })}
    </>
  );
}

export default ShowCrimes;
