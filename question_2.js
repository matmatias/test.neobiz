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
