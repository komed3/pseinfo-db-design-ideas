type FormId = string;

type Property< T > = T & { form_ref?: FormId[] };