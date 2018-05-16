const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })

};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  return this.journeys.filter(journey => journey.distance > minDistance);

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistanceTravelled = 0;
  this.journeys.forEach((journey) => {
    totalDistanceTravelled += journey.distance
  })
  return totalDistanceTravelled
};

Traveller.prototype.getUniqueModesOfTransport = function () {

  let uniqueArrayListOfTransport = [];
  this.journeys.forEach((journey) => {
    if (!uniqueArrayListOfTransport.includes(journey.transport)){
      uniqueArrayListOfTransport.push(journey.transport)
    }
  })
  return uniqueArrayListOfTransport;

};


module.exports = Traveller;
