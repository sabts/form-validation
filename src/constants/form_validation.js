const messages = {
    name: {
        required: "This field is required",
        wrong: "Name must only contain letters"
    },
    lastname: {
        required: "This field is required",
        wrong: "LastName must only contain letters"
    },
    email: {
        required: "This field is required",
        wrong: "Please enter a valid email address"
   },
   queryType: {
        required: "Please select a query type"
    },
    message: {
        required: "Please select a query type"
    },
    consentCheckBox: {
        required: "Please select a query type"
    },
}
const patterns = {
    onlyLetters: /^[a-zA-Z]+$/,
    mustContainAt: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    checked: true
}
//talvez un checked: true?

const nameValidation = {
    required: messages.name.required,
    patterns: {
        value: patterns.onlyLetters,
        message: messages.name.wrong
    }
}

const lastnameValidation = {
    required: messages.lastname.required,
    patterns: {
        value: patterns.onlyLetters,
        message: messages.lastname.wrong
    }
}

const emailValidation = {
    required: messages.email.required,
    patterns: {
        value: patterns.mustContainAt,
        message: messages.email.wrong
    }
}

const queryTypeValidation = {
    required: messages.queryType.required,
}

const messageValidation = {
    required: messages.message.required,
}

const consentCheckBoxValidation = {
    required: messages.consentCheckBox.required,
}

export const FORM_VALIDATION = {
    FIRSTNAME: nameValidation,
    LASTNAME: lastnameValidation,
    EMAIL: emailValidation,
    QUERYTYPE: queryTypeValidation,
    MESSAGE: messageValidation,
    CONSENTCHECKBOX: consentCheckBoxValidation,
  };
