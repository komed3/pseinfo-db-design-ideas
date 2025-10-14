/**
 * Reference Types (based on BibTeX)
 */

import { ExtractFrom, RequireAtLeastOne, RequireExactlyOne, StrictSubset } from './utils';

// Reference Types based on BibTeX
export type ReferenceType =
    'article' | 'book' | 'booklet' | 'conference' | 'inbook' | 'incollection' |
    'inproceedings' | 'manual' | 'mastersthesis' | 'thesis' | 'misc' | 'phdthesis' |
    'proceedings' | 'techreport' | 'unpublished';

// Base fields common to all reference types
interface BaseFields< T extends ReferenceType > {
    type: T;
    accessed?: string;
    url?: string;
    doi?: string;
}

// Common BibTeX fields
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

// Helper type for thesis references
type Thesis< T extends 'mastersthesis' | 'thesis' | 'phdthesis' > =
    BaseFields< T > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'school' | 'year',
        'type' | 'address' | 'month' | 'note'
    >;

// Helper type for conference and inproceedings references
type Conference< T extends 'conference' | 'inproceedings' > =
    BaseFields< T > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'booktitle' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'pages' | 'address' | 'month' |
        'organization' | 'publisher' | 'note'
    >;

// "@article" Reference
export type ArticleReference =
    BaseFields< 'article' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'journal' | 'year',
        'volume' | 'number' | 'pages' | 'month' | 'note'
    >;

// "@book" Reference
export type BookReference =
    BaseFields< 'book' > &
    RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
    StrictSubset<
        BibTeXFields,
        'title' | 'publisher' | 'year',
        'volume' | 'number' | 'series' | 'address' | 'edition' | 'month' | 'note' | 'isbn'
    >;

// "@booklet" Reference
export type BookletReference =
    BaseFields< 'booklet' > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'howpublished' | 'address' | 'month' | 'year' | 'note'
    >;

// "@conference" Reference
export type ConferenceReference = Conference< 'conference' >;

// "@inbook" Reference
export type InbookReference =
    BaseFields< 'inbook' > &
    RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
    RequireAtLeastOne<
        StrictSubset<
            BibTeXFields,
            'title' | 'booktitle' | 'chapter' | 'pages' | 'publisher' | 'year',
            'volume' | 'number' | 'series' | 'type' | 'address' | 'edition' | 'month' | 'note'
        >,
        'chapter' | 'pages'
    >;

// "@incollection" Reference
export type IncollectionReference =
    BaseFields< 'incollection' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'booktitle' | 'publisher' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'type' | 'chapter' | 'pages' |
        'address' | 'edition' | 'month' | 'note'
    >;

// "@inproceedings" Reference
export type InproceedingsReference = Conference< 'inproceedings' >;

export type ManualReference =
    BaseFields< 'manual' > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'organization' | 'address' | 'edition' | 'month' | 'year' | 'note'
    >;

// "@mastersthesis" Reference
export type MastersthesisReference = Thesis< 'mastersthesis' >;

// "@thesis" Reference
export type ThesisReference = Thesis< 'thesis' >;

// "@misc" Reference
export type MiscReference =
    BaseFields< 'misc' > &
    ExtractFrom<
        BibTeXFields,
        'author' | 'title' | 'howpublished' | 'month' | 'year' | 'note'
    >;

// "@phdthesis" Reference
export type PhdthesisReference = Thesis< 'phdthesis' >;

// "@proceedings" Reference
export type ProceedingsReference =
    BaseFields< 'proceedings' > &
    StrictSubset<
        BibTeXFields,
        'title' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'address' | 'month' |
        'organization' | 'publisher' | 'note'
    >;

// "@techreport" Reference
export type TechreportReference =
    BaseFields< 'techreport' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'institution' | 'year',
        'type' | 'number' | 'address' | 'month' | 'note'
    >;

// "@unpublished" Reference
export type UnpublishedReference =
    BaseFields< 'unpublished' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'note',
        'month' | 'year'
    >;

// Union type of all reference types
export type Reference =
    ArticleReference | BookReference | BookletReference | ConferenceReference |
    InbookReference | IncollectionReference | InproceedingsReference | ManualReference |
    MastersthesisReference | ThesisReference | MiscReference | PhdthesisReference |
    ProceedingsReference | TechreportReference | UnpublishedReference;

// Collection of references indexed by a unique key
export type ReferenceCollection = Record< string, Reference >;

// Reference IDs used in other parts of the data model
export type RefId = keyof ReferenceCollection;
