export function getAccount(endpoint) {
  return fetch(`${endpoint}/api/get-account`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json()).then(res => res.data);
}

export function getTopic(endpoint, topicId) {
  return fetch(`${endpoint}/api/get-topic?id=${topicId}`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json());
}

export function getReplies(endpoint, topicId) {
  return fetch(`${endpoint}/api/get-replies?topicId=${topicId}&limit=-1`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json()).then(res => {
    if (res.status !== "ok") return [];
    return res.data;
  });
}

export function addReply(endpoint, topicId, content, editorType) {
  let data = {};
  data["topicId"] = topicId;
  data["content"] = content;
  data["editorType"] = editorType;
  return fetch(`${endpoint}/api/add-reply`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => res.json());
}
