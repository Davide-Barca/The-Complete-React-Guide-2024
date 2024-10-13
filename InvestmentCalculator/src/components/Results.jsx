import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userData }) {
  const INITIAL_INVESTMENT = userData.initialInvestment;
  const ANNUAL_INVESTMENT = userData.annualInvestment;
  const EXPECTED_RETURN = userData.expectedReturn;
  const DURATION = userData.duration;

  const CALC_RESULTS = calculateInvestmentResults(userData);

  return (
    <>
      {CALC_RESULTS.length == 0 && <p className="center">No Duration Set!</p>}
      {CALC_RESULTS.length > 0 && (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {CALC_RESULTS.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.year}</td>
                  <td>{formatter.format(Math.round(row.valueEndOfYear))}</td>
                  <td>{formatter.format(Math.round(row.interest))}</td>
                  <td>
                    {formatter.format(
                      Math.round(
                        row.valueEndOfYear -
                          (INITIAL_INVESTMENT + row.annualInvestment * row.year)
                      )
                    )}
                  </td>
                  <td>
                    {formatter.format(
                      INITIAL_INVESTMENT + row.annualInvestment * row.year
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
