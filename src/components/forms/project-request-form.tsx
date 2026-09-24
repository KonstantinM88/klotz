"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

export function ProjectRequestForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-success" role="status">
        <p className="eyebrow">
          <span />
          Demo erfolgreich
        </p>
        <h2>Vielen Dank für Ihre Anfrage.</h2>
        <p>
          Im Live-System wird die Anfrage sicher gespeichert und an den
          zuständigen Ansprechpartner übermittelt.
        </p>
        <button
          className="button button--primary button-native"
          type="button"
          onClick={() => setSent(false)}
        >
          Weitere Anfrage testen
        </button>
      </div>
    );
  }

  return (
    <form
      className="request-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-field">
        <label htmlFor="request-name">Name *</label>
        <input id="request-name" name="name" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="request-company">Unternehmen</label>
        <input
          id="request-company"
          name="company"
          autoComplete="organization"
        />
      </div>
      <div className="form-field">
        <label htmlFor="request-email">E-Mail *</label>
        <input
          id="request-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="request-phone">Telefon</label>
        <input id="request-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="request-topic">Worum geht es?</label>
        <select id="request-topic" name="topic" defaultValue="">
          <option value="" disabled>
            Bitte auswählen
          </option>
          <option>Terrasse & Garten</option>
          <option>Fenster & Türen</option>
          <option>Zaun & Tor</option>
          <option>Gewerbe / Wohnungswirtschaft</option>
          <option>Sonstiges</option>
        </select>
      </div>
      <div className="form-field form-field--full">
        <label htmlFor="request-message">Ihr Vorhaben *</label>
        <textarea
          id="request-message"
          name="message"
          required
          placeholder="Beschreiben Sie kurz, was Sie planen und wo das Projekt umgesetzt werden soll."
        />
      </div>
      <p className="demo-notice">
        Demo-Modus: Es werden keine personenbezogenen Daten übertragen oder
        gespeichert.
      </p>
      <button className="button button--primary button-native" type="submit">
        <span>Anfrage testen</span>
        <ArrowRightIcon className="button__icon" />
      </button>
    </form>
  );
}
