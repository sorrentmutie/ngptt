export enum Events {
  CustomerChanged,
  CustomerCreated,
  CustomerDeleted,
  UserLoggedIn,
  UserLoggedOut,
}

export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}
