import * as Data from "./Data";

export function getAccount() {
  return fetch(`${Data.endpoint}/api/get-account`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json()).then(res => res.data);
}

export function getTopic(topicId) {
  return fetch(`${Data.endpoint}/api/get-topic?id=${topicId}`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json());
}

export function getReplies(topicId) {
  return fetch(`${Data.endpoint}/api/get-replies?topicId=${topicId}&limit=-1`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json()).then(res => {
    if (res.status !== "ok") return [];
    return res.data;
  })
}
