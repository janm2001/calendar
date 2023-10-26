import React from "react";
import { useQuery } from "react-query";
import axiosClient from "../api/Api";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function CalendarPage() {
  const localizer = momentLocalizer(moment);
  const owner = "janm2001";
  const repo = "SpotASpot";
  const qCommits = useQuery(["commits"], () =>
    axiosClient.get(`/repos/${owner}/${repo}/commits`)
  );

  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date("2023-06-06")}
        defaultView="month"
        events={qCommits.data?.data.map((item) => ({
          start: item.commit?.author.date,
          end: item.commit?.author.date,
          title: item.commit?.message,
        }))}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default CalendarPage;
