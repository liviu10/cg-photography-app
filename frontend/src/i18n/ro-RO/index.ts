export default {
  user: {
    navigation_menu: {
      home: 'Acasă',
      services: 'Services',
      portfolio: 'Portofoliu',
      portfolio_photo: 'Portofoliu Fotografii',
      portfolio_video: 'Portofoliu Video',
      deals: 'Oferte',
      about_me: 'Despre mine',
      contact_me: 'Contactează-mă',
      terms_and_conditions: 'Termeni şi Condiţii',
    },
    home_page: {
      title: 'Acasă'
    },
    services_page: {
      title: 'Servicii'
    },
    portfolio_page: {
      title: 'Portofoliu',
      portfolio_photo: {
        title: 'Portofoliu Fotografii'
      },
      portfolio_video: {
        title: 'Portofoliu Video'
      },
    },
    deals_page: {
      title: 'Oferte'
    },
    about_me_page: {
      title: 'Despre mine'
    },
    contact_me_page: {
      title: 'Contactează-mă',
      contact_form: {
        name_input: {
          label: 'Numele şi prenumele tău',
          hint: 'Inserează numele şi prenumele tău',
          validations: {
            rule_1: 'Numele şi prenumele sunt obligatorii! Te rog să le completezi!',
            rule_2: 'Acest câmp nu trebuie să depăşească 100 de caractere!',
            rule_3: 'Te rog să inserezi doar litere mici şi mari!'
          }
        },
        email_input: {
          label: 'Adresa ta de email',
          hint: 'Inserează adresa ta de email',
          validations: {
            rule_1: 'Adresa de email este obligatorie! Te rog să o completezi!',
            rule_2: 'Adresa de email inserată nu trebuie să depăşească 100 de caractere!',
            rule_3: 'Te rog să inserezi o adresă de email validă!'
          }
        },
        phone_number_input: {
          label: 'Numărul tău de telefon',
          hint: 'Inserează numărul tău de telefon',
          validations: {
            rule_1: 'Numărul de telefon este obligatoriu! Te rog să-l completezi!',
            rule_2: 'Numărul de telefon nu trebuie să depăşească 13 caractere!',
            rule_3: 'Numărul de telefon trebuie să conţină doar cifre!',
          }
        },
        message_input: {
          label: 'Mesajul tău',
          hint: 'Inserează mesajul tău',
          validations: {
            rule_1: 'Mesajul este obligatoriu! Te rog să-l completezi!',
            rule_2: 'Mesajul nu trebuie să depăşească 255 caractere!'
          }
        },
        privacy_policy_input: {
          label: 'Sunt de acord cu termenii şi condiţiile',
          validations: {
            rule_1: 'Acest câmp este obligatoriu! Te rog să-l completezi!'
          }
        },
        buttons: {
          submit: 'Trimite mesajul',
          cancel: 'Anulează',
        }
      }
    },
    terms_and_conditions_page: {
      title: 'Termeni şi Condiţii'
    }
  }
};
