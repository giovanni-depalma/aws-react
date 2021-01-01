import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Pizza {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  constructor(init: ModelInit<Pizza>);
  static copyOf(source: Pizza, mutator: (draft: MutableModel<Pizza>) => MutableModel<Pizza> | void): Pizza;
}