# Neobiz test
This is an implementation for Neobiz's software developer test.

Check it out at [https://matmatias.github.io/test.neobiz/](https://matmatias.github.io/test.neobiz/).

## Test Resolution

### Question 1
- [!question 1 awnser](./img/question_1.png)

### Question 2
```js
const mockedData = [
  ["F", 0],
  ["A", 1],
  ["C", 1],
  ["A", 1],
  ["B", 0],
  ["B", 0],
  ["I", 1],
  ["I", 0],
  ["F", 1],
  ["F", 0],
  ["A", 0],
  ["C", 0],
  ["C", 1],
  ["C", 1],
  ["C", 1],
  ["B", 0],
  ["I", 1],
  ["I", 1],
  ["A", 0],
  ["B", 1],
];

function getCompaniesRank(data) {
  const isPaidByCompanies = [];

  for (let i = 0; i < data.length; ++i) {
    const company = data[i][0];
    const isPaid = data[i][1];

    if (!isCompanyInRank(company, isPaidByCompanies)) {
      isPaidByCompanies.push({ company: company, isPaidArr: [] });
    }

    const index = isPaidByCompanies.findIndex(
      (elem) => elem.company === company,
    );
    isPaidByCompanies[index].isPaidArr.push(isPaid);
  }

  const aggregatedIsPaidByCompanies = [];
  for (let i = 0; i < isPaidByCompanies.length; ++i) {
    const elem = isPaidByCompanies[i];

    const company = elem.company;
    const isPaidObservationAmount = elem.isPaidArr.length;
    const aggIsPaid =
      elem.isPaidArr.reduce((acc, curr) => acc + curr, 0) /
      isPaidObservationAmount;

    aggregatedIsPaidByCompanies.push({
      company: company,
      aggregatedIsPaid: aggIsPaid,
    });
  }

  return aggregatedIsPaidByCompanies.sort(
    (a, b) => b.aggregatedIsPaid - a.aggregatedIsPaid,
  );
}

function isCompanyInRank(company, isPaidByCompanies) {
  for (let i = 0; i < isPaidByCompanies.length; ++i) {
    const elem = isPaidByCompanies[i];

    if (elem.company === company) {
      return true;
    }
  }

  return false;
}

function printCompaniesRank(sortedCompanies) {
  console.log("RANKING DAS EMPRESAS");

  for (let i = 0; i < sortedCompanies.length; ++i) {
    const rank = i + 1;
    const company = sortedCompanies[i].company;
    // bankers round to two decimals
    const avg = Math.round(sortedCompanies[i].aggregatedIsPaid * 100) / 100;
    console.log(`TOP ${rank}: Empresa ${company} com ${avg} de média.`);
  }
}

const sortedCompanies = getCompaniesRank(mockedData);
printCompaniesRank(sortedCompanies);
```

### Question 3
```js
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

function printMonthAvg(monthsAvg) {
  for (let i = 0; i < monthsAvg.length; ++i) {
    const currYear = i + 2010;
    const monthAvg = monthsAvg[i];

    console.log(`Consumo médio de energia de ${currYear}: ${monthAvg}`);
  }
}

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

function getYearFromYearIndex(yearIndex) {
  return FIRST_YEAR + yearIndex;
}

function getMonthFromMonthIndex(monthIndex) {
  return monthIndex + 1;
}

function printBiggestConsumptionMonthAndYear(biggestConsumptionMonthAndYear) {
  const { month, year, consumption } = biggestConsumptionMonthAndYear;
  console.log(
    `O mês ${month} do ano ${year} teve o maior consumo, com um consumo de ${consumption}`,
  );
}

// QUESTION 3.I
const monthAvg = getMonthAvg(mockedConsumptionData);
console.log("QUESTÃO 3.1");
printMonthAvg(monthAvg);
// QUESTION 3.II
console.log("QUESTÃO 3.2");
const biggestConsumptionMonthAndYear = getBiggestConsumptionMonthAndYear(
  mockedConsumptionData,
);
printBiggestConsumptionMonthAndYear(biggestConsumptionMonthAndYear);
```

### Question 4
- [!question 4 awnser](./img/question_4.png)

### Question 5
```sql
SELECT V.placa, V.cidade 
FROM Veiculo as V 
JOIN Representate_legal as R 
ON V.representante_legal_id = R.id
WHERE R.nome = "Joaquim Silva"
```

## Requirements
- [Python](https://www.python.org/) ^3.9.2
- [pip](https://pip.pypa.io/en/stable/)
- [venv](https://docs.python.org/pt-br/3/library/venv.html)

## Run the web page locally
To run the html page on a local server, run:
```bash
python -m http.server
```

Now, access http://localhost:8000 on your browser.

## Run the questions 2 and 3 Scripts locally
If you wish to execute the javascript scripts locally, you will need [NodeJS](https://nodejs.org/en)

To execute question 2 script, run:
```bash
node src/question_2.js
```

To execute question 3 script, run:
```bash
node src/question_3.js
```

The script from question 5 cannot be run because I didn't bother to setup a database with Docker, for example. This can be done in the future, but I do not guarantee that I'll do it.

I also could have setup Docker to use python and nodejs in this project, but I didn't bother to do it for now.
