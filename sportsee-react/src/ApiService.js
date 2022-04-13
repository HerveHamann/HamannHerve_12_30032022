import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./MockedData.js";

const path = "http://localhost:3001";

async function getUserData(id) {
  const res = await fetch(`${path}/user/${id}`);
  let userData = await res.json().catch((error) => {
    return USER_MAIN_DATA.find((item) => item.id === parseInt(id));
  });

  let userDataApi = userData.data;
  if (userDataApi === undefined) return userData;
  else return userDataApi;
}

async function getUserActivity(id) {
  const res = await fetch(`${path}/user/${id}/activity`);
  let userActivity = await res.json().catch((error) => {
    return USER_ACTIVITY.find((item) => item.userId === parseInt(id));
  });

  let userActivityApi = userActivity.data;
  if (userActivityApi === undefined) return userActivity;
  else return userActivityApi;
}

async function getUserSessions(id) {
  const res = await fetch(`${path}/user/${id}/average-sessions`);
  let userSessions = await res.json().catch((error) => {
    return USER_AVERAGE_SESSIONS.find((item) => item.userId === parseInt(id));
  });

  let userSessionsApi = userSessions.data;
  if (userSessionsApi === undefined) return userSessions;
  else return userSessionsApi;
}

async function getUserPerformance(id) {
  const res = await fetch(`${path}/user/${id}/performance`);
  let userPerformance = await res.json().catch((error) => {
    return USER_PERFORMANCE.find((item) => item.userId === parseInt(id));
  });

  let userPerformanceApi = userPerformance.data;
  if (userPerformanceApi.data === undefined) return userPerformance;
  else return userPerformanceApi;
}

export { getUserData, getUserActivity, getUserSessions, getUserPerformance };
