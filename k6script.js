
import http from "k6/http";
import { sleep, check } from "k6";


var randId = Math.floor(Math.random() * 1000000).toString();

export let options = {
  vus: 220,
  duration: "120s"
};

export default function() {
  let res = http.get(`http://localhost:3005/restaurants/${randId}/reviews`);
  sleep(.02);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};