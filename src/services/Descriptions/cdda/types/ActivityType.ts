export interface IActivityType {
  id: string;
  type: 'activity_type';
  activity_level: string;
  verb: Verb | string;
  suspendable?: boolean;
  based_on: string;
  no_resume?: boolean;
  rooted?: boolean;
  refuel_fires?: boolean;
  auto_needs?: boolean;
  multi_activity?: boolean;
  interruptable?: boolean;
}

interface Verb {
  ctxt: string;
  str: string;
}
