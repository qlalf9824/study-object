class MagicPass {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  hasMagicPass() {
    return this.amount > 0;
  }

  addMaginPass(amount: number) {
    this.amount += amount;
  }

  minusMagicPass(amount: number) {
    this.amount -= amount;
    return amount;
  }
}
