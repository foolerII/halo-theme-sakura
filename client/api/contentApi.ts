/* eslint-disable  */
// @ts-nocheck
/**
 * Do not edit this file, this file is auto generate by script.
 * */

import {
  ArchiveMonthVO,
  ArchiveYearVO,
  Author,
  BaseCommentDTO,
  BaseCommentVO,
  BaseCommentWithParentVO,
  BaseMetaDTO,
  BasePostSimpleDTO,
  BaseResponseOfobject,
  CategoryDTO,
  CommentWithHasChildrenVO,
  CustomizedPageOfBaseCommentVO,
  CustomizedPageOfBaseCommentWithParentVO,
  CustomizedPageOfBasePostSimpleDTO,
  CustomizedPageOfCommentWithHasChildrenVO,
  CustomizedPageOfJournalWithCmtCountDTO,
  CustomizedPageOfPhotoDTO,
  CustomizedPageOfPostListVO,
  CustomizedPageOfSheetListVO,
  JournalCommentParam,
  JournalDTO,
  JournalWithCmtCountDTO,
  LinkDTO,
  LinkTeamVO,
  MenuDTO,
  MenuVO,
  OptionDTO,
  PhotoDTO,
  PostCommentParam,
  PostDetailVO,
  PostListVO,
  SheetCommentParam,
  SheetDetailVO,
  SheetListVO,
  StatisticDTO,
  StatisticWithUserDTO,
  TagDTO,
  ThemeProperty,
  UserDTO,
} from "./contentApiDefine";

export const apiInfo = {
  version: "1.4.5",
  authKey: "API-Authorization",
};

// @ts-nocheck
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface IConfig {
  target: string;
  accessKey: string;
  axios: AxiosInstance;
}

export const configs: IConfig = {
  target: "",
  accessKey: "",
  axios: null,
};

export function axiosRequestInterceptor(conf: AxiosRequestConfig) {
  if (configs.accessKey) {
    // apiInfo generate by core.ts
    conf.headers[apiInfo.authKey] = configs.accessKey;
  }

  conf.url = conf.url.replace(/\{\w+\}/g, (name) => {
    return conf.params[name.slice(1, name.length - 1)];
  });

  return conf;
}

export function initConfig(opt: Partial<IConfig>) {
  Object.assign(configs, opt);

  configs.axios = axios.create({
    baseURL: configs.target,
  });

  configs.axios.interceptors.request.use(axiosRequestInterceptor);
}

function decodeResponseData(data: any) {
  return data.data ? data.data : data;
}

async function get(path: string, data?: any = {}) {
  const { __body, ...other } = data;
  console.log(`get ${path}`, JSON.stringify(data))

  const res = await configs.axios.get(path, { params: other, data: __body });

  return decodeResponseData(res.data);
}

async function post(path: string, data?: any = {}) {
  const { __body, ...other } = data;

  const res = await configs.axios.post(path, __body, {
    params: other,
    data: __body,
  });

  return decodeResponseData(res.data);
}

async function put(path: string, data?: any = {}) {
  const { __body, ...other } = data;

  const res = await configs.axios.put(path, __body, {
    params: other,
    data: __body,
  });

  return decodeResponseData(res.data);
}

async function remove(path: string, data?: any = {}) {
  const { __body, ...other } = data;

  const res = await configs.axios.delete(path, { params: other, data: __body });

  return decodeResponseData(res.data);
}

/**
 * listMonthArchives
 */
export function archivesMonthsGet(): Promise<Array<ArchiveMonthVO>> {
  return get("/api/content/archives/months");
}

/**
 * listYearArchives
 */
export function archivesYearsGet(): Promise<Array<ArchiveYearVO>> {
  return get("/api/content/archives/years");
}

/**
 * Lists categories
 */
export function categoriesGet(opt?: {
  /**
   *
   */
  sort?: Array<string>;

  /**
   * more
   */
  more?: boolean;
}): Promise<Array<CategoryDTO>> {
  return get("/api/content/categories", opt);
}

/**
 * Lists posts by category slug
 */
