import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface legalDocument {
    author: string;
    title: string;
    descriptiom: string;
    category: string;
    createdAt: string;
    bundle: string;
    id: string;
}

export interface DocResponse {
    data: legalDocument;
    status: number;
    message: string;
 }

export interface legalDocuments {
    data: legalDocument[];
    status: number;
    message: string;
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}


export interface PaginationParams {
    [key: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
}