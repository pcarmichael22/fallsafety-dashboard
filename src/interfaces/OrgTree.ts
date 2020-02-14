export default interface Org_tree {
  _id: number;
  org_name: string;
  ancestors: Array<number>;
  hidden: boolean;
  ancestor_count: number;
  text: string;
  org_id: number;
  nodes: Array<Org_tree>;
}