export function categoriesSlugPostsGet(opt: {
  /**
   *
   */
  page?: number;

  /**
   *
   */
  size?: number;

  /**
   * slug
   */
  slug: string;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * password
   */
  password?: string;
}): Promise<CustomizedPageOfPostListVO> {
  return get("/api/content/categories/{slug}/posts", opt);
}

/**
 * Lists journals
 */
export function journalsGet(opt?: {
  /**
   *
   */
  page?: number;

  /**
   *
   */
  size?: number;

  /**
   *
   */
  sort?: Array<string>;
}): Promise<CustomizedPageOfJournalWithCmtCountDTO> {
  return get("/api/content/journals", opt);
}

/**
 * Comments a post
 */
export function journalsCommentsPost(opt: {
  /**
   * requestBody
   */
  __body: JournalCommentParam;
}): Promise<BaseCommentDTO> {
  return post("/api/content/journals/comments", opt);
}

/**
 * Likes a journal
 */
export function journalsIdLikesPost(opt: {
  /**
   * id
   */
  id: number;
}): Promise<void> {
  return post("/api/content/journals/{id}/likes", opt);
}

/**
 * Gets a journal detail
 */
export function journalsJournalIdGet(opt: {
  /**
   * journalId
   */
  journalId: number;
}): Promise<JournalDTO> {
  return get("/api/content/journals/{journalId}", opt);
}

/**
 * Lists comment with list view
 */
