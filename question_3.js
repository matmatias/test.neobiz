const FIRST_YEAR = 2010;
const MONTHS_AMOUNT_IN_A_YEAR = 12;

const mockedConsumptionData = [
  // 2010
  [120, 130, 110, 100, 90, 80, 85, 95, 105, 115, 125, 135],
  // 2011
  [125, 135, 115, 105, 95, 85, 80, 90, 100, 110, 120, 130],
  // 2012
  [110, 120, 100, 90, 80, 70, 75, 85, 95, 105, 115, 125],
  // 2013
  [105, 115, 95, 85, 75, 65, 70, 80, 90, 100, 110, 120],
  // 2014
  [130, 140, 120, 110, 100, 90, 95, 105, 115, 125, 135, 145],
  // 2015
  [115, 125, 105, 95, 85, 75, 80, 90, 100, 110, 120, 130],
  // 2016
  [100, 110, 90, 80, 70, 60, 65, 75, 85, 95, 105, 115],
  // 2017
  [95, 105, 85, 75, 65, 55, 60, 70, 80, 90, 100, 110],
  // 2018
  [120, 130, 110, 100, 90, 80, 85, 95, 105, 115, 125, 135],
  // 2019
  [125, 135, 115, 105, 95, 85, 80, 90, 100, 110, 120, 130],
];

// QUESTION 3.I
function getMonthAvg(consumptionData) {
  const yearsAmount = consumptionData.length;

  const monthsAvg = [];

  for (let col = 0; col < MONTHS_AMOUNT_IN_A_YEAR; ++col) {
    let monthAccumulator = 0;

    for (let row = 0; row < yearsAmount; ++row) {
      monthAccumulator += consumptionData[row][col];
    }

    const monthAvg = monthAccumulator / MONTHS_AMOUNT_IN_A_YEAR;
    monthsAvg.push(monthAvg);
  }

  return monthsAvg;
}
console.log(getMonthAvg(mockedConsumptionData));

// QUESTION 3.II
function getBiggestConsumptionMonthAndYear(consumptionData) {
  let biggestConsumption = 0;
  let biggestYearIndex;
  let biggestMonthIndex;

  for (let yearIndex = 0; yearIndex < consumptionData.length; ++yearIndex) {
    for (
      let monthIndex = 0;
      monthIndex < MONTHS_AMOUNT_IN_A_YEAR;
      ++monthIndex
    ) {
      if (consumptionData[yearIndex][monthIndex] > biggestConsumption) {
        biggestConsumption = consumptionData[yearIndex][monthIndex];
        biggestMonthIndex = monthIndex;
        biggestYearIndex = yearIndex;
      }
    }
  }

  const biggestYear = getYearFromYearIndex(biggestYearIndex);
  const biggestMonth = getMonthFromMonthIndex(biggestMonthIndex);

  return {
    month: biggestMonth,
    year: biggestYear,
    consumption: biggestConsumption,
  };
}
console.log(getBiggestConsumptionMonthAndYear(mockedConsumptionData));

function getYearFromYearIndex(yearIndex) {
  return FIRST_YEAR + yearIndex;
}

function getMonthFromMonthIndex(monthIndex) {
  return monthIndex + 1;
}
