import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation'; 
import * as Permissions from 'react-native-permissions'; 

const initialLng =  73.15444065565896; 
const initialLat = 33.6486208565573; 
const APIKEY = "pk.eyJ1IjoibWFsaWt6ZWUwMTAiLCJhIjoiY2xoMDVuOXYwMHFxNzNocGNzd3JiNjNoYSJ9.E_VTQLhHImwo1JzUpsXyUQ";
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(APIKEY);

const ViewMap = () => {
  ///
  const bins = {
    "type": "FeatureCollection",
    "features": [
      {
        "id": "1",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15536777729986, 33.65150784410713]
        },
      },
      {
        "id": "2",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15672768319664, 33.6519412780128]
        },
      },
      {
        "id": "3",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15631113938977, 33.65152628066102]
        },
      },
      {
        "id": "4",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15613163649215, 33.651135338930004]
        },
      },
      {
        "id": "5",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15547533869147, 33.65098514179134]
        },
      },
      {
        "id": "6",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.1556984414035, 33.650863589449756]
        },
      },
      {
        "id": "7",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15566456620599, 33.65041151467078]
        },
      },
      {
        "id": "8",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15507322525463, 33.65028224093004]
        },
      },
      {
        "id": "9",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15530705865626, 33.64956405479859]
        },
      },
      {
        "id": "10",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15481434592002, 33.64971201442877]
        },
      },
      {
        "id": "11",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [73.15547735448706, 33.64886912902922]
        },
      },
      {
        "id": "12",
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates":  [73.15615324254657, 33.64792394894749]
        },
      }
    ]
  };
  
  ///
  
  const [selectedLocation, setSelectedLocation] = useState([initialLng, initialLat]);
  const [routeCoords, setRouteCoords] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // User's location
  const mapRef = useRef(null);
console.log("selected", selectedLocation);
  useEffect(() => {
    requestLocationPermissions();
    getUserLocation(); 
  }, []);
  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation([position.coords.longitude, position.coords.latitude]);
      },
      error => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
  const requestLocationPermissions = async () => {
    if (Platform.OS === 'android') {
      const response = await Permissions.requestMultiple(['android.permission.ACCESS_FINE_LOCATION', 'android.permission.ACCESS_COARSE_LOCATION']);
      const granted = response['android.permission.ACCESS_FINE_LOCATION'] === 'granted' &&
                      response['android.permission.ACCESS_COARSE_LOCATION'] === 'granted';
      if (!granted) {
        console.warn('Location permissions not granted.');
      }
    }
  };

  const handleMapPress = async (event) => {
    setSelectedLocation(event.geometry.coordinates);
  };

  useEffect(() => {
    if (userLocation && selectedLocation) {
      createRouterLine(userLocation, selectedLocation);
    }
  }, [userLocation, selectedLocation]);
  
  const makeRouterFeature = (coordinates = []) => {
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates,
          },
        },
      ],
    };
  };

  const createRouterLine = async () => {
    const startCoords = `${userLocation[0]},${userLocation[1]}`;
    const endCoords = `${selectedLocation[0]},${selectedLocation[1]}`;
    const geometries = "geojson";
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${startCoords};${endCoords}?alternatives=true&geometries=${geometries}&steps=false&overview=full&access_token=${APIKEY}`;
    
    
    try {
      let response = await fetch(url);
      let json = await response.json();
      let routes = json["routes"];
      
      if (routes.length > 0) {
        console.log("Routes Array Before Sorting:", routes);

        // Sort the routes based on distance
        routes.sort((a, b) => a.distance - b.distance);

        // Log the routes array after sorting
        console.log("Routes Array After Sorting:", routes);
        
        // Get the coordinates of the shortest route
        let shortestCoordinates = routes[0]["geometry"]["coordinates"];
        
        if (shortestCoordinates.length) {
          const routerFeature = makeRouterFeature(shortestCoordinates);
          setRouteCoords(shortestCoordinates);
        }
      }
    } catch (error) {
      console.error('Error fetching and displaying route:', error);
    }
  };

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        ref={mapRef}
        zoomEnabled={true}
        styleURL='mapbox://styles/mapbox/streets-v11'
        style={styles.map}
        onPress={handleMapPress}>
        <MapboxGL.Camera
          zoomLevel={15}
          centerCoordinate={selectedLocation}
          pitch={60}
          animationMode='flyTo'
          animationDuration={6000}
        />
        <MapboxGL.PointAnnotation
          id="marker"
          coordinate={selectedLocation} 
        />
        <MapboxGL.ShapeSource id="binSource" shape={bins}>
          <MapboxGL.SymbolLayer
            id="binLayer"
            style={{
              iconImage: 'https://cdn.pixabay.com/photo/2021/02/25/18/24/recycle-bin-6049740_960_720.png', // Replace with your bin icon image
              iconSize: 0.03,
              iconAllowOverlap: true,
            }}
          />
        </MapboxGL.ShapeSource>
        <MapboxGL.ShapeSource id="routeSource" shape={{ type: 'LineString', coordinates: routeCoords }}>
          <MapboxGL.LineLayer id="routerLin01" style={{ lineColor: 'magenta', lineWidth: 4 }} />
        </MapboxGL.ShapeSource>
        
        <MapboxGL.UserLocation />
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default ViewMap;