export function journalsJournalIdCommentsList_viewGet(opt: {
  /**
   * journalId
   */
  journalId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfBaseCommentWithParentVO> {
  return get("/api/content/journals/{journalId}/comments/list_view", opt);
}

/**
 * listTopComments
 */
export function journalsJournalIdCommentsTop_viewGet(opt: {
  /**
   * journalId
   */
  journalId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfCommentWithHasChildrenVO> {
  return get("/api/content/journals/{journalId}/comments/top_view", opt);
}

/**
 * Lists comments with tree view
 */
export function journalsJournalIdCommentsTree_viewGet(opt: {
  /**
   * journalId
   */
  journalId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfBaseCommentVO> {
  return get("/api/content/journals/{journalId}/comments/tree_view", opt);
}

/**
 * listChildrenBy
 */
export function journalsJournalIdCommentsCommentParentIdChildrenGet(opt: {
  /**
   * journalId
   */
  journalId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * commentParentId
   */
  commentParentId: number;
}): Promise<Array<BaseCommentDTO>> {
  return get(
    "/api/content/journals/{journalId}/comments/{commentParentId}/children",
    opt
  );
}

/**
 * List all links
 */
export function linksGet(opt?: {
  /**
   *
   */
  sort?: Array<string>;
}): Promise<Array<LinkDTO>> {
  return get("/api/content/links", opt);
}

/**
 * List all links with team view
 */
export function linksTeam_viewGet(opt?: {
  /**
   *
   */
  sort?: Array<string>;
}): Promise<Array<LinkTeamVO>> {
  return get("/api/content/links/team_view", opt);
}

/**
 * Lists all menus
 */
export function menusGet(opt?: {
  /**
   *
   */
  sort?: Array<string>;
}): Promise<Array<MenuDTO>> {
  return get("/api/content/menus", opt);
}

/**
 * Lists menus with tree view
 */
export function menusTree_viewGet(opt?: {
  /**
   *
   */
  sort?: Array<string>;
}): Promise<Array<MenuVO>> {
  return get("/api/content/menus/tree_view", opt);
}

/**
 * Options for comment
 */
export function optionsCommentGet(): Promise<any> {
  return get("/api/content/options/comment");
}

/**
 * Gets option value by option key
 */
export function optionsKeysKeyGet(opt: {
  /**
   * key
   */
  key: string;
}): Promise<BaseResponseOfobject> {
  return get("/api/content/options/keys/{key}", opt);
}

/**
 * Lists all options with list view
 */
export function optionsList_viewGet(): Promise<Array<OptionDTO>> {
  return get("/api/content/options/list_view");
}

/**
 * Lists options with map view
 */
export function optionsMap_viewGet(opt?: {
  /**
   * key
   */
  key?: string;
}): Promise<any> {
  return get("/api/content/options/map_view", opt);
}

/**
 * pageBy
 */
export function photosGet(opt?: {
  /**
   *
   */
  keyword?: string;

  /**
   *
   */
  page?: number;

  /**
   *
   */
  size?: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   *
   */
  team?: string;
}): Promise<CustomizedPageOfPhotoDTO> {
  return get("/api/content/photos", opt);
}

/**
 * listPhotos
 */
export function photosLatestGet(opt?: {
  /**
   *
   */
  sort?: Array<string>;
}): Promise<Array<PhotoDTO>> {
  return get("/api/content/photos/latest", opt);
}

/**
 * Lists posts
 */
export function postsGet(opt?: {
  /**
   *
   */
  page?: number;

  /**
   *
   */
  size?: number;

  /**
   *
   */
  sort?: Array<string>;
}): Promise<CustomizedPageOfPostListVO> {
  return get("/api/content/posts", opt);
}

/**
 * Comments a post
 */
export function postsCommentsPost(opt: {
  /**
   * requestBody
   */
  __body: PostCommentParam;
}): Promise<BaseCommentDTO> {
  return post("/api/content/posts/comments", opt);
}

/**
 * Lists posts by keyword
 */
export function postsSearchPost(opt: {
  /**
   * keyword
   */
  keyword: string;

  /**
   *
   */
  page?: number;

  /**
   *
   */
  size?: number;

  /**
   *
   */
  sort?: Array<string>;
}): Promise<CustomizedPageOfBasePostSimpleDTO> {
  return post("/api/content/posts/search", opt);
}

/**
 * Gets a post
 */
export function postsSlugGet(opt: {
  /**
   * slug
   */
  slug: string;

  /**
   * formatDisabled
   */
  formatDisabled?: boolean;

  /**
   * sourceDisabled
   */
  sourceDisabled?: boolean;
}): Promise<PostDetailVO> {
  return get("/api/content/posts/slug", opt);
}

/**
 * Gets a post
 */
export function postsPostIdGet(opt: {
  /**
   * postId
   */
  postId: number;

  /**
   * formatDisabled
   */
  formatDisabled?: boolean;

  /**
   * sourceDisabled
   */
  sourceDisabled?: boolean;
}): Promise<PostDetailVO> {
  return get("/api/content/posts/{postId}", opt);
}

/**
 * Lists comment with list view
 */
export function postsPostIdCommentsList_viewGet(opt: {
  /**
   * postId
   */
  postId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfBaseCommentWithParentVO> {
  return get("/api/content/posts/{postId}/comments/list_view", opt);
}

/**
 * listTopComments
 */
export function postsPostIdCommentsTop_viewGet(opt: {
  /**
   * postId
   */
  postId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfCommentWithHasChildrenVO> {
  return get("/api/content/posts/{postId}/comments/top_view", opt);
}

/**
 * Lists comments with tree view
 */
export function postsPostIdCommentsTree_viewGet(opt: {
  /**
   * postId
   */
  postId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfBaseCommentVO> {
  return get("/api/content/posts/{postId}/comments/tree_view", opt);
}

/**
 * listChildrenBy
 */
export function postsPostIdCommentsCommentParentIdChildrenGet(opt: {
  /**
   * postId
   */
  postId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * commentParentId
   */
  commentParentId: number;
}): Promise<Array<BaseCommentDTO>> {
  return get(
    "/api/content/posts/{postId}/comments/{commentParentId}/children",
    opt
  );
}

/**
 * Likes a post
 */
export function postsPostIdLikesPost(opt: {
  /**
   * postId
   */
  postId: number;
}): Promise<void> {
  return post("/api/content/posts/{postId}/likes", opt);
}

/**
 * Gets next post by current post id.
 */
export function postsPostIdNextGet(opt: {
  /**
   * postId
   */
  postId: number;
}): Promise<PostDetailVO> {
  return get("/api/content/posts/{postId}/next", opt);
}

/**
 * Gets previous post by current post id.
 */
export function postsPostIdPrevGet(opt: {
  /**
   * postId
   */
  postId: number;
}): Promise<PostDetailVO> {
  return get("/api/content/posts/{postId}/prev", opt);
}

/**
 * Lists sheets
 */
export function sheetsGet(opt?: {
  /**
   *
   */
  page?: number;

  /**
   *
   */
  size?: number;

  /**
   *
   */
  sort?: Array<string>;
}): Promise<CustomizedPageOfSheetListVO> {
  return get("/api/content/sheets", opt);
}

/**
 * Comments a post
 */
export function sheetsCommentsPost(opt: {
  /**
   * requestBody
   */
  __body: SheetCommentParam;
}): Promise<BaseCommentDTO> {
  return post("/api/content/sheets/comments", opt);
}

/**
 * Gets a sheet by slug
 */
export function sheetsSlugGet(opt: {
  /**
   * slug
   */
  slug: string;

  /**
   * formatDisabled
   */
  formatDisabled?: boolean;

  /**
   * sourceDisabled
   */
  sourceDisabled?: boolean;
}): Promise<SheetDetailVO> {
  return get("/api/content/sheets/slug", opt);
}

/**
 * Gets a sheet
 */
export function sheetsSheetIdGet(opt: {
  /**
   * sheetId
   */
  sheetId: number;

  /**
   * formatDisabled
   */
  formatDisabled?: boolean;

  /**
   * sourceDisabled
   */
  sourceDisabled?: boolean;
}): Promise<SheetDetailVO> {
  return get("/api/content/sheets/{sheetId}", opt);
}

/**
 * Lists comment with list view
 */
export function sheetsSheetIdCommentsList_viewGet(opt: {
  /**
   * sheetId
   */
  sheetId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfBaseCommentWithParentVO> {
  return get("/api/content/sheets/{sheetId}/comments/list_view", opt);
}

/**
 * listTopComments
 */
export function sheetsSheetIdCommentsTop_viewGet(opt: {
  /**
   * sheetId
   */
  sheetId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfCommentWithHasChildrenVO> {
  return get("/api/content/sheets/{sheetId}/comments/top_view", opt);
}

/**
 * Lists comments with tree view
 */
export function sheetsSheetIdCommentsTree_viewGet(opt: {
  /**
   * sheetId
   */
  sheetId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * page
   */
  page?: number;
}): Promise<CustomizedPageOfBaseCommentVO> {
  return get("/api/content/sheets/{sheetId}/comments/tree_view", opt);
}

/**
 * listChildrenBy
 */
export function sheetsSheetIdCommentsCommentParentIdChildrenGet(opt: {
  /**
   * sheetId
   */
  sheetId: number;

  /**
   *
   */
  sort?: Array<string>;

  /**
   * commentParentId
   */
  commentParentId: number;
}): Promise<Array<BaseCommentDTO>> {
  return get(
    "/api/content/sheets/{sheetId}/comments/{commentParentId}/children",
    opt
  );
}

/**
 * Gets blog statistics.
 */
export function statisticsGet(): Promise<StatisticDTO> {
  return get("/api/content/statistics");
}

/**
 * Gets blog statistics with user
 */
export function statisticsUserGet(): Promise<StatisticWithUserDTO> {
  return get("/api/content/statistics/user");
}

/**
 * Lists tags
 */
export function tagsGet(opt?: {
  /**
   *
   */
  sort?: Array<string>;

  /**
   * If the param is true, post count of tag will be returned
   */
  more?: boolean;
}): Promise<Array<TagDTO>> {
  return get("/api/content/tags", opt);
}

/**
 * Lists posts by tag slug
 */
export function tagsSlugPostsGet(opt: {
  /**
   *
   */
  page?: number;

  /**
   *
   */
  size?: number;

  /**
   * slug
   */
  slug: string;

  /**
   *
   */
  sort?: Array<string>;
}): Promise<CustomizedPageOfPostListVO> {
  return get("/api/content/tags/{slug}/posts", opt);
}

/**
 * Gets activated theme property
 */
export function themesActivationGet(): Promise<ThemeProperty> {
  return get("/api/content/themes/activation");
}

/**
 * Lists activated theme settings
 */
export function themesActivationSettingsGet(): Promise<any> {
  return get("/api/content/themes/activation/settings");
}

/**
 * Gets blogger profile
 */
export function usersProfileGet(): Promise<UserDTO> {
  return get("/api/content/users/profile");
}
