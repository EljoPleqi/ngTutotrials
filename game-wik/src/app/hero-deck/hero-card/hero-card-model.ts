export class Card {
  constructor(
    public type: string,
    public race: string,
    public imgPath: string,
    public name: string,
    public desc: string,
    public atk: number,
    public def: number
  ) {}
}
