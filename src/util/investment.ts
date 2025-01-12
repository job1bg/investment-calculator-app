// Define the type for the input parameters
interface InvestmentInput {
  initialInvestment: number; // Initial investment amount
  annualInvestment: number; // Amount invested every year
  expectedReturn: number; // Expected annual rate of return (percentage)
  duration: number; // Investment duration in years
}

// Define the type for the annual data output
interface AnnualData {
  year: number; // Year identifier
  interest: number; // Interest earned during the year
  valueEndOfYear: number; // Investment value at the end of the year
  annualInvestment: number; // Investment added during the year
}

// Function to calculate investment results
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentInput): AnnualData[] {
  const annualData: AnnualData[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at the end of the year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// Currency formatter using the browser-provided Intl API
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

