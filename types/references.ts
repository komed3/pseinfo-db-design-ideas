interface BaseFields {
    title?: string;
    note?: string;
    month?: string;
    year?: number | string;
}

interface PublicationFields extends BaseFields {
    author?: string;
    editor?: string;
    publisher?: string;
    series?: string;
    address?: string;
    volume?: string;
    number?: string;
    edition?: string;
    pages?: string;
    organization?: string;
    isbn?: string;
    type?: string;
}
