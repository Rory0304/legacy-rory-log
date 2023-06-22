import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type Article = Entry & {
  __typename?: 'Article';
  category?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<ArticleLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleFeaturedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/article) */
export type ArticleTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleCollection = {
  __typename?: 'ArticleCollection';
  items: Array<Maybe<Article>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleFilter>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featured_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleLinkingCollections = {
  __typename?: 'ArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ArticleOrder {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  articleCollection?: Maybe<ArticleCollection>;
  entryCollection?: Maybe<EntryCollection>;
  logCollection?: Maybe<LogCollection>;
};


export type AssetLinkingCollectionsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsLogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsLogCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsArticleCollectionOrder {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsLogCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  YoutubeUrlAsc = 'youtubeUrl_ASC',
  YoutubeUrlDesc = 'youtubeUrl_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type Log = Entry & {
  __typename?: 'Log';
  content?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<LogLinkingCollections>;
  media?: Maybe<Asset>;
  sys: Sys;
  tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type LogContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type LogDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type LogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type LogMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type LogTagArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type LogTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/98cksird3kze/content_types/log) */
export type LogYoutubeUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LogCollection = {
  __typename?: 'LogCollection';
  items: Array<Maybe<Log>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LogFilter = {
  AND?: InputMaybe<Array<InputMaybe<LogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LogFilter>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content_not?: InputMaybe<Scalars['String']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  tag_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl_contains?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  youtubeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  youtubeUrl_not?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LogLinkingCollections = {
  __typename?: 'LogLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LogOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  YoutubeUrlAsc = 'youtubeUrl_ASC',
  YoutubeUrlDesc = 'youtubeUrl_DESC'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articleCollection?: Maybe<ArticleCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  log?: Maybe<Log>;
  logCollection?: Maybe<LogCollection>;
};


export type QueryArticleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryLogArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LogOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LogFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type ArticleKeySpecifier = ('category' | 'content' | 'contentfulMetadata' | 'date' | 'featured' | 'linkedFrom' | 'slug' | 'sys' | 'thumbnail' | 'title' | ArticleKeySpecifier)[];
export type ArticleFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	featured?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnail?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | ArticleCollectionKeySpecifier)[];
export type ArticleCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleLinkingCollectionsKeySpecifier = ('entryCollection' | ArticleLinkingCollectionsKeySpecifier)[];
export type ArticleLinkingCollectionsFieldPolicy = {
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetKeySpecifier = ('contentType' | 'contentfulMetadata' | 'description' | 'fileName' | 'height' | 'linkedFrom' | 'size' | 'sys' | 'title' | 'url' | 'width' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | AssetCollectionKeySpecifier)[];
export type AssetCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetLinkingCollectionsKeySpecifier = ('articleCollection' | 'entryCollection' | 'logCollection' | AssetLinkingCollectionsKeySpecifier)[];
export type AssetLinkingCollectionsFieldPolicy = {
	articleCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	logCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentfulMetadataKeySpecifier = ('tags' | ContentfulMetadataKeySpecifier)[];
export type ContentfulMetadataFieldPolicy = {
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentfulTagKeySpecifier = ('id' | 'name' | ContentfulTagKeySpecifier)[];
export type ContentfulTagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryKeySpecifier = ('contentfulMetadata' | 'sys' | EntryKeySpecifier)[];
export type EntryFieldPolicy = {
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntryCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | EntryCollectionKeySpecifier)[];
export type EntryCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogKeySpecifier = ('content' | 'contentfulMetadata' | 'date' | 'linkedFrom' | 'media' | 'sys' | 'tag' | 'title' | 'youtubeUrl' | LogKeySpecifier)[];
export type LogFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentfulMetadata?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	sys?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	youtubeUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogCollectionKeySpecifier = ('items' | 'limit' | 'skip' | 'total' | LogCollectionKeySpecifier)[];
export type LogCollectionFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	skip?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogLinkingCollectionsKeySpecifier = ('entryCollection' | LogLinkingCollectionsKeySpecifier)[];
export type LogLinkingCollectionsFieldPolicy = {
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('article' | 'articleCollection' | 'asset' | 'assetCollection' | 'entryCollection' | 'log' | 'logCollection' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	article?: FieldPolicy<any> | FieldReadFunction<any>,
	articleCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	assetCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	entryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	log?: FieldPolicy<any> | FieldReadFunction<any>,
	logCollection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SysKeySpecifier = ('environmentId' | 'firstPublishedAt' | 'id' | 'publishedAt' | 'publishedVersion' | 'spaceId' | SysKeySpecifier)[];
export type SysFieldPolicy = {
	environmentId?: FieldPolicy<any> | FieldReadFunction<any>,
	firstPublishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	spaceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Article?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleKeySpecifier | (() => undefined | ArticleKeySpecifier),
		fields?: ArticleFieldPolicy,
	},
	ArticleCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleCollectionKeySpecifier | (() => undefined | ArticleCollectionKeySpecifier),
		fields?: ArticleCollectionFieldPolicy,
	},
	ArticleLinkingCollections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleLinkingCollectionsKeySpecifier | (() => undefined | ArticleLinkingCollectionsKeySpecifier),
		fields?: ArticleLinkingCollectionsFieldPolicy,
	},
	Asset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier),
		fields?: AssetFieldPolicy,
	},
	AssetCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetCollectionKeySpecifier | (() => undefined | AssetCollectionKeySpecifier),
		fields?: AssetCollectionFieldPolicy,
	},
	AssetLinkingCollections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetLinkingCollectionsKeySpecifier | (() => undefined | AssetLinkingCollectionsKeySpecifier),
		fields?: AssetLinkingCollectionsFieldPolicy,
	},
	ContentfulMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentfulMetadataKeySpecifier | (() => undefined | ContentfulMetadataKeySpecifier),
		fields?: ContentfulMetadataFieldPolicy,
	},
	ContentfulTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentfulTagKeySpecifier | (() => undefined | ContentfulTagKeySpecifier),
		fields?: ContentfulTagFieldPolicy,
	},
	Entry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryKeySpecifier | (() => undefined | EntryKeySpecifier),
		fields?: EntryFieldPolicy,
	},
	EntryCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntryCollectionKeySpecifier | (() => undefined | EntryCollectionKeySpecifier),
		fields?: EntryCollectionFieldPolicy,
	},
	Log?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogKeySpecifier | (() => undefined | LogKeySpecifier),
		fields?: LogFieldPolicy,
	},
	LogCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogCollectionKeySpecifier | (() => undefined | LogCollectionKeySpecifier),
		fields?: LogCollectionFieldPolicy,
	},
	LogLinkingCollections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogLinkingCollectionsKeySpecifier | (() => undefined | LogLinkingCollectionsKeySpecifier),
		fields?: LogLinkingCollectionsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Sys?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SysKeySpecifier | (() => undefined | SysKeySpecifier),
		fields?: SysFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
