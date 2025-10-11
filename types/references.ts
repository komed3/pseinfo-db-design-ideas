import { RequireAtLeastOne, StrictSubset } from './abstract';

export type ReferenceType =
    'article' | 'book' | 'booklet' | 'conference' | 'inbook' | 'incollection' | 'inproceedings' | 'manual' |
    'mastersthesis' | 'thesis' | 'misc' | 'phdthesis' | 'proceedings' | 'techreport' | 'unpublished';

interface BaseFields< T extends ReferenceType > {
    type: T;
    accessed?: string;
    url?: string;
    doi?: string;
}

interface BibTeXFields {
    address?: string;
    author?: string;
    booktitle?: string;
    chapter?: string;
    edition?: string;
    editor?: string;
    howpublished?: string;
    institution?: string;
    isbn?: string;
    journal?: string;
    month?: string;
    note?: string;
    number?: number | string;
    organization?: string;
    pages?: number | string;
    publisher?: string;
    school?: string;
    series?: string;
    title?: string;
    type?: string;
    volume?: number | string;
    year?: number | string;
}

export type ArticleReference =
    BaseFields< 'article' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'journal' | 'year',
        'volume' | 'number' | 'pages' | 'month' | 'note'
    >;

export type BookReference =
    BaseFields< 'book' > &
    RequireAtLeastOne<
        StrictSubset<
            BibTeXFields,
            'author' | 'editor' | 'title' | 'publisher' | 'year',
            'volume' | 'number' | 'series' | 'address' | 'edition' | 'month' | 'note' | 'isbn'
        >,
        'author' | 'editor'
    >;
