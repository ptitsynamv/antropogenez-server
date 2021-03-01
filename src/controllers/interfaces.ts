export interface AntropogenezArticle extends NewAntropogenezArticle {
    id: string;
    date: string;
}

export interface AntropogenezArticlesResponse {
    count: number;
    list: AntropogenezArticle[];
}

export interface NewAntropogenezArticle {
    subject: string;
    text: string;
}

export interface NewFArticle {
    title: string;
    url: string;
}

export interface FArticle extends NewFArticle {
    id: string;
}
