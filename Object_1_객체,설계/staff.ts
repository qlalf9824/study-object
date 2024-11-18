class Staff {
  decideEntrance(vistor: Vistor) {
    if (vistor.hasTicket()) {
      const magicPass = vistor.handMasicPass();
      if (magicPass > 0) {
        {
          return "quick entrance";
        }
      }
      return "general entrance";
    }
    return null;
  }
}
