import React from 'react';
/* Create a new Context */
const CompanyContext = React.createContext();

/* A "smart" container to hold state */
export default class CompanyContainer extends React.Component {
  state = {
    companyName: 'Mega Corp',
    employees: 1234567890,
    name: 'J.C. Hiatt',
    teamName: 'Knights of the Night',
    teams: 50000,
    title: 'Founder @ DevLifts'
  }

  render() {
    const { companyName, employees, name, teamName, teams, title } = this.state;
    
    return (
      // Create a Provider from the Context, pass in state values
      <CompanyContext.Provider
        value={{
          companyName,
          employees,
          name,
          teamName,
          teams,
          title,
        }} >
        <Company />
      </CompanyContext.Provider>
    )
  }
}

/* Dumb Components */
const Company = () => (
  // Use the Consumer to pop out whatever you need from the Context
  <CompanyContext.Consumer>
    {({ companyName, employees, teams }) => (
      <React.Fragment>
        <h1>Company name: <span>{companyName}</span></h1>
        <p>Teams: <span>{teams}</span></p>
        <Team />
        
        <p>Employees: <span>{employees}</span></p>
        <Employee />

      </React.Fragment>
    )}
  </CompanyContext.Consumer>
)

const Team = () => (
  <CompanyContext.Consumer>
    {({ teamName }) => (
      <p>I'm on the <span>{teamName}</span> team.</p>
    )}
  </CompanyContext.Consumer>
)

const Employee = () => (
  <CompanyContext.Consumer>
    {({ name, title }) => (
      <p>I'm an employee. My name is <span>{name}</span>, and my title is <span>{title}</span>.</p>
    )}
  </CompanyContext.Consumer>
)