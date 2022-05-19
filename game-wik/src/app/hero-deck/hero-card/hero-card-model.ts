export class Card {
  constructor(
    public type: string,
    public imgPath: string,
    public name: string,
    public esc: string,
    public atk: number,
    public def: number
  ) {}
}
