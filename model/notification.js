class offreSpeciale {
    constructor(notification, remarque, temps, isSent, isRead, { idServ, nomServ, prixServ }, { idDes, nomDes }) {
        this.notification = notification;
        this.remarque = remarque;
        this.temps = temps;
        this.isSent = isSent;
        this.isRead = isRead;
        this.serviceConcerne = { idService: idServ, nom: nomServ, prix: prixServ};
        this.destinataire = { idUser: idDes, nom: nomDes }
    }
}
module.exports = offreSpeciale;