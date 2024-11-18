class Vistor {
  ticket: Ticket;
  magicPass: MagicPass;

  constructor() {
    this.ticket = new Ticket(1);
    this.magicPass = new MagicPass(1);
  }

  hasTicket = () => {
    return this.ticket.hasTicket();
  };

  handMasicPass = () => {
    if (!this.magicPass.hasMagicPass()) {
      return 0;
    }
    return this.magicPass.minusMagicPass(1);
  };
}
