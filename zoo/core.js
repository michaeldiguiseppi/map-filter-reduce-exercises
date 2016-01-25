function entryCalculator (entrants) {
  // your code here
};

function schedule (dayName) {
  // your code here
};

function animalCount (species) {
  // your code here
};

function animalMap (options) {
  // your code here
  function formatSpeciesInfo (options) {
    if (!options || !options.includeNames ) {
      return species.name;
    };

    var name = species.name;
    var result = {};
    result[name] = species.residents;

    if ( options.sex ) {
      result[name] = result[name].filter(function (resident) {
        return resident.sex === options.sex;
      });
    }

    result[name] = result[name].map(function (animal) {
      return animal.name;
    });

    return result;
  }


  return zooData.animals.reduce(function (result, species) {
    var speciesInfo = formatSpeciesInfo(species);

    if (result[species.location] ) {
      result[species.location].push(speciesInfo);
    } else {
      result[species.location] = [speciesInfo];
    };
    return result;
  }, {});
};

function animalPopularity (rating) {
  // your code here
};

function animalsByIds (ids) {
  // your code here
};

function animalByName (animalName) {
  // your code here
};

function employeesByIds (ids) {
  // your code here
};

function employeeByName (employeeName) {
  // your code here
};

function managersForEmployee (idOrName) {
  // your code here
};

function employeeCoverage (idOrName) {
  // your code here
};


module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}