function getTopic(topicId) {
  return fetch(`${this.endpoint}/api/get-topic?id=${topicId}`, {
    method: "GET",
    credentials: "include"
  }).then(res => res.json());
}
