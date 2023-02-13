import * as React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import * as Helpers from "./Helpers";

function App() {
  const [apiKey, setApiKey] = React.useState("");
  const [dateRangeStart, setDateRangeStart] = React.useState(
    new Date().toJSON().slice(0, 10)
  );
  const [dateRangeEnd, setDateRangeEnd] = React.useState(
    new Date().toJSON().slice(0, 10)
  );

  const handleApiKeyChange = (e) => setApiKey(e.target.value);
  const handleDateRangeStartChange = (libDateObj) => {
    setDateRangeStart(Helpers.formatDateLib(libDateObj));
  };
  const handleDateRangeEndChange = (libDateObj) => {
    setDateRangeEnd(Helpers.formatDateLib(libDateObj));
  };

  return (
    <div className="d-flex flex-column mt-5">
      <h1 className="text-center mb-5">Clockify Reports Exporter</h1>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column w-75">
          <div className="ms-5 d-flex flex-column gap-3">
            <div className="d-flex">
              <div className="h5 ms-3 w-25 d-flex align-items-center">
                Enter your api key :
              </div>
              <input
                type="text"
                className="form-control mb-3 w-50"
                value={apiKey}
                onChange={handleApiKeyChange}
              />
            </div>
            <div className="d-flex">
              <div className="h5 ms-3 w-25 d-flex align-items-center">
                Enter Time Range Start :
              </div>
              <div className="mb-3 w-50">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    inputFormat="DD-MM-YYYY hh:mm a"
                    value={dateRangeStart}
                    onChange={handleDateRangeStartChange}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="d-flex">
              <div className="h5 ms-3 w-25 d-flex align-items-center">
                Enter Time Range End :
              </div>
              <div className="mb-3 w-50">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    inputFormat="DD-MM-YYYY hh:mm a"
                    value={dateRangeEnd}
                    onChange={handleDateRangeEndChange}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-4 mb-5">
          <button
            type="submit"
            // onClick={0}
            className="btn btn-primary btn-lg"
            // disabled={0}
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
