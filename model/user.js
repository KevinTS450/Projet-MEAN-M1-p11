class users {
  constructor(nom, prenom, email, password, date_naissance, is_activate, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.date_naissance = date_naissance;
    this.is_activate = is_activate;
    this.age = age;
  }
}
module.exports = users;
