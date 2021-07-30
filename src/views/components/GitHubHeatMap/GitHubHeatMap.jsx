import React, { useRef, useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import './style.css';


const GitHubHeatMap = (props) => {
  const {
    userName,
    responsive = true,
    tooltips = true,
    summary_text,
    proxy,
    global_stats = true,
    cache,
  } = props;
  const ref = useRef(null);
  useEffect(() => {
    GithubCalendar(ref.current, userName, {
      cache,
      global_stats,
      proxy,
      responsive,
      summary_text,
      tooltips,
    });
  }, [
    cache,
    global_stats,
    proxy,
    responsive,
    summary_text,
    tooltips,
    userName,
  ]);
  return (
    <div ref={ref} id="github-container" className="lg:w-3/5">
     loading
    </div>
  );
};

export default GitHubHeatMap;