export enum Events {
    CustomerChanged,
    CustomerCreated,
    CustomerDeleted,
}


export class EmitEvent {
    constructor(public name: any, public value?: any){};
}