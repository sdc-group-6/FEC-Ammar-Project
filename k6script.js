
import http from "k6/http";
import { sleep } from "k6";

var randId = Math.floor(Math.random() * 100000).toString();

export let options = {
  vus: 200,
  duration: "30s"
};

export default function() {
  http.get(`http://localhost:3005/restaurants/${randId}`);
  sleep(.1);
};