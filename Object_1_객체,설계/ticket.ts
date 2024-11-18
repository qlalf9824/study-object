class Ticket {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  hasTicket() {
    return this.amount > 0;
  }

  addTicket(amount: number) {
    this.amount += amount;
  }

  removeTicket(amount: number) {
    this.amount -= amount;
    return amount;
  }
}
