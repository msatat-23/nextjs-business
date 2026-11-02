export interface ContactFormFieldConfig {
  label: string;
  placeholder: string;
}

export interface ContactPageContentType {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  form: {
    title: string;
    description: string;
    successTitle: string;
    successMessage: string;
    submitAnother: string;
    submitLabel: string;
    loadingLabel: string;
    fields: {
      fullName: ContactFormFieldConfig;
      phone: ContactFormFieldConfig;
      jobTitle: ContactFormFieldConfig;
      email: ContactFormFieldConfig;
    };
  };
}
