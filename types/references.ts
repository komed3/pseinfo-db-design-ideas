import { Require, RequireEither } from './helper';

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
    journal?: string;
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

export type ReferenceArticle = Require< PublicationFields, 'author' | 'title' | 'journal' | 'year' > & {
    type: 'article';
    journal: string;
};

export type ReferenceBook = RequireEither< Require< PublicationFields, 'title' | 'publisher' | 'year' >, 'author', 'editor' > & {
    type: 'book';
};

export type ReferenceBooklet = Require< PublicationFields, 'title' | 'author' | 'address' > & {
    type: 'booklet';
    howpublished?: string;
};
