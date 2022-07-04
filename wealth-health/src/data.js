import _ from "lodash";

export const US_STATES = [
  { value: "AK", label: "Alaska" },
  { value: "TX", label: "Texas" },
  { value: "AL", label: "Alabama" },
  { value: "AR", label: "Arkansas" },
  { value: "AZ", label: "Arizona" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DC", label: "DistrictofColumbia" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "IA", label: "Iowa" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "MA", label: "Massachusetts" },
  { value: "MD", label: "Maryland" },
  { value: "ME", label: "Maine" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MO", label: "Missouri" },
  { value: "MS", label: "Mississippi" },
  { value: "MT", label: "Montana" },
  { value: "NC", label: "NorthCarolina" },
  { value: "ND", label: "NorthDakota" },
  { value: "NE", label: "Nebraska" },
  { value: "NH", label: "NewHampshire" },
  { value: "NJ", label: "NewJersey" },
  { value: "NM", label: "NewMexico" },
  { value: "NV", label: "Nevada" },
  { value: "NY", label: "NewYork" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "RhodeIsland" },
  { value: "SC", label: "SouthCarolina" },
  { value: "SD", label: "SouthDakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VA", label: "Virginia" },
  { value: "VT", label: "Vermont" },
  { value: "WA", label: "Washington" },
  { value: "WI", label: "Wisconsin" },
  { value: "WV", label: "WestVirginia" },
  { value: "WY", label: "Wyoming" },
];

export const DEPARTMENT = [
  { value: "SA", label: "Sale" },
  { value: "MA", label: "Marketing" },
  { value: "EN", label: "Engineering" },
  { value: "HR", label: "Human Resources" },
  { value: "LE", label: "Legal" },
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const YEARS = _.range(1900, new Date().getFullYear() + 1, 1);
