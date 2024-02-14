# BUCHEN UND RESERVIEREN

Test Back End Applikation um Buchungen und Reservationen durchzuführen.

- Verwendet wurde Go Version 1.22
- Nutzt Chi [Router](https://github.com/go-chi/chi)
- [Alex Edwards SCS](https://github.com/alexedwards/scs/v2) Session Management
- Schutz gegen CSRF Attacken: [nosurf](https://github.com/justinas/nosurf)


# Funktionen

- Authentifizierung per Login
- Reservierungen erstellen für eine fiktives Hotel
- Reservierungen wurden in einer PostgreSQL Datenbank gespeichert.
- Adminstrator Backend um Resevierungen zu verwalten