import citiesWebp from '../../../assets/tapsi1400/cities.webp';
import cities from '../../../assets/tapsi1400/cities.png';

import dayWebp from '../../../assets/tapsi1400/day.webp';
import day from '../../../assets/tapsi1400/day.png';

import distWebp from '../../../assets/tapsi1400/dist.webp';
import dist from '../../../assets/tapsi1400/dist.png';

import fromFistTripWebp from '../../../assets/tapsi1400/fromFistTrip.webp';
import fromFistTrip from '../../../assets/tapsi1400/fromFistTrip.png';

import maxDistanceWebp from '../../../assets/tapsi1400/maxDistance.webp';
import maxDistance from '../../../assets/tapsi1400/maxDistance.png';

import maxDriverWebp from '../../../assets/tapsi1400/maxDriver.webp';
import maxDriver from '../../../assets/tapsi1400/maxDriver.png';

import maxPassengerWebp from '../../../assets/tapsi1400/maxPassenger.webp';
import maxPassenger from '../../../assets/tapsi1400/maxPassenger.png';

import maxTripsWebp from '../../../assets/tapsi1400/maxTrips.webp';
import maxTrips from '../../../assets/tapsi1400/maxTrips.png';

import minTripsWebp from '../../../assets/tapsi1400/minTrips.webp';
import minTrips from '../../../assets/tapsi1400/minTrips.png';

import nightWebp from '../../../assets/tapsi1400/night.webp';
import night from '../../../assets/tapsi1400/night.png';

import rateWebp from '../../../assets/tapsi1400/rate.webp';
import rate from '../../../assets/tapsi1400/rate.png';

import timeWebp from '../../../assets/tapsi1400/time.webp';
import time from '../../../assets/tapsi1400/time.png';

import tripsWebp from '../../../assets/tapsi1400/trips.webp';
import trips from '../../../assets/tapsi1400/trips.png';

export const cardImages = {
  ridesCityCount: {
    png: cities,
    webp: citiesWebp,
  },
  dayCity: {
    png: day,
    webp: dayWebp,
  },
  timeBasedRides_DAY: {
    png: day,
    webp: dayWebp,
  },
  lastYearRidesKms: {
    png: dist,
    webp: distWebp,
  },
  daysFromFirstRide: {
    png: fromFistTrip,
    webp: fromFistTripWebp,
  },
  longestRideKms: {
    png: maxDistance,
    webp: maxDistanceWebp,
  },
  mostRideDriver: {
    png: maxDriver,
    webp: maxDriverWebp,
  },
  mostRidePassenger: {
    png: maxPassenger,
    webp: maxPassengerWebp,
  },
  mostRideDay: {
    png: maxTrips,
    webp: maxTripsWebp,
  },
  leastRideDay: {
    png: minTrips,
    webp: minTripsWebp,
  },
  nightCity: {
    png: night,
    webp: nightWebp,
  },
  timeBasedRides_NIGHT: {
    png: night,
    webp: nightWebp,
  },
  lastYearRidesNps: {
    png: rate,
    webp: rateWebp,
  },
  lastYearRidesMinutes: {
    png: time,
    webp: timeWebp,
  },
  lastYearRides: {
    png: trips,
    webp: tripsWebp,
  },
};
