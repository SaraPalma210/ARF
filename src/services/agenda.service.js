import http from "../http-common";

class AgendaDataService {
  
  create(data) {
    return http.post("/agenda", data);
  }

  getAll() {
    return http.get("/agenda");
  }

  findById(id) {
    return http.get(`/agenda/${id}`);
  }

  update(id, data) {
    return http.put(`/agenda/${id}`, data);
  }

  delete(id) {
    return http.delete(`/agenda/${id}`);
  }

  deleteAll() {
    return http.delete(`/agenda`);
  }

}

export default new AgendaDataService();