export const ArticleFieldsFragmentDoc = gql`
    fragment ArticleFields on Article {
  sys {
    id
  }
  title
  slug
  content
  category
  date
  thumbnail {
    url
  }
}
    `;
export const LogsFieldsFragmentDoc = gql`
    fragment LogsFields on Log {
  sys {
    id
  }
  title
  content
  youtubeUrl
  media {
    url
  }
  tag
  date
}
    `;
export const GetArticleDocument = gql`
    query GetArticle($slug: String!) {
  articleCollection(where: {slug: $slug}) {
    items {
      ...ArticleFields
    }
  }
}
    ${ArticleFieldsFragmentDoc}`;
export const GetArticlesDocument = gql`
    query GetArticles {
  articleCollection(order: date_DESC) {
    items {
      ...ArticleFields
    }
  }
}
    ${ArticleFieldsFragmentDoc}`;
export const GetArticleSlugsDocument = gql`
    query GetArticleSlugs {
  articleCollection(order: date_DESC) {
    items {
      slug
    }
  }
}
    `;
export const GetFeaturedArticlesDocument = gql`
    query GetFeaturedArticles {
  articleCollection(where: {featured: true}, order: date_DESC) {
    items {
      ...ArticleFields
    }
  }
}
    ${ArticleFieldsFragmentDoc}`;
export const GetLogsDocument = gql`
    query GetLogs {
  logCollection {
    items {
      ...LogsFields
    }
  }
}
    ${LogsFieldsFragmentDoc}`;
export type ArticleFieldsFragment = { __typename?: 'Article', title?: string | null, slug?: string | null, content?: string | null, category?: string | null, date?: any | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', url?: string | null } | null };

export type LogsFieldsFragment = { __typename?: 'Log', title?: string | null, content?: string | null, youtubeUrl?: string | null, tag?: Array<string | null> | null, date?: any | null, sys: { __typename?: 'Sys', id: string }, media?: { __typename?: 'Asset', url?: string | null } | null };

export type GetArticleQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', articleCollection?: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, content?: string | null, category?: string | null, date?: any | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', articleCollection?: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, content?: string | null, category?: string | null, date?: any | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetArticleSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticleSlugsQuery = { __typename?: 'Query', articleCollection?: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', slug?: string | null } | null> } | null };

export type GetFeaturedArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedArticlesQuery = { __typename?: 'Query', articleCollection?: { __typename?: 'ArticleCollection', items: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, content?: string | null, category?: string | null, date?: any | null, sys: { __typename?: 'Sys', id: string }, thumbnail?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLogsQuery = { __typename?: 'Query', logCollection?: { __typename?: 'LogCollection', items: Array<{ __typename?: 'Log', title?: string | null, content?: string | null, youtubeUrl?: string | null, tag?: Array<string | null> | null, date?: any | null, sys: { __typename?: 'Sys', id: string }, media?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };
