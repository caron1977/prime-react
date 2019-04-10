import axios from "axios";

export class NodeService {
  getTreeTableNodes() {
    return axios.get("treetablenodes.json").then(res => res.data.root);
  }
}
