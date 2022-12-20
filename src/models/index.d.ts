import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Condition {
  NEW = "NEW",
  PARTS = "PARTS",
  USED = "USED"
}

export enum Curr {
  EUR = "EUR",
  LV = "LV"
}



type EagerAd = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ad, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly type: string;
  readonly cat: string;
  readonly condition?: Condition | keyof typeof Condition | null;
  readonly currency?: Curr | keyof typeof Curr | null;
  readonly data?: string | null;
  readonly date?: string | null;
  readonly location?: string | null;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly parrent?: (string | null)[] | null;
  readonly phone?: number | null;
  readonly physical?: boolean | null;
  readonly price?: number | null;
  readonly query?: string | null;
  readonly slug?: string | null;
  readonly source?: string | null;
  readonly createdAt?: string | null;
  readonly uid?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAd = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ad, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly type: string;
  readonly cat: string;
  readonly condition?: Condition | keyof typeof Condition | null;
  readonly currency?: Curr | keyof typeof Curr | null;
  readonly data?: string | null;
  readonly date?: string | null;
  readonly location?: string | null;
  readonly description?: string | null;
  readonly images?: (string | null)[] | null;
  readonly parrent?: (string | null)[] | null;
  readonly phone?: number | null;
  readonly physical?: boolean | null;
  readonly price?: number | null;
  readonly query?: string | null;
  readonly slug?: string | null;
  readonly source?: string | null;
  readonly createdAt?: string | null;
  readonly uid?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ad = LazyLoading extends LazyLoadingDisabled ? EagerAd : LazyAd

export declare const Ad: (new (init: ModelInit<Ad>) => Ad) & {
  copyOf(source: Ad, mutator: (draft: MutableModel<Ad>) => MutableModel<Ad> | void): Ad;
}

type EagerJoke = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Joke, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nid?: number | null;
  readonly cat?: string | null;
  readonly joke?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJoke = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Joke, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nid?: number | null;
  readonly cat?: string | null;
  readonly joke?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Joke = LazyLoading extends LazyLoadingDisabled ? EagerJoke : LazyJoke

export declare const Joke: (new (init: ModelInit<Joke>) => Joke) & {
  copyOf(source: Joke, mutator: (draft: MutableModel<Joke>) => MutableModel<Joke> | void): Joke;
}

type EagerNews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<News, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly nid?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNews = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<News, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly nid?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type News = LazyLoading extends LazyLoadingDisabled ? EagerNews : LazyNews

export declare const News: (new (init: ModelInit<News>) => News) & {
  copyOf(source: News, mutator: (draft: MutableModel<News>) => MutableModel<News> | void): News;
}

type EagerTwusers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Twusers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly letter?: string | null;
  readonly nid?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTwusers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Twusers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly letter?: string | null;
  readonly nid?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Twusers = LazyLoading extends LazyLoadingDisabled ? EagerTwusers : LazyTwusers

export declare const Twusers: (new (init: ModelInit<Twusers>) => Twusers) & {
  copyOf(source: Twusers, mutator: (draft: MutableModel<Twusers>) => MutableModel<Twusers> | void): Twusers;
}

type EagerMovies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly slug?: string | null;
  readonly year?: number | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMovies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly slug?: string | null;
  readonly year?: number | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Movies = LazyLoading extends LazyLoadingDisabled ? EagerMovies : LazyMovies

export declare const Movies: (new (init: ModelInit<Movies>) => Movies) & {
  copyOf(source: Movies, mutator: (draft: MutableModel<Movies>) => MutableModel<Movies> | void): Movies;
}

type EagerCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Companies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly zip?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Companies = LazyLoading extends LazyLoadingDisabled ? EagerCompanies : LazyCompanies

export declare const Companies: (new (init: ModelInit<Companies>) => Companies) & {
  copyOf(source: Companies, mutator: (draft: MutableModel<Companies>) => MutableModel<Companies> | void): Companies;
}