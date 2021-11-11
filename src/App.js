import "./App.css";
import JobForm from "./components/JobForm";
import ApplicantForm from "./components/ApplicantForm";
import SearchPage from "./components/SearchPage";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ApplicantDetailsPage from "./components/ApplicantDetailsPage";

function App() {
  return (
    <div>
      {/* <Dashboard />
      <JobForm />
      <ApplicantForm />
      <SearchPage /> */}

      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/job-form" component={JobForm}></Route>
          <Route path="/applicant-form" component={ApplicantForm}></Route>
          <Route path="/search-page" component={SearchPage}></Route>
          <Route
            path="/applicant-details-page/:id"
            component={ApplicantDetailsPage}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